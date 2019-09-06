import { createAction } from 'redux-actions';

import { GALLERY_GET, GALLERY_PREVIEW } from './types';

export const getGallery = createAction(GALLERY_GET);
export const setPreviewStatus = createAction(GALLERY_PREVIEW);