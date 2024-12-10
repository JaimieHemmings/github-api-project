import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import githubReducer from './GithubReducer';

type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

type GithubContextType = {
  users: User[];
  searchResults?: User[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
  fetchSearchResults: (query: string) => Promise<void>;
};

const GithubContext = createContext<GithubContextType | undefined>(undefined);

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

type GithubProviderProps = {
  children: ReactNode;
};

export const GithubProvider: React.FC<GithubProviderProps> = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    searchResults: [],
  }

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data: User[] = await response.json();
    dispatch({
      type: 'FETCH_USERS',
      payload: data.slice(0, 12),
    })
  };

  const fetchSearchResults = async (query: string) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/search/users?q=${query}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    dispatch({
      type: 'FETCH_SEARCH_RESULTS',
      payload: data.items,
    });
  };

  // Set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING', payload: true });

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchResults: state.searchResults,
        fetchUsers,
        fetchSearchResults
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;