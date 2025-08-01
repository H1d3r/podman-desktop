<script lang="ts">
import { faArrowUp, faDownload, faEdit, faLayerGroup, faPlay, faTrash } from '@fortawesome/free-solid-svg-icons';
import { createEventDispatcher, onDestroy, onMount } from 'svelte';
import type { Unsubscriber } from 'svelte/store';
import { router } from 'tinro';

import ContributionActions from '/@/lib/actions/ContributionActions.svelte';
import { withConfirmation } from '/@/lib/dialogs/messagebox-utils';
import { context } from '/@/stores/context';
import { saveImagesInfo } from '/@/stores/save-images-store';
import type { Menu } from '/@api/menu.js';
import { MenuContext } from '/@api/menu-context.js';

import { runImageInfo } from '../../stores/run-image-store';
import { ContextUI } from '../context/context';
import ListItemButtonIcon from '../ui/ListItemButtonIcon.svelte';
import ActionsWrapper from './ActionsMenu.svelte';
import { ImageUtils } from './image-utils';
import type { ImageInfoUI } from './ImageInfoUI';

interface Props {
  onPushImage: (imageInfo: ImageInfoUI) => void;
  onRenameImage: (imageInfo: ImageInfoUI) => void;
  image: ImageInfoUI;
  dropdownMenu?: boolean;
  detailed?: boolean;
  groupContributions?: boolean;
}

let {
  onPushImage,
  onRenameImage,
  image = $bindable(),
  dropdownMenu = false,
  detailed = false,
  groupContributions = false,
}: Props = $props();

const imageUtils = new ImageUtils();

let contributions: Menu[] = $state([]);
let globalContext: ContextUI | undefined = $state();
let contextsUnsubscribe: Unsubscriber;
let groupingContributions = $state(false);

const dispatch = createEventDispatcher<{ update: ImageInfoUI }>();

onMount(async () => {
  contributions = await window.getContributedMenus(MenuContext.DASHBOARD_IMAGE);
  groupingContributions = groupContributions && !dropdownMenu && contributions.length > 1;
  contextsUnsubscribe = context.subscribe(value => {
    // Copy context, do not use reference
    globalContext = new ContextUI();
    const allValues = value.collectAllValues();
    for (const k in allValues) {
      globalContext.setValue(k, allValues[k]);
    }

    const labels = image.labels ? Object.keys(image.labels) : [];
    globalContext.setValue('imageLabelKeys', labels);
  });
});

onDestroy(() => {
  // unsubscribe from the store
  if (contextsUnsubscribe) {
    contextsUnsubscribe();
  }
});

async function runImage(imageInfo: ImageInfoUI): Promise<void> {
  runImageInfo.set(imageInfo);
  router.goto('/image/run/basic');
}

async function deleteImage(): Promise<void> {
  image.status = 'DELETING';
  dispatch('update', image);

  try {
    await imageUtils.deleteImage(image);
  } catch (error) {
    await onError(`Error while deleting image: ${String(error)}`);
  }
}

async function renameImage(imageInfo: ImageInfoUI): Promise<void> {
  onRenameImage(imageInfo);
}

async function pushImage(imageInfo: ImageInfoUI): Promise<void> {
  onPushImage(imageInfo);
}

async function showLayersImage(): Promise<void> {
  router.goto(`/images/${image.id}/${image.engineId}/${image.base64RepoTag}/history`);
}

async function onError(error: string): Promise<void> {
  await window.showMessageBox({
    title: 'Something went wrong.',
    message: error,
    type: 'error',
  });
}

function saveImage(): void {
  saveImagesInfo.set([image]);
  router.goto('/images/save');
}
</script>

<ListItemButtonIcon title="Run Image" onClick={(): Promise<void> => runImage(image)} detailed={detailed} icon={faPlay} />

<ListItemButtonIcon
  title="Delete Image"
  onClick={(): void => withConfirmation(deleteImage, `delete image ${image.name}:${image.tag}`)}
  detailed={detailed}
  icon={faTrash}
  enabled={image.status === 'UNUSED'} />

<!-- If dropdownMenu is true, use it, otherwise just show the regular buttons -->
<ActionsWrapper
  dropdownMenu={dropdownMenu}
  onBeforeToggle={(): void => {
    globalContext?.setValue('selectedImageId', image.id);
  }}>
  <ListItemButtonIcon
    title="Push Image"
    onClick={(): Promise<void> => pushImage(image)}
    menu={dropdownMenu}
    detailed={detailed}
    icon={faArrowUp} />

  <ListItemButtonIcon
    title="Edit Image"
    onClick={(): Promise<void> => renameImage(image)}
    menu={dropdownMenu}
    detailed={detailed}
    icon={faEdit} />

  {#if !detailed}
    <ListItemButtonIcon
      title="Show History"
      onClick={showLayersImage}
      menu={dropdownMenu}
      detailed={detailed}
      icon={faLayerGroup} />
  {/if}
  <ListItemButtonIcon
    title="Save Image"
    tooltip="Save image to a local directory"
    onClick={saveImage}
    menu={dropdownMenu}
    detailed={detailed}
    icon={faDownload} />

  <ActionsWrapper dropdownMenu={groupingContributions} dropdownMenuAsMenuActionItem={groupingContributions}>
    <ContributionActions
      args={[image]}
      dropdownMenu={groupingContributions ? true : dropdownMenu}
      contributions={contributions}
      contextPrefix="imageItem"
      detailed={detailed}
      onError={onError}
      contextUI={globalContext} />
  </ActionsWrapper>
</ActionsWrapper>
