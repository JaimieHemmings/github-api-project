import { useEffect, useContext } from 'react';
import GithubContext from '@/context/github/GithubContext';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { Button } from '../ui/button';

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
};

type User = {
  login: string;
  id: number;
};

const UserRepos = () => {
  const { fetchRepos, user, repos, loading } = useContext(GithubContext) as {
    fetchRepos: (login: string) => Promise<void>;
    user: User | null;
    repos: Repo[];
    loading: boolean;
  };

  useEffect(() => {
    if (user?.login) {
      fetchRepos(user.login);
    }
  }, [user, fetchRepos]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4">Latest Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.slice(0,12).map((repo) => (
          <div key={repo.id} className="border p-4 rounded-lg">
            <h3 className="font-semibold">{repo.name}</h3>
            <p className="text-sm text-gray-600">{repo.description}</p>
            <div className="mt-2">
              {repo.language && (
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {repo.language}
                </span>
              )}
            </div>
            <div className="flex items-center mt-2">
              <div className="mr-4">
                <span className="text-sm text-gray-600">Stars:</span>{' '}
                {repo.stargazers_count}
              </div>
              <div>
                <span className="text-sm text-gray-600">Forks:</span>{' '}
                {repo.forks_count}
              </div>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-4">
                View Repository
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRepos;