type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

type State = {
  users: User[];
  loading: boolean;
  searchResults?: User[];
};

type Action =
  | { type: 'FETCH_USERS'; payload: User[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'FETCH_SEARCH_RESULTS'; payload: User[] };

  const githubReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'FETCH_USERS':
        return {
          ...state,
          users: action.payload,
          loading: false,
        };
      case 'FETCH_SEARCH_RESULTS':
        return {
          ...state,
          searchResults: action.payload,
          loading: false,
        };
      case 'SET_LOADING':
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  };
  
  export default githubReducer;
