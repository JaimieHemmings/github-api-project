import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { Button } from './ui/button'

type NavItem = {
  id: number
  href: string
  label: string
  isExternal: boolean
}

const navItems: NavItem[] = [
  {
    id: 1,
    href: "/about",
    label: "About",
    isExternal: false
  }
]

const NavBar = () => {
  return (
    <header className="py-4 fixed top-0 w-full max-md:px-5 bg-slate-50 z-[999]">
      <div className="container mx-auto flex items-center justify-between gap-10 ">
        <div>
          <Link to="/">
            <div className="flex flex-row gap-1">
              <FaGithub className="text-2xl font-bold inline-block" />
              <span className="font-semibold">GithubRef</span>
            </div>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={item.href} className="text-slate-900 hover:text-slate-700 font-semibold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/contact">
          <Button className="font-semibold hover:bg-slate-700">Contact</Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;