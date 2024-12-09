import React, { useState, useEffect } from 'react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import UserItem from '@/components/users/UserItem';

type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

const UserResults: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });

      const data: User[] = await response.json();
      setUsers(data.slice(0, 12)); 
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <section className="container mx-auto p-5">
        <div className="container flex flex-col items-center text-center">
          <p className="semibold">We&apos;re hiring</p>
          <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
            Meet our team
          </h2>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur.
            Explicabo.
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