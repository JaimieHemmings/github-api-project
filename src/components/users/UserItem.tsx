import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

type UserItemProps = {
  user: User;
};

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <Card className="p-5">
      <div className="flex">
        <div className="basis-1/2">
          <div className="flex flex-row justify-center">
            <Avatar className="w-[70%] my-auto h-auto border">
              <AvatarImage src={user.avatar_url} />
              <AvatarFallback>{user.login}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col justify-center basis-1/2">
          <CardHeader>
            <CardTitle className="mx-auto">{user.login}</CardTitle>
            <div className="py-2 flex flex-col gap-2 align-middle w-full">
              <Link to={`/users/${user.login}`} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="bg-white text-slate-900 hover:text-white hover:bg-slate-900 transition-all block w-full">
                  Details
                </Button>
              </Link>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                <Button className='block w-full'>
                  Profile
                </Button>
              </a>
            </div>
          </CardHeader>
        </div>
      </div>
    </Card>
  );
};

export default UserItem;