import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import player, { PlayerType } from "./player";
import PlayerSaga from "./player/sagas";
import search, { SearchType } from "./search";
import SearchSaga from "./search/sagas";

export interface RootState {
  player: PlayerType;
  search: SearchType;
}

const reducer = combineReducers({
  player,
  search
});
export function* RootSaga() {
  yield all([PlayerSaga(), SearchSaga()]);
}

export default reducer;
