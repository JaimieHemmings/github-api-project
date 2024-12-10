import React, { useContext } from 'react';
import GithubContext from '@/context/github/GithubContext';
import UserItem from '@/components/users/UserItem';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import UserSearch from '@/components/users/UserSearch'

type user = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

const SearchResults: React.FC = () => {
  const { searchResults, loading } = useContext(GithubContext) as {
    searchResults: any;
    loading: boolean;
  };

  if(!loading){

    return (
      <>
        < UserSearch />
        <div className="container mx-auto p-5 py-12">
          <div className="py-12">
            <h1 className="mb-12 text-pretty text-4xl font-bold lg:text-6xl">
              {searchResults.length} Search Results
            </h1>
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 md:grid-cols-3">
              {searchResults.slice(0, 24).map((user: user) => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="container mx-auto my-12 p-5 text-center">
        <LoadingSpinner className="mx-8 w-[100px] h-auto inline-block" />
      </div>
    );
  };
};

export default SearchResults;