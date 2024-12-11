# GithubRef

A modern GitHub user explorer built with Vite, TypeScript, and ShadcN UI components. This project demonstrates the integration of GitHub's API with modern web technologies and component libraries.

## 🚀 Features

- Search GitHub users
- View detailed user profiles
- Responsive design
- Real-time search results
- Modern UI components
- Error handling and loading states

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [ShadcN UI](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Router](https://reactrouter.com/) - Client-side routing
- [GitHub API](https://docs.github.com/en/rest) - Access to GitHub data

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/githubref.git
```
2. Install Dependencies
```bash
npm install
```
3. Create a .env file in the root directory and add your GitHub token:
```bash
VITE_GITHUB_TOKEN=your_github_token_here
VITE_GITHUB_URL=https://api.github.com
```
4. Start the development server
```bash
npm run dev
```

## 🎯 Usage

1. Navigate to the homepage
2. Enter a GitHub username in the search bar
3. View user details and repositories
4. Explore different users through the interface

## 🔑 Environment Variables

Required environment variables:

- *VITE_GITHUB_TOKEN* - Your GitHub Personal Access Token
- *VITE_GITHUB_URL* - GitHub API URL

## 🙏 Acknowledgements

- [Shadcn/UI](https://ui.shadcn.com/) for the amazing component library
- [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28) for providing the data