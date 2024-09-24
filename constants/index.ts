import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    label: "Home",
    route: "/",
  },
  {
    id: 2,
    label: "Services",
    route: "/services",
  },
  {
    id: 3,
    label: "Specialists",
    route: "/specialists",
  },
  {
    id: 4,
    label: "Blogs",
    route: "/blogs",
  },
  {
    id: 5,
    label: "About",
    route: "/about",
  },
  {
    id: 6,
    label: "Contact",
    route: "/contact",
  },
];

export const socialItems = [
  {
    id: 1,
    icon: FaFacebook,
    url: "/",
  },
  {
    id: 2,
    icon: FaInstagram,
    url: "/",
  },
  {
    id: 3,
    icon: FaTwitter,
    url: "/",
  },
  {
    id: 4,
    icon: FaYoutube,
    url: "/",
  },
];

export const heroItems = {
  home: {
    image: "/images/pexels-shkrabaanthony-5205668.jpg",
    headline: "Elevate Your Beauty, Indulge in Tranquility",
    description:
      "At Novara, we blend luxury beauty treatments with soothing spa experiences to rejuvenate your mind, body, and soul. From skincare to relaxation therapies, our expert team is dedicated to helping you look and feel your best. Discover a world where beauty meets serenity.",
    ctaLabel: "Discover Bliss – Make an Appointment",
    ctaRoute: "/services",
  },
};
