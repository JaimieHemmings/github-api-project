import React, { useState, useContext } from 'react';
import GithubContext from '@/context/github/GithubContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const UserSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const { fetchSearchResults } = useContext(GithubContext) as {
    fetchSearchResults: (query: string) => Promise<void>;
  };
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a search query');
      return;
    } else {
      fetchSearchResults(query);
      navigate('/search-results');
    }
  };

  return (
    <div className="container mx-auto p-5 py-12">
      <div className="text-center mb-6">
        <h2 className="my-2 text-pretty text-2xl font-bold lg:text-4xl">
          Github Users
        </h2>
        <p>Looking for someone in particular?</p>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for users..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <Button
          type="submit"
          className="ml-2 p-2 bg-slate-900 text-white rounded-md font-bold hover:bg-slate-700"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default UserSearch;