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
    <header className="py-4 fixed top-0 w-full">
      <div className="container mx-auto flex items-center justify-between gap-10 ">
        <div>
          <Link to="/">
            <FaGithub className="text-2xl font-bold" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={item.href} className="text-gray-500 hover:text-gray-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/contact">
          <Button>Contact</Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;