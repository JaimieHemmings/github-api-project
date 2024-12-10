import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGithubContext } from '@/context/github/GithubContext';
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserRoute: React.FC = () => {
  const { getUser, user, loading } = useGithubContext();
  const { login } = useParams<{ login: string }>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (login) {
          await getUser(login);
        } else {
          setError('No username provided');
        }
      } catch (err) {
        setError('Failed to fetch user');
        console.error(err);
      }
    };

    fetchUser();
  }, [login, getUser]);

  if (error) {
    return (
      <div className="py-24 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="py-24 flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="py-24">
        <p>No user found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <Card className="p-5 border-none drop-shadow-none shadow-none">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="basis-1/3">
          <CardHeader className="flex items-center">
            <Avatar className="w-[70%] my-auto h-auto border">
              <AvatarImage src={user.avatar_url} />
              <AvatarFallback>{user.login}</AvatarFallback>
            </Avatar>
              <div className="py-12 flex flex-col justify-between gap-4">
                <h1 className="text-2xl font-bold">{user.login}</h1>    
                <p><strong>Location:</strong> {user.location}</p>
                <p>{user.bio}</p>
                <p>{user.blog}</p>
                <Button>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    View GitHub Profile
                  </a>
                </Button>
              </div>
            </CardHeader>
          </div>
          <div className="basis-2/3">
            <p><strong>Twitter:</strong> {user.twitter_username}</p>
            <p><FaUserFriends className="inline-block" /> <strong>Followers:</strong> {user.followers}</p>
            <p><FaUsers className="inline-block" /> <strong>Following:</strong> {user.following}</p>
            <p><FaCodepen className="inline-block" /> <strong>Public Repos:</strong> {user.public_repos}</p>
            <p><FaStore className="inline-block" /> <strong>Public Gists:</strong> {user.public_gists}</p>
            <p><strong>Hirable:</strong> {user.hireable ? "Yes" : "No"}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserRoute;