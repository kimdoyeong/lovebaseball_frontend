export const SearchActions = {
  SEARCH: "Search/SEARCH" as const,
  SEARCH_DONE: "Search/SEARCH_DONE" as const,
  SEARCH_ERROR: "Search/SEARCH_ERROR" as const,
  SEARCH_INPUT: "Search/SEARCH_INPUT" as const
};
export const SearchDispatchers = {
  search() {
    return {
      type: SearchActions.SEARCH
    };
  },
  searchDone(data: any) {
    return {
      type: SearchActions.SEARCH_DONE,
      payload: data
    };
  },
  searchError(err: any) {
    return {
      type: SearchActions.SEARCH_ERROR,
      payload: err
    };
  },
  searchInput(payload: string) {
    return {
      type: SearchActions.SEARCH_INPUT,
      payload
    };
  }
};

type ActionType = ReturnType<
  typeof SearchDispatchers[keyof typeof SearchDispatchers]
>;
interface IData {
  code: string;
  firstName: string;
  lastName: string;
  fullName: string;
}
export interface SearchType {
  data: IData[];
  search: string;
  fetching: boolean;
  error?: string;
}
const initialState: SearchType = {
  search: "",
  data: [],
  fetching: false
};

export default function(state = initialState, action: ActionType): SearchType {
  switch (action.type) {
    case SearchActions.SEARCH_INPUT:
      return {
        ...state,
        search: action.payload
      };
    case SearchActions.SEARCH:
      return {
        ...state,
        fetching: true
      };
    case SearchActions.SEARCH_DONE:
      return {
        ...state,
        fetching: false,
        data: action.payload
      };
    case SearchActions.SEARCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
