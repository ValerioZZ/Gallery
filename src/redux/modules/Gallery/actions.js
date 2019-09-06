import { createAction } from 'redux-actions';

import { GALLERY_GET } from './types';

export const getGallery = createAction(GALLERY_GET);