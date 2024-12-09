import React, { useContext, useEffect } from 'react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import UserItem from '@/components/users/UserItem';
import GithubContext from '@/context/github/GithubContext';

type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

const UserResults: React.FC = () => {
  const { users, loading, fetchUsers } = useContext(GithubContext) as {
    users: User[];
    loading: boolean;
    fetchUsers: () => Promise<void>;
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <section className="container mx-auto p-5">
        <div className="container flex flex-col items-center text-center">
          <p className="semibold">With Millions of</p>
          <h2 className="my-2 mb-6 text-pretty text-2xl font-bold lg:text-4xl">
            Github Users
          </h2>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
            Github has a large community of developers and users. Here are some of the users on Github.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 md:grid-cols-3">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <div className="container mx-auto my-12 p-5 text-center">
        <LoadingSpinner className="mx-8 w-[100px] h-auto inline-block" />
      </div>
    );
  }
};

export default UserResults;