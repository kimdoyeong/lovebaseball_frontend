export const playerAcitons = {
  LOAD_PLAYER: "Player/LOAD_PLAYER" as const,
  LOAD_PLAYER_DONE: "Player/LOAD_PLAYER_DONE" as const,
  LOAD_PLAYER_ERROR: "Player/LOAD_PLAYER_ERROR" as const
};

export const playerDispatcher = {
  loadPlayer(id: string) {
    return {
      type: playerAcitons.LOAD_PLAYER,
      id
    };
  },
  loadPlayerDone(data: any) {
    return {
      type: playerAcitons.LOAD_PLAYER_DONE,
      data
    };
  },
  loadPlayerError() {
    return {
      type: playerAcitons.LOAD_PLAYER_ERROR
    };
  }
};

type ActionType = ReturnType<
  typeof playerDispatcher[keyof typeof playerDispatcher]
>;
export interface PlayerType {
  loading: boolean;
  data: any;
  error?: boolean;
}
const initialState: PlayerType = {
  loading: false,
  data: null
};

export default function(state = initialState, action: ActionType): PlayerType {
  switch (action.type) {
    case playerAcitons.LOAD_PLAYER:
      return {
        loading: true,
        data: null
      };
    case playerAcitons.LOAD_PLAYER_DONE:
      return {
        loading: false,
        data: action.data
      };
    case playerAcitons.LOAD_PLAYER_ERROR:
      return {
        loading: false,
        data: null,
        error: true
      };
    default:
      return state;
  }
}
