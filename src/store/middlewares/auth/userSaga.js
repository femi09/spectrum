import { takeEvery, put, call } from "redux-saga/effects";
import { GET_USER } from "../../constants";
import { fetchUser } from "../../../api/auth";
import { setUser, setUserFailure } from "../../actions/auth";

export function* handleFetchUser({ token }) {
  try {
    const user = yield call(fetchUser, token);
    yield put(setUser(user));
  } catch (error) {
    yield put(setUserFailure(error.toString()));
  }
}

export default function* watchFetchUser() {
  yield takeEvery(GET_USER, handleFetchUser);
}
