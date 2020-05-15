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
import { 
  GET_SEARCH_TERM_RESULT,
  setLoader,
  setMovieData,
} from "./actions";
import NetworkUtils from "../utils/NetworkUtils";
const { axiosInstance } = NetworkUtils

export function* getSearchTermDataInSaga({data}) {
  try {
    yield put(setLoader(true));
    const response = yield axiosInstance.get(`/?type=movie&apikey=a1b5f9ec&s=${data}`);
    if (response.data.Response) {
        yield put(setMovieData(response.data.Search))
    }
  } catch (error) {
    console.log('error in login ', error)
    alert('something went wrong please try again')
  }finally{
    yield put(setLoader(false));
  }
}

export default function* fetchData() {
  yield takeEvery(GET_SEARCH_TERM_RESULT, getSearchTermDataInSaga);
}
