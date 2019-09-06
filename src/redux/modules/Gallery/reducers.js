import { handleActions } from 'redux-actions';

import { requestPending, requestSuccess, requestFail } from '../../../redux/api/request';
import { GALLERY_GET, GALLERY_PREVIEW, GALLERY_LIKE } from './types';

const initialState = {
  data: null,
  status: null,
  loading: false,
  preview: false,
  selectedGallery: null,
  likesGallery: {},
  error: null,
  message: '',
};

export default handleActions(
  {
    [requestPending(GALLERY_GET)]: state => ({
      ...state,
      data: null,
      status: requestPending(GALLERY_GET),
      loading: true,
      error: true,
      message: '',
    }),

    [requestSuccess(GALLERY_GET)]: (state, { payload }) => {
      return {
        ...state,
        status: requestSuccess(GALLERY_GET),
        data: payload,
        loading: false,
        id: null,
        error: null,
      };
    },

    [requestFail(GALLERY_GET)]: (state, { payload }) => ({
      ...state,
      data: null,
      status: requestFail(GALLERY_GET),
      error: true,
      loading: false,
      message: `${payload.status} - ${payload.statusText}`,
    }),

    [GALLERY_PREVIEW]: (state, { payload }) => {
      return {
        ...state,
        preview: payload ? true : false,
        selectedGallery: payload ? state.data[payload.id - 1] : null,
      };
    },

    [GALLERY_LIKE]: (state, { payload }) => {
      let thumbnails = state.likesGallery;
      if (thumbnails[payload.id]) {
        delete thumbnails[payload.id];
      } else {
        thumbnails[payload.id] = true;
      }
      return {
        ...state,
        likesGallery: thumbnails,
      };
    },
  },
  initialState
);
