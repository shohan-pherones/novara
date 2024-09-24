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

export const serviceItems = [
  {
    id: 1,
    title: "Luxury Facial Treatment",
    image:
      "https://images.pexels.com/photos/5659018/pexels-photo-5659018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A revitalizing facial that cleanses, exfoliates, and hydrates your skin, leaving it glowing and refreshed.",
    price: 150,
  },
  {
    id: 2,
    title: "Aromatherapy Massage",
    image:
      "https://images.pexels.com/photos/5659006/pexels-photo-5659006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A relaxing full-body massage with essential oils designed to soothe muscles and promote mental relaxation.",
    price: 120,
  },
  {
    id: 3,
    title: "Deluxe Manicure & Pedicure",
    image:
      "https://images.pexels.com/photos/6724402/pexels-photo-6724402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Treat your hands and feet to a luxurious manicure and pedicure, complete with exfoliation, hydration, and polish.",
    price: 90,
  },
  {
    id: 4,
    title: "Detoxifying Body Wrap",
    image:
      "https://images.pexels.com/photos/6144438/pexels-photo-6144438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A full-body detox wrap that purifies your skin, removes toxins, and leaves your body feeling rejuvenated.",
    price: 130,
  },
];
