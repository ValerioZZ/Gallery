import { handleActions } from 'redux-actions';

import { requestPending, requestSuccess, requestFail } from '../../../redux/api/request';
import { GALLERY_GET } from './types';

const initialState = {
  data: null,
  status: null,
  loading: false,
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
  },
  initialState
);
