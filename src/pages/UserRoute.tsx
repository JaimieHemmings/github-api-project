import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGithubContext } from '@/context/github/GithubContext';
import {FaCodepen, FaStore, FaUserFriends, FaUsers, FaTwitter, FaHome, FaMoneyBill} from 'react-icons/fa';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import UserRepos from '@/components/users/UserRepos';

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
            {user.hireable && (
              <div className="flex flex-col justify-center py-3">
                <Button>
                  <FaMoneyBill className="text-2xl inline-block" />
                  Hirable
                </Button>
              </div>
            )}
            <h1 className="text-2xl font-bold">{user.login}</h1>  
            
            </CardHeader>
          </div>
          <div className="basis-2/3 flex flex-col gap-2">
            
            {user.location && (
              <p><strong>Location:</strong> {user.location}</p>
            )}
            {user.bio && (
              <p>{user.bio}</p>
            )}
            {user.blog && (
            <p>
              <FaHome className="text-2xl inline-block" />
              <a
                href={user.blog.startsWith("http://") || user.blog.startsWith("https://")
                  ? user.blog
                  : `https://${user.blog}` }
                target="_blank"
                rel="noopener noreferrer"
                className="px-2"
              >
                {user.blog}
              </a>
            </p>
            )}
            {user.twitter_username && (
              <p><FaTwitter className="text-2xl inline-block" /> <a href={`https://x.com/${user.twitter_username}`}>https://x.com/{user.twitter_username}</a></p>
            )}
            <div className="flex md:flex-row justify-between gap-4 align-middle">
              <div className="flex flex-col gap-2 justify-center text-center py-12">
                <FaUserFriends className="inline-block mx-auto text-2xl" /> 
                <p><strong>Followers:</strong> {user.followers}</p>
              </div>
              <div className="flex flex-col gap-2 justify-center text-center py-12">
                <FaUsers className="inline-block mx-auto text-2xl" /> 
                <p><strong>Following:</strong> {user.following}</p>
              </div>
              <div className="flex flex-col gap-2 justify-center text-center py-12">
                <FaCodepen className="inline-block mx-auto text-2xl" /> 
                <p><strong>Public Repos:</strong> {user.public_repos}</p>  
              </div>
              <div className="flex flex-col gap-2 justify-center text-center py-12">
                <FaStore className="inline-block mx-auto text-2xl" /> 
                <p><strong>Public Gists:</strong> {user.public_gists}</p>                
              </div>
            </div>  
            <Button className="inline w-[200px]">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                >
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </Card>
      <UserRepos />
    </div>
  );
};

export default UserRoute;