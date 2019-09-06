import { createAction } from 'redux-actions';

import { GALLERY_GET, GALLERY_PREVIEW, GALLERY_LIKE } from './types';

export const getGallery = createAction(GALLERY_GET);
export const setPreviewStatus = createAction(GALLERY_PREVIEW);
export const likeGallery = createAction(GALLERY_LIKE);