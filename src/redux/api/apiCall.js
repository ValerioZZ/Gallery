import fetch from 'cross-fetch';
import { call, put } from 'redux-saga/effects';
import { get } from 'lodash';

import { requestFail, requestPending, requestSuccess } from './request';

const defaultHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return headers;
};

export default ({
  type,
  method, // one of 'get', 'post', 'put', 'delete'
  params: sagaParams,
  headers,
  body,
  baseURL,
  path,
  success,
  fail,
  payloadOnSuccess,
  payloadOnFail,
}) =>
  function*(action) {
    const {
      params,
      headers: customHeaders,
      success: successCallback,
      fail: failCallback,
      resolve,
      reject,
    } = action.payload || {};

    try {
      const reqHeaders = Object.assign({}, defaultHeaders(), headers);

      yield put({
        type: requestPending(type),
      });
      console.log("callingAPI")
      const res = yield call(
        fetch,
        `${baseURL}${typeof path === 'function' ? path(action) : path}`,
        {
          method: method.toLowerCase(),
          body: JSON.stringify(typeof body === 'function' ? body(action) : body),
          headers: {
            ...reqHeaders,
            ...(customHeaders || {}),
          },
          params: { ...sagaParams, ...params },
        }
      );

      const data = yield call([res, res.json]);

      const payload = payloadOnSuccess ? payloadOnSuccess(data.data, action) : data;

      yield put({
        type: requestSuccess(type),
        payload,
      });

      if (resolve) {
        yield resolve(payload);
      }

      success && (yield success(res.data, action));
      successCallback && successCallback(res.data);

      return true;
    } catch (err) {
      const errRes = get(err, 'response', err);
      const payload = payloadOnFail ? payloadOnFail(errRes, action) : errRes;

      yield put({
        type: requestFail(type),
        payload,
      });

      if (reject) {
        yield reject(payload);
      }

      fail && (yield fail(errRes));
      failCallback && failCallback(errRes);

      return false;
    }
  };
