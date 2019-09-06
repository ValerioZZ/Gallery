// import { put, takeLatest } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga/effects';

import apiCall from '../api/apiCall';
import { GALLERY_GET } from '../modules/Gallery/types';

const { REACT_APP_GALLERY_DOMAIN } = process.env;
console.log('chekcingURL', REACT_APP_GALLERY_DOMAIN);
const doGetGallery = apiCall({
  type: GALLERY_GET,
  method: 'GET',
  baseURL: `${REACT_APP_GALLERY_DOMAIN}`,
  path: '/photos'
});

export default function* rootSaga() {
  yield takeLatest(GALLERY_GET, doGetGallery);
}