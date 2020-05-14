import {
  call,
  all,
  put,
  select,
  takeLatest,
  takeEvery,
  delay,
  takeLeading,
} from 'redux-saga/effects';
import { GET_SEARCH_TERM_RESULT } from "./actions";
import NetworkUtils from "../utils/NetworkUtils";
const { axiosInstance } = NetworkUtils

export function* getSearchTermDataInSaga({data}) {
  // try {
  //   console.log('getAppDataCall in data is ', data)
  //   yield put(setLoginStatus(true));
  //   const response = yield axiosInstance.get(`s=${data}`);
  //   console.log('response.data is ', response)
  //   // if (response.status === 200 || response.status === 201) {
  //   //     yield put(setMobileNumber(''))
  //   //     yield put(setUserDetails(response.data))
  //   // }
  // } catch (error) {
  //   console.log('error in login ', error)
  //   alert('something went wrong please try again')
  // }finally{
  //   yield put(setLoginStatus(false));
  // }
}

export default function* fetchData() {
  yield takeEvery(GET_SEARCH_TERM_RESULT, getSearchTermDataInSaga);
}
