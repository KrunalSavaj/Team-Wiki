import React, { useState, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  FileCheck,
  House,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  Sun,
  User,
  Users,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  name: string;
  href: string;
  icon: ReactNode;
}

interface SocialIcon {
  href: string;
  icon: JSX.Element;
}

interface TeamMember {
  name: string;
  position: string;
  img: string;
  socialIcons: SocialIcon[];
}

interface Article {
  title: string;
  content: string;
  thumbnail: string;
  date: string;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "#",
    icon: <House className="h-[22px] w-[22px]" />,
  },
  {
    name: "Team",
    href: "#",
    icon: <Users className="h-[22px] w-[22px]" />,
  },
  {
    name: "Projects",
    href: "#",
    icon: <FileCheck className="h-[22px] w-[22px]" />,
  },
  {
    name: "Wiki",
    href: "#",
    icon: <BookOpen className="h-[22px] w-[22px]" />,
  },
  {
    name: "Settings",
    href: "#",
    icon: <Settings className="h-[22px] w-[22px]" />,
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    position: "CEO",
    img: "/user-1.jpg",
    socialIcons: [
      { href: "#", icon: <Facebook /> },
      { href: "#", icon: <Twitter /> },
      { href: "#", icon: <LinkedIn /> },
      { href: "#", icon: <Skype /> },
    ],
  },
  {
    name: "Jane Doe",
    position: "CTO",
    img: "/user-2.jpg",
    socialIcons: [
      { href: "#", icon: <Facebook /> },
      { href: "#", icon: <Twitter /> },
      { href: "#", icon: <LinkedIn /> },
      { href: "#", icon: <Skype /> },
    ],
  },
  {
    name: "Bob Smith",
    position: "Developer",
    img: "/user-3.jpg",
    socialIcons: [
      { href: "#", icon: <Facebook /> },
      { href: "#", icon: <Twitter /> },
      { href: "#", icon: <LinkedIn /> },
      { href: "#", icon: <Skype /> },
    ],
  },
  {
    name: "Alice Johnson",
    position: "Designer",
    img: "/user-4.jpg",
    socialIcons: [
      { href: "#", icon: <Facebook /> },
      { href: "#", icon: <Twitter /> },
      { href: "#", icon: <LinkedIn /> },
      { href: "#", icon: <Skype /> },
    ],
  },
];

const articles: Article[] = [
  {
    title: "Welcome to our wiki!",
    content:
      "This is a sample article. You can edit it to add your own content. You can also add new articles and categories.",
    thumbnail: "/article-1.jpg",
    date: "January 17, 2025",
  },
  {
    title: "About Us",
    content:
      "We are a team of passionate individuals who are dedicated to creating amazing software. Our mission is to provide the best possible experience for our users.",
    thumbnail: "/article-2.jpg",
    date: "February 17, 2025",
  },
  {
    title: "Our Products",
    content:
      "We offer a wide range of products, from mobile apps to web applications. Our products are designed to be user-friendly and efficient.",
    thumbnail: "/article-3.jpg",
    date: "March 17, 2025",
  },
  {
    title: "Our Team",
    content:
      "Our team is made up of talented individuals who are experts in their fields. We work together to create amazing products and experiences.",
    thumbnail: "/article-4.jpg",
    date: "April 17, 2025",
  },
  {
    title: "Our Mission",
    content:
      "Our mission is to provide the best possible experience for our users. We are dedicated to creating amazing software that is user-friendly and efficient.",
    thumbnail: "/article-5.jpg",
    date: "May 17, 2025",
  },
  {
    title: "Our Vision",
    content:
      "Our vision is to be the leading provider of software solutions. We strive to be innovative and forward-thinking in our approach.",
    thumbnail: "/article-6.jpg",
    date: "June 17, 2025",
  },
];

function PaperPlane() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
    </svg>
  );
}

function Facebook({ className }: any) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
    </svg>
  );
}

function Twitter() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    </svg>
  );
}

function Skype() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path>
    </svg>
  );
}

