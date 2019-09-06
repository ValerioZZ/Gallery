import { handleActions } from 'redux-actions';

import { requestPending, requestSuccess, requestFail } from '../../../redux/api/request';
import { GALLERY_GET, GALLERY_PREVIEW, GALLERY_LIKE } from './types';

const initialState = {
  data: null,
  status: null,
  loading: false,
  preview: false,
  selectedGallery: null,
  selectedLikeStatus: false,
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
        selectedLikeStatus: payload && state.likesGallery[payload.id - 1] ? true : false,
        selectedGallery: payload ? state.data[payload.id - 1] : null,
      };
    },

    [GALLERY_LIKE]: (state, { payload }) => {
      let favoriteThumbnails = state.likesGallery;
      console.log("checkingLikes", favoriteThumbnails[payload.id - 1], (typeof favoriteThumbnails[payload.id - 1] !== undefined))
      if (favoriteThumbnails[payload.id - 1] === true) {
        delete favoriteThumbnails[payload.id - 1];
      } else {
        favoriteThumbnails[payload.id - 1] = true;
      }
      // console.log(thumbnails[payload.id])
      return {
        ...state,
        likesGallery: favoriteThumbnails,
        selectedLikeStatus: favoriteThumbnails[payload.id - 1] ? true : false
      };
    },
  },
  initialState
);
