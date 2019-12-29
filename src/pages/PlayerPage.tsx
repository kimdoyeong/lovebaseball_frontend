import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { playerDispatcher } from "../store/player";
import { RootState } from "../store/reducer";
import PlayerPage from "../components/Player/PlayerPage/index";

function Player({ match: { params } }: RouteComponentProps) {
  const { id } = params as any;
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.player);
  useEffect(() => {
    if (!id) return;
    dispatch(playerDispatcher.loadPlayer(id));
  }, [id, dispatch]);
  if (loading) {
    return <h1>로드 중...</h1>;
  }
  if (!data) return null;
  return <PlayerPage player={data} />;
}

export default Player;
