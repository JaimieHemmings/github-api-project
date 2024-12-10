import React, { useContext } from 'react';
import GithubContext from '@/context/github/GithubContext';

type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

const SearchResults: React.FC = () => {
  const { searchResults } = useContext(GithubContext) as {
    searchResults: any;
  };

  return (
    <div className="container mx-auto p-5 py-12">
      <div className="py-12">
        {searchResults.map((user: User) => (
          <div key={user.id} className="flex items-center justify-between p-4 my-2 bg-gray-100 rounded-md">
            <div>
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <a href={user.html_url} target="_blank" rel="noreferrer" className="ml-2 font-bold text-pretty">
                {user.login}
              </a>
            </div>
            <button className="p-2 bg-slate-900 text-white rounded-md font-bold hover:bg-slate-700">
              Follow
            </button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;