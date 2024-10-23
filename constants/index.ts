import { TBooking } from "@/validators";
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
    image: "/images/hero__01.jpg",
    headline: "Elevate Your Beauty, Indulge in Tranquility",
    description:
      "At Novara, we blend luxury beauty treatments with soothing spa experiences to rejuvenate your mind, body, and soul. From skincare to relaxation therapies, our expert team is dedicated to helping you look and feel your best. Discover a world where beauty meets serenity.",
    ctaLabel: "Discover Bliss – Make an Appointment",
    ctaRoute: "/services",
  },
  services: {
    image: "/images/hero__02.jpg",
    headline: "Unwind, Refresh, Revitalize",
    description:
      "Explore our curated range of beauty and spa services at Novara. Whether you're looking for a revitalizing facial, a calming massage, or a complete makeover, our specialized treatments are designed to meet your needs. Step into a world of relaxation and care, tailored just for you.",
    ctaLabel: "Explore Our Services",
    ctaRoute: "/services#browse",
  },
  specialists: {
    image: "/images/hero__03.jpg",
    headline: "Meet the Experts Behind the Experience",
    description:
      "Our team of beauty and wellness specialists at Novara are dedicated professionals with years of expertise in the industry. From master aestheticians to experienced therapists, each specialist brings their unique skills to ensure you receive the best care possible. Discover the people who make your beauty and relaxation journey exceptional.",
    ctaLabel: "Get to Know Our Specialists",
    ctaRoute: "/specialists#browse",
  },
  about: {
    image: "/images/hero__04.jpg",
    headline: "Your Beauty Journey With Novara",
    description:
      "At Novara, our team of skilled beauty and wellness professionals is dedicated to providing exceptional care. With expertise spanning years in the industry, our specialists, from seasoned aestheticians to expert therapists, are committed to creating a rejuvenating and personalized experience for every client.",
    ctaLabel: "Explore Our Services",
    ctaRoute: "/services#browse",
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

export const specialistItems = [
  {
    id: 1,
    name: "Sophia Carter",
    image:
      "https://images.pexels.com/photos/5659009/pexels-photo-5659009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Sophia is a licensed esthetician with 8+ years of experience in skincare treatments, specializing in facials and chemical peels.",
    packages: [
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
    ],
  },
  {
    id: 2,
    name: "Liam Johnson",
    image:
      "https://images.pexels.com/photos/331989/pexels-photo-331989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Liam is a professional hairstylist known for creating stunning styles for all hair types. With 10 years of expertise, he excels in color treatments and modern cuts.",
    packages: [
      {
        id: 3,
        title: "Deluxe Manicure & Pedicure",
        image:
          "https://images.pexels.com/photos/6724402/pexels-photo-6724402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
          "Treat your hands and feet to a luxurious manicure and pedicure, complete with exfoliation, hydration, and polish.",
        price: 90,
      },
    ],
  },
  {
    id: 3,
    name: "Emma Patel",
    image:
      "https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Emma is a certified nail technician with a passion for creative nail art and intricate designs. She has been perfecting manicures and pedicures for over 6 years.",
    packages: [
      {
        id: 4,
        title: "Detoxifying Body Wrap",
        image:
          "https://images.pexels.com/photos/6144438/pexels-photo-6144438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
          "A full-body detox wrap that purifies your skin, removes toxins, and leaves your body feeling rejuvenated.",
        price: 130,
      },
    ],
  },
  {
    id: 4,
    name: "James Walker",
    image:
      "https://images.pexels.com/photos/9898597/pexels-photo-9898597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "James is an expert massage therapist specializing in deep tissue and relaxation techniques. He brings over 12 years of experience to help clients relieve stress and tension.",
    packages: [
      {
        id: 4,
        title: "Detoxifying Body Wrap",
        image:
          "https://images.pexels.com/photos/6144438/pexels-photo-6144438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
          "A full-body detox wrap that purifies your skin, removes toxins, and leaves your body feeling rejuvenated.",
        price: 130,
      },
    ],
  },
];

export const galleryItems = [
  {
    id: 1,
    image: "/images/gallery__01.jpg",
    alt: "Skincare treatment in progress",
  },
  {
    id: 2,
    image: "/images/gallery__02.jpg",
    alt: "Relaxing massage session",
  },
  {
    id: 3,
    image: "/images/gallery__03.jpg",
    alt: "Professional skincare facial",
  },
  {
    id: 4,
    image: "/images/gallery__04.jpg",
    alt: "Advanced skincare therapy",
  },
  {
    id: 5,
    image: "/images/gallery__05.jpg",
    alt: "Creative nail art design",
  },
  {
    id: 6,
    image: "/images/gallery__06.jpg",
    alt: "Skincare product application",
  },
  {
    id: 7,
    image: "/images/gallery__07.jpg",
    alt: "Nail treatment and manicure",
  },
  {
    id: 8,
    image: "/images/gallery__08.jpg",
    alt: "Expert haircut and styling",
  },
  {
    id: 9,
    image: "/images/gallery__09.jpg",
    alt: "Spa session for relaxation",
  },
  {
    id: 10,
    image: "/images/gallery__10.jpg",
    alt: "Skincare consultation and treatment",
  },
];

export const testimonialItems = [
  {
    id: 1,
    name: "Sophia Lane",
    designation: "Marketing Manager",
    company: "Glow Inc.",
    image:
      "https://images.pexels.com/photos/28302550/pexels-photo-28302550/free-photo-of-a-woman-sitting-on-a-stool-with-her-hair-in-a-bun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Had a wonderful experience at Novara! The ambiance was calming, and the staff was so attentive. Highly recommend it!",
  },
  {
    id: 2,
    name: "Ethan West",
    designation: "Software Engineer",
    company: "TechWave",
    image:
      "https://images.pexels.com/photos/28302550/pexels-photo-28302550/free-photo-of-a-woman-sitting-on-a-stool-with-her-hair-in-a-bun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "The services were decent but a bit overpriced for what was offered. I expected a more luxurious experience.",
  },
  {
    id: 3,
    name: "Isabella Grace",
    designation: "Freelance Writer",
    company: "None",
    image:
      "https://images.pexels.com/photos/28302550/pexels-photo-28302550/free-photo-of-a-woman-sitting-on-a-stool-with-her-hair-in-a-bun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Absolutely love Novara! My skin has never felt better after their facial treatment. Will definitely come back!",
  },
  {
    id: 4,
    name: "James Taylor",
    designation: "Business Analyst",
    company: "Insight Corp.",
    image:
      "https://images.pexels.com/photos/28302550/pexels-photo-28302550/free-photo-of-a-woman-sitting-on-a-stool-with-her-hair-in-a-bun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "The place was nice, but I wasn't completely satisfied with the massage. It lacked the pressure I was looking for.",
  },
  {
    id: 5,
    name: "Olivia Parker",
    designation: "Event Planner",
    company: "Perfect Events",
    image:
      "https://images.pexels.com/photos/28302550/pexels-photo-28302550/free-photo-of-a-woman-sitting-on-a-stool-with-her-hair-in-a-bun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Fantastic service! The staff made me feel pampered from the moment I walked in. Novara is my go-to spot now!",
  },
  {
    id: 6,
    name: "Michael Adams",
    designation: "Accountant",
    company: "Finance Pro",
    image:
      "https://images.pexels.com/photos/28302550/pexels-photo-28302550/free-photo-of-a-woman-sitting-on-a-stool-with-her-hair-in-a-bun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "The facial was good, but the wait time was longer than expected. The overall experience was okay.",
  },
  {
    id: 7,
    name: "Emma Brooks",
    designation: "Interior Designer",
    company: "Creative Spaces",
    image:
      "https://images.pexels.com/photos/28302550/pexels-photo-28302550/free-photo-of-a-woman-sitting-on-a-stool-with-her-hair-in-a-bun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "I had the best manicure at Novara! The products they used felt luxurious, and my nails look flawless!",
  },
  {
    id: 8,
    name: "Daniel Foster",
    designation: "Photographer",
    company: "Focus Lens",
    image:
      "https://images.pexels.com/photos/28302550/pexels-photo-28302550/free-photo-of-a-woman-sitting-on-a-stool-with-her-hair-in-a-bun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "The spa was peaceful, but the massage didn’t meet my expectations. I’ve had better experiences elsewhere.",
  },
  {
    id: 9,
    name: "Sophia Evans",
    designation: "Teacher",
    company: "Bright Minds Academy",
    image:
      "https://images.pexels.com/photos/28302550/pexels-photo-28302550/free-photo-of-a-woman-sitting-on-a-stool-with-her-hair-in-a-bun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Good experience overall. The facial was refreshing, but I think the prices could be more competitive.",
  },
  {
    id: 10,
    name: "Liam Bennett",
    designation: "Real Estate Agent",
    company: "Urban Realty",
    image:
      "https://images.pexels.com/photos/28302550/pexels-photo-28302550/free-photo-of-a-woman-sitting-on-a-stool-with-her-hair-in-a-bun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Amazing service! The Novara team was friendly and professional. My massage session was exactly what I needed!",
  },
];

export const DURATION_FACTOR = 0.6;

export const bookings: TBooking[] = [
  {
    id: 1,
    service: {
      id: 3,
      title: "Deluxe Manicure & Pedicure",
      image:
        "https://images.pexels.com/photos/6724402/pexels-photo-6724402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Treat your hands and feet to a luxurious manicure and pedicure, complete with exfoliation, hydration, and polish.",
      price: 90,
    },
    duration: "5",
    updatedPrice: 270,
    serviceClass: "economy",
    date: "2024-10-09",
    timeslot: "8AM - 1PM",
  },
  {
    id: 1,
    service: {
      id: 3,
      title: "Deluxe Manicure & Pedicure",
      image:
        "https://images.pexels.com/photos/6724402/pexels-photo-6724402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Treat your hands and feet to a luxurious manicure and pedicure, complete with exfoliation, hydration, and polish.",
      price: 90,
    },
    duration: "5",
    updatedPrice: 270,
    serviceClass: "economy",
    date: "2024-10-09",
    timeslot: "1PM - 6PM",
  },
];

export const timeslots = {
  "1": [
    "8AM - 9AM",
    "9AM - 10AM",
    "10AM - 11AM",
    "11AM - 12PM",
    "12PM - 1PM",
    "1PM - 2PM",
    "2PM - 3PM",
    "3PM - 4PM",
    "4PM - 5PM",
    "5PM - 6PM",
    "6PM - 7PM",
    "7PM - 8PM",
  ],
  "2": [
    "8AM - 10AM",
    "10AM - 12PM",
    "12PM - 2PM",
    "2PM - 4PM",
    "4PM - 6PM",
    "6PM - 8PM",
  ],
  "3": ["8AM - 11AM", "11AM - 2PM", "2PM - 5PM", "5PM - 8PM"],
  "4": ["8AM - 12PM", "4PM - 8PM"],
  "5": ["8AM - 1PM", "1PM - 6PM"],
};

export const blogItems: {
  id: number;
  title: string;
  cover: string;
  body: string;
  url: string;
  published_date: string;
  author: {
    name: string;
    image: string;
  };
}[] = [
  {
    id: 1,
    title: "The Ultimate Guide to Choosing the Right Beauty Salon or Spa",
    cover:
      "https://images.pexels.com/photos/1654834/pexels-photo-1654834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    body: "Discover the secrets to finding the perfect beauty salon or spa that caters to your unique needs and preferences. From considering factors like location, services offered, and price range to reading reviews and recommendations, this comprehensive guide will help you make an informed decision.",
    url: "https://example.com/blog/1",
    published_date: "2023-12-15",
    author: {
      name: "Sarah Johnson",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: 2,
    title: "The Latest Trends in Beauty and Wellness",
    cover:
      "https://images.pexels.com/photos/3331486/pexels-photo-3331486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    body: "Stay ahead of the curve with our roundup of the hottest beauty and wellness trends. From natural skincare and sustainable beauty products to innovative treatments and holistic therapies, discover what's new and exciting in the world of beauty.",
    url: "https://example.com/blog/2",
    published_date: "2024-01-20",
    author: {
      name: "David Lee",
      image:
        "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: 3,
    title: "DIY Beauty Treatments: Tips and Tricks",
    cover:
      "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    body: "Learn how to pamper yourself at home with these easy-to-follow DIY beauty treatments. From homemade face masks and hair conditioners to natural nail care and body scrubs, discover simple yet effective ways to enhance your beauty routine.",
    url: "https://example.com/blog/3",
    published_date: "2024-02-10",
    author: {
      name: "Emily Carter",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: 4,
    title: "The Benefits of Regular Facials and Massages",
    cover:
      "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    body: "Uncover the transformative power of regular facials and massages. From improving skin health and reducing stress to promoting relaxation and well-being, discover why these treatments are essential for a balanced and beautiful lifestyle.",
    url: "https://example.com/blog/4",
    published_date: "2024-03-05",
    author: {
      name: "Michael Brown",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
];

export const aboutPhotoItems: {
  id: 1 | 2 | 3 | 4;
  image: string;
}[] = [
  {
    id: 1,
    image: "/images/about__photo__01.jpg",
  },
  {
    id: 2,
    image: "/images/about__photo__02.jpg",
  },
  {
    id: 3,
    image: "/images/about__photo__03.jpg",
  },
  {
    id: 4,
    image: "/images/about__photo__04.jpg",
  },
];
