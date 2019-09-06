import { all } from 'redux-saga/effects';

import gallery from './gallery';

export default function* rootSaga() {
    yield all([
        gallery(),
    ])
}