import React, { createContext, useState, useEffect, ReactNode } from 'react';

type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

type GithubContextType = {
  users: User[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
};

const GithubContext = createContext<GithubContextType | undefined>(undefined);

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

type GithubProviderProps = {
  children: ReactNode;
};

export const GithubProvider: React.FC<GithubProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data: User[] = await response.json();
    setUsers(data.slice(0, 12));
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;