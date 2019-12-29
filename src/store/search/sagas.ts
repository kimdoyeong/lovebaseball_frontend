import { select, call, takeEvery, put } from "redux-saga/effects";
import { SearchActions, SearchDispatchers } from ".";
import { RootState } from "../reducer";
import { searchPlayer } from "../../lib/api/player";

function* FetchingSaga() {
  const name = yield select((state: RootState) => state.search.search);

  try {
    const result = yield call(searchPlayer, name);
    yield put(SearchDispatchers.searchDone(result));
  } catch (e) {
    yield put(SearchDispatchers.searchError(e.message));
  }
}
function* SearchSaga() {
  yield takeEvery(SearchActions.SEARCH, FetchingSaga);
}
export default SearchSaga;
