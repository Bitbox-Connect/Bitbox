import { useEffect, useState } from "react";

import { Search } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../assets/blogs/1.webp";
import img2 from "../assets/blogs/2.jpeg";
import img3 from "../assets/blogs/3.png";
import img4 from "../assets/blogs/4.jpeg";
import img5 from "../assets/blogs/5.jpeg";
import img6 from "../assets/blogs/6.png";

// import { Link } from 'react-router-dom';
import "../css/Home.css";

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "The Art of Modern Web Design",
    author: "Sarah Chen",
    date: "March 15, 2024",
    category: "Design",
    readTime: "5 min read",
    image: img1,
    excerpt:
      "Exploring the latest trends in web design and how they shape user experiences in the digital age.",
    tags: ["Design", "Web", "UI/UX"],
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    author: "James Wilson",
    date: "March 18, 2024",
    category: "Development",
    readTime: "8 min read",
    image: img2,
    excerpt:
      "A deep dive into React Hooks and how they're revolutionizing the way we build components.",
    tags: ["React", "JavaScript", "Programming"],
  },
  {
    id: 3,
    title: "The Future of AI in Design",
    author: "Elena Martinez",
    date: "March 20, 2024",
    category: "AI",
    readTime: "6 min read",
    image: img3,
    excerpt:
      "How artificial intelligence is transforming the design industry and what it means for creators.",
    tags: ["AI", "Design", "Technology"],
  },
  {
    id: 4,
    title: "Building Sustainable Tech",
    author: "Alex Kumar",
    date: "March 22, 2024",
    category: "Technology",
    readTime: "7 min read",
    image: img4,
    excerpt:
      "Exploring eco-friendly approaches to software development and digital infrastructure.",
    tags: ["Sustainability", "Technology", "Green Computing"],
  },
  {
    id: 5,
    title: "The Psychology of UX Design",
    author: "Maya Patel",
    date: "March 25, 2024",
    category: "UX",
    readTime: "10 min read",
    image: img5,
    excerpt:
      "Understanding how human psychology influences user experience design decisions.",
    tags: ["UX", "Psychology", "Design"],
  },
  {
    id: 6,
    title: "Mobile-First Development",
    author: "Thomas Anderson",
    date: "March 27, 2024",
    category: "Development",
    readTime: "6 min read",
    image: img6,
    excerpt:
      "Best practices for building responsive applications with a mobile-first approach.",
    tags: ["Mobile", "Development", "Responsive"],
  },
];

const images = [
  { src: img1, category: "Web Development" },
  { src: img2, category: "Mobile Development" },
  { src: img6, category: "Data Science" },
  { src: img5, category: "Machine Learning" },
  { src: img4, category: "AI" },
  { src: img3, category: "Cybersecurity" },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setblogPosts] = useState([]);

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const categoryImage = (cat) => {
    console.log(cat);
    const imgSrc = images.find((image) => image.category === cat);
    if (imgSrc) {
      console.log(imgSrc.src);
      return imgSrc.src;
    }
    return ""; // Safeguard for undefined
  };

  const fetchData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/blog/all-blog");
      let data = await response.json();
      console.log(data);
      setblogPosts(data.blogs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Explore Our Blog</h1>
          <p className="text-xl opacity-90">
            Discover stories, insights, and knowledge
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div>
            <Link to={"/createBlogPost"} className="text-white">
              Create blog
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={categoryImage(post.category)} // Fallback to empty string if no image is found
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      {post.category}
                    </span>

                    <span className="text-black text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 ml-[-60px] text-black">
                    {post.title}
                  </h2>

                  <p className="text-black dark:text-dark-300 mb-4">
                    {post.excerpt}
                  </p>

                  <div
                    className="text-gray-600 dark:text-dark-300 mb-4"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                      <div>
                        <p className="text-sm font-medium text-black dark:text-white">
                          {post.author}
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </div>
                    <button className="text-black hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <section className="bg-white">
              <div className="container flex items-center px-6 py-12 mx-auto">
                <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                  <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  </p>
                  <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                    Page not found
                  </h1>
                  <p className="mt-4 text-gray-500">
                    The page you are looking for doesn't exist. Here are some
                    helpful links:
                  </p>

                  <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                    <button
                      onClick={() => setSearchTerm("")}
                      className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 rtl:rotate-180"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M21 12H3"
                        />
                      </svg>
                      <span>Back to home</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
