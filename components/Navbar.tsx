import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const NavLinks = ({ isFooter }: { isFooter?: boolean }) => {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.id}>
          <Link
            href={item.route}
            className={cn(isFooter ? "link link-hover" : "")}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
};

const Navbar = () => {
  return (
    <header className="navbar bg-base-100 h-16 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLinks />
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Novara
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/sign-in" className="btn btn-primary">
          Log in
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
