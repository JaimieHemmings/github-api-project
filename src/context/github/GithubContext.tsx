import React, { createContext, useReducer, useEffect, ReactNode, useCallback } from 'react';
import githubReducer from './GithubReducer';

import { GithubStateType } from '@/types/types';

type GithubContextType = GithubStateType & {
  fetchUsers: () => Promise<void>;
  fetchSearchResults: (query: string) => Promise<void>;
  getUser: (login: string) => Promise<void>;
};

type GithubProviderProps = {
  children: ReactNode;
};

// Constants
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// Initial State
const initialState: GithubStateType = {
  user: null,
  users: [],
  searchResults: [],
  loading: false,
};

// Context Creation
const GithubContext = createContext<GithubContextType | undefined>(undefined);

export const GithubProvider: React.FC<GithubProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Centralized fetch method
  const fetchFromGitHub = async (
    url: string, 
    actionType: any, 
    transformData?: (data: any) => any
  ) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const payload = transformData ? transformData(data) : data;

      dispatch({
        type: actionType,
        payload
      });
    } catch (error) {
      console.error('GitHub API Error:', error);
      
      // Handle specific error scenarios
      if (error instanceof Error && error.message.includes('404')) {
        window.location.href = '/notfound';
      }

      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  // Memoized fetch methods to prevent unnecessary re-renders
  const fetchUsers = useCallback(() => {
    return fetchFromGitHub(
      `${GITHUB_URL}/users`, 
      'FETCH_USERS'
    );
  }, []);

  const getUser = useCallback((login: string) => {
    return fetchFromGitHub(
      `${GITHUB_URL}/users/${login}`, 
      'GET_USER'
    );
  }, []);

  const fetchSearchResults = useCallback((query: string) => {
    return fetchFromGitHub(
      `${GITHUB_URL}/search/users?q=${query}`, 
      'FETCH_SEARCH_RESULTS',
      (data) => data.items
    );
  }, []);

  // Initial users fetch
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <GithubContext.Provider 
      value={{
        ...state,
        fetchUsers,
        fetchSearchResults,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

// Custom hook for using GitHub context
export const useGithubContext = () => {
  const context = React.useContext(GithubContext);
  if (context === undefined) {
    throw new Error('useGithubContext must be used within a GithubProvider');
  }
  return context;
};