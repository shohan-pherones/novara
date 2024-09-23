import { socialItems } from "@/constants";
import Link from "next/link";
import { NavLinks } from "./Navbar";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <ul className="flex flex-wrap justify-center gap-4">
          <NavLinks isFooter />
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-wrap justify-center gap-4">
          {socialItems.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>
                <item.icon size={24} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <Link href="/" className="link link-hover">
            Novara Beauty Salon & Spa Ltd.
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