function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`bg-[#0F172A] text-white h-screen w-64 fixed inset-y-0 left-0 z-20 transform border-r border-r-[#2A3243] ${isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl md:hidden hover:bg-white/10 rounded-full h-8 w-8 flex items-center justify-center"
      >
        <X className="size-5" />
      </button>
      <h1 className="text-2xl font-bold md:text-center border-b border-b-[#2A3243] p-4 md:pl-4 pl-6">
        Team Wiki
      </h1>
      <nav className="py-4 overflow-auto max-h-[calc(100vh-65px)]">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="flex items-center space-x-3 py-2 px-4 mx-2 rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/[0.05] focus:outline-none h-10 w-10 flex items-center justify-center"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      ) : (
        <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      )}
    </button>
  );
};

function Navbar({
  onMenuClick,
  currentArticle,
  onArticleChange,
}: {
  onMenuClick: () => void;
  currentArticle: Article;
  onArticleChange: (article: Article) => void;
}) {
  return (
    <header className="bg-white dark:bg-[#1e293b] shadow-sm px-4 h-[65px] flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="p-2 mr-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/[0.05] focus:outline-none md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <div className="relative w-[240px] sm:block hidden">
          <input
            type="text"
            placeholder="Search..."
            className="border bg-transparent text-gray-900 dark:text-gray-100 border-[#dee2e6] dark:border-[#3c4557] rounded-full w-full py-2 h-10 px-4 pl-10 focus:outline-none focus:!border-[#6771d3]"
          />
          <Search className="h-5 w-5 absolute left-3 top-[10px] text-gray-500 dark:text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/[0.05] focus:outline-none h-10 w-10 sm:hidden flex items-center justify-center">
              <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-screen p-2 dark:bg-[#1e293b] border-[#dee2e6] dark:border-[#2A3243]">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="border bg-transparent text-gray-900 dark:text-gray-100 border-[#dee2e6] dark:border-[#3c4557] rounded-full w-full py-2 h-10 px-4 pl-10 focus:outline-none focus:!border-[#6771d3]"
              />
              <Search className="h-5 w-5 absolute left-3 top-[10px] text-gray-500 dark:text-gray-400" />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/[0.05] focus:outline-none h-10 w-10 flex items-center justify-center relative">
          <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <div className="h-4 w-4 text-[10px] right-1 top-1 absolute bg-red-500 rounded-full text-white leading-4">
            3
          </div>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/[0.05] focus:outline-none h-10 w-10 flex items-center justify-center">
          <Settings className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <img
              src="/user.jpg"
              alt="Avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 p-0 dark:bg-[#1e293b] border-[#dee2e6] dark:border-[#2A3243]"
          >
            <div className="p-4 pb-3 border-b-[2px] border-b-[#dee2e6] dark:border-b-[#2A3243]">
              <div className="flex items-center gap-3">
                <img
                  src="/user.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Krunal Savaj
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Developer
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <DropdownMenuItem className="py-2.5 text-base px-4 rounded-md text-gray-500 dark:text-gray-400 hover:!text-[#6771d3] dark:hover:bg-white/[0.03]">
                <User className="!size-5" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2.5 text-base px-4 rounded-md text-gray-500 dark:text-gray-400 hover:!text-[#6771d3] dark:hover:bg-white/[0.03]">
                <LogOut className="h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

function ArticleCard({
  article,
  onClick,
}: {
  article: Article;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="bg-white dark:bg-[#1e293b] rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="h-full rounded-lg relative overflow-hidden group transition duration-500">
        <div className="relative rounded-t-lg overflow-hidden transition-all duration-500 cursor-pointer">
          <div className="h-full w-full group-hover:scale-[1.04] duration-500 rounded-t-lg overflow-hidden z-[1]">
            <img
              src={article.thumbnail}
              alt="article"
              width={500}
              height={500}
              className="w-full h-[200px] object-cover"
            />
          </div>
        </div>
        <div className="sm:p-5 p-4 flex flex-col justify-between h-[calc(100%-200px)]">
          <div>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-sm pb-3">
              <CalendarDays className="mr-1.5 size-4 inline-block -mt-0.5" />
              {article.date}
            </p>
            <a
              href="#"
              className="text-xl mb-2 font-semibold text-gray-900 dark:text-gray-100 capitalize hover:!text-[#6771d3] transition duration-500 inline-block"
            >
              {article.title}
            </a>
            <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
              {article.content}
            </p>
          </div>
          <div className="flex gap-5 justify-between items-center pt-4">
            <a
              href="#"
              className="text-[#6771d3] font-bold inline-block hover:underline tracking-tight transition duration-500"
            >
              Read More
              <ArrowRight className="h-4 w-4 -rotate-45 ml-1 group-hover:rotate-0 transition-transform duration-500 inline-block" />
            </a>
            <div className="group/icon relative w-fit">
              <span className="text-gray-900 dark:text-gray-100 border border-gray-500 dark:border-gray-400 h-7 w-7 rounded-full text-sm flex justify-center items-center group-hover/icon:opacity-0">
                <PaperPlane />
              </span>
              <ul className="absolute top-0 right-0 gap-6 w-fit flex items-center justify-center border border-gray-500 dark:border-gray-400 rounded-full pt-1.5 pb-1 px-2 ml-auto transition duration-500 origin-right scale-x-0 group-hover/icon:scale-x-100 bg-white dark:bg-[#1e293b]">
                {[
                  <Facebook className="!h-3.5 !w-3.5 -mt-0.5" />,
                  <Twitter />,
                  <Skype />,
                ]?.map((icons, index) => (
                  <a
                    key={index}
                    href="#"
                    target="_blank"
                    className={`text-gray-900 dark:text-gray-100 transition duration-500 hover:!text-[#6771d3] relative after:absolute after:h-0.5 after:w-0.5 after:top-1/2 after:-left-3.5 after:-translate-y-1/2 after:bg-gray-500 first:after:bg-transparent`}
                  >
                    {icons}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group max-w-[270px] mx-auto">
      <div className="relative rounded-lg overflow-hidden border border-[#dee2e6] dark:border-[#2A3243] cursor-pointer mx-auto">
        <div className="team-image h-full w-full group-hover:scale-[1.04] duration-500 rounded-lg overflow-hidden z-[1] after:absolute after:left-1/2 after:top-1/2 after:w-0 after:bg-white/30 after:transition-all after:ease-linear after:duration-500 group-hover:after:h-[250%] group-hover:after:w-[200%] group-hover:after:bg-transparent group-hover:after:z-[1111]">
          <img
            src={member.img}
            alt="team"
            width={500}
            height={500}
            className="w-full h-full object-cover max-h-[280px] object-top"
          />
        </div>

        <div className="w-full absolute bottom-0 left-0 group-hover:-translate-y-5 translate-y-[101%] duration-500 z-[1] flex justify-center gap-3">
          {member.socialIcons?.map((icons, index) => (
            <a
              key={index}
              href={icons?.href}
              target="_blank"
              className="relative flex items-center justify-center text-white hover:bg-[#6771d3] hover:border-[#6771d3] h-8 w-8 rounded-md transition-all duration-500 border border-white bg-[#585858]"
            >
              {icons?.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="text-[22px] text-gray-900 dark:text-gray-100 font-bold mt-3 text-center transition duration-500 group-hover:text-[#6771d3]">
        {member.name}
      </p>
      <p className="text-gray-500 dark:text-gray-400 font-medium text-center">
        {member.position}
      </p>
    </div>
  );
}

export default function WikiApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Article>(articles[0]);

  const handleArticleChange = (article: Article) => {
    setCurrentArticle(article);
    // setSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#f1f5f9] dark:bg-[#0F172A]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="bg-black/50 fixed inset-0 md:hidden md:pointer-events-none z-[15]"
        />
      )}
      <div className="md:ml-64">
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
          currentArticle={currentArticle}
          onArticleChange={handleArticleChange}
        />
        <main className="sm:p-6 p-4 sm:pb-16 pb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="sm:text-[30px] text-[26px] font-bold capitalize text-gray-900 dark:text-gray-100">
                {currentArticle.title}
              </h1>
              <div className="prose mb-11">
                <p className="text-gray-500 dark:text-gray-400 sm:text-[17px]">
                  {currentArticle.content}
                </p>
              </div>
            </motion.div>
            <section className="mb-8">
              {/* <h2 className="text-xl font-bold mb-4">Recent Articles</h2> */}
              <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 sm:gap-5 gap-x-4 gap-y-6">
                {articles.map((article, index) => (
                  <ArticleCard
                    key={index}
                    article={article}
                    onClick={() => handleArticleChange(article)}
                  />
                ))}
              </div>
            </section>
            <section>
              <h2 className="sm:text-[30px] text-[26px] font-bold  capitalize text-center text-gray-900 dark:text-gray-100">
                Our leadership team
              </h2>
              <p className="max-w-[600px] mx-auto text-center mb-11 text-gray-500 dark:text-gray-400 sm:text-[17px]">
                Our dedicated team brings experience, creativity, and commitment
                to help turn your vision into reality
              </p>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-4">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TeamMemberCard member={member} />
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
// Zod Schema
export const Schema = {
  commentary: "",
  template: "nextjs-developer",
  title: "Team Wiki",
  description:
    "A simple team wiki web app with a sidebar for navigation and a main area for viewing formatted articles and images.",
  additional_dependencies: ["framer-motion"],
  has_additional_dependencies: true,
  install_dependencies_command: "npm install framer-motion",
  port: 3000,
  file_path: "pages/index.tsx",
  code: "<see code above>",
};
