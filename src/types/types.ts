export interface UserType {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string;
  type?: string;
  location?: string;
  bio?: string;
  blog?: string;
  twitter_username?: string;
  followers?: number;
  following?: number;
  public_repos?: number;
  public_gists?: number;
  hireable?: boolean;
}

export interface GithubStateType {
  user: UserType | null;
  users: UserType[];
  searchResults: UserType[];
  loading: boolean;
  repos: any[];
};