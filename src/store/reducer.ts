import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import player, { PlayerType } from "./player";
import PlayerSaga from "./player/sagas";

export interface RootState {
  player: PlayerType;
}

const reducer = combineReducers({
  player
});
export function* RootSaga() {
  yield all([PlayerSaga()]);
}

export default reducer;
