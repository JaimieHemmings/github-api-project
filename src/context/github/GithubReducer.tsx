type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

// Define the shape of the state
type GithubState = {
  user: User | null;
  users: User[];
  searchResults: User[];
  loading: boolean;
};

// Define action types
type GithubAction = 
  | { type: 'FETCH_USERS'; payload: User[] }
  | { type: 'GET_USER'; payload: User }
  | { type: 'FETCH_SEARCH_RESULTS'; payload: User[] }
  | { type: 'SET_LOADING'; payload: boolean };

// Reducer function
const githubReducer = (state: GithubState, action: GithubAction): GithubState => {
  switch (action.type) {
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    
    case 'FETCH_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
        loading: false
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    
    default:
      return state;
  }
};

export default githubReducer;