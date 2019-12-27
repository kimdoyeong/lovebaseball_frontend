import { takeEvery, call, put } from "redux-saga/effects";
import { playerAcitons, playerDispatcher } from ".";
import { getPlayer } from "../../lib/api/player";

function* PlayerSaga() {
  yield takeEvery(playerAcitons.LOAD_PLAYER, loadPlayer);
}
function* loadPlayer({ id }: any) {
  const data = yield call(getPlayer, id);
  if (!data) {
    yield put(playerDispatcher.loadPlayerError());
    return;
  }
  yield put(playerDispatcher.loadPlayerDone(data));
}

export default PlayerSaga;
