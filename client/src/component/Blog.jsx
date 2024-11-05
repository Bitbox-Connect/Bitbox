import { useEffect, useState, useRef } from "react";
import PropTypes from 'prop-types';
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../assets/blogs/1.webp";
import img2 from "../assets/blogs/2.jpeg";
import img3 from "../assets/blogs/3.png";
import img4 from "../assets/blogs/4.jpeg";
import img5 from "../assets/blogs/5.jpeg";
import img6 from "../assets/blogs/6.png";

const images = [
  { src: img1, category: "Web Development" },
  { src: img2, category: "Mobile Development" },
  { src: img6, category: "Data Science" },
  { src: img5, category: "Machine Learning" },
  { src: img4, category: "AI" },
  { src: img3, category: "Cybersecurity" },
];

BlogPage.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default function BlogPage(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const speechInstanceRef = useRef(null);

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   if (isNaN(date.getTime())) {
  //     throw new Error("Invalid date format");
  //   }
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const year = date.getFullYear();
  //   return `${day}-${month}-${year}`;
  // };

  const categoryImage = (cat) => {
    const imgSrc = images.find((image) => image.category === cat);
    return imgSrc ? imgSrc.src : "";
  };

  const fetchData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/blog/all-blog");
      let data = await response.json();
      setBlogPosts(data.blogs);
      console.log(data.blogs);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlay = (id, title, excerpt) => {
    const textToSpeak = `${title}. ${excerpt}`;
    document.getElementsByClassName(`pause-button-${id}`)[0].classList.remove('hidden')
    document.getElementsByClassName(`speak-button-${id}`)[0].classList.add('hidden')
    console.log(textToSpeak)
    if (isPaused && speechInstanceRef.current) {
      setIsPaused(true);
      window.speechSynthesis.speak(speechInstanceRef.current);
    } else {
      const speechInstance = new SpeechSynthesisUtterance(textToSpeak.slice(currentPosition));
      speechInstance.lang = 'en-US';
      speechInstance.pitch = 1;
      speechInstance.rate = 1;

      speechInstance.onboundary = (event) => {
        if (event.name === 'word') {
          setCurrentPosition(event.charIndex);
        }
      };

      speechInstanceRef.current = speechInstance;
      window.speechSynthesis.speak(speechInstance);
    }
    setIsPlaying(true);
  };

  const handlePause = (id) => {
    document.getElementsByClassName(`pause-button-${id}`)[0].classList.add('hidden')
    document.getElementsByClassName(`speak-button-${id}`)[0].classList.remove('hidden')
    if (speechInstanceRef.current && !isPaused) {
      window.speechSynthesis.cancel();
      setIsPaused(false);
    }
    setIsPlaying(false);
    setCurrentPosition(0)
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
          <p className="text-xl opacity-90">Discover stories, insights, and knowledge</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
              value={searchTerm}
              style={{ paddingLeft: '40px' }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((blogPost) => {
              const postUrl = `http://localhost:5000/api/blog/getById/${blogPost._id}`;
              return (
                <div
                  className={`max-w-3xl mx-auto my-8 ${props.mode === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg shadow-md overflow-hidden`}
                  key={blogPost.id}
                >
                  <img
                    src={categoryImage(blogPost.category)}
                    alt={blogPost.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/placeholder.svg'; }}
                  />
                  <div className="p-6">
                    <h1 className={`text-3xl font-bold ${props.mode === 'light' ? 'text-gray-900' : 'text-white'} mb-4`}>
                      {blogPost.title}
                    </h1>
                    <div className="flex justify-between">
                      <div className={`flex items-center ${props.mode === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <time dateTime={new Date(blogPost.date).toISOString()}>
                          {new Date(blogPost.date).toDateString()}
                        </time>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4 mr-2" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <span>{blogPost.category}</span>
                      </div>
                      <div>
                        <button
                          className={`speak-button-${blogPost._id} text-white text-sm`}
                          onClick={() => handlePlay(blogPost._id, blogPost.title, blogPost.content.replace(/<[^>]+>/g, ''))}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
                          </svg>
                        </button>
                        <button
                          className={`text-white text-sm pause-button-${blogPost._id} hidden`}
                          onClick={() => handlePause(blogPost._id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4h4v16h-4zM6 4h4v16H6z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className={`${props.mode === 'light' ? 'text-gray-400' : 'text-gray-700'} leading-relaxed mb-4`}>
                      {blogPost.content.replace(/<[^>]+>/g, '')}
                    </div>
                  </div>
                  <div className={`px-6 py-4 border-t ${props.mode === 'light' ? 'border-gray-200' : 'border-gray-700'} flex justify-between`}>
                    <Link to={`/read-more-blog/${blogPost._id}`} className={`inline-flex items-center px-4 py-2 border ${props.mode === 'light' ? 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50' : 'border-gray-600 text-gray-200 bg-gray-700 hover:bg-gray-600'} shadow-sm text-sm font-medium rounded-md`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8M8 16h8M8 8h8" />
                      </svg>
                      Read More
                    </Link>
                    <div className="mt-2 flex space-x-3 items-center justify-center">
                      <a href={`https://x.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(blogPost.title + " " + blogPost.content.replace(/<[^>]+>/g, ''))}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                          <path d="M18.3 5.71L12 12l6.3 6.29-1.41 1.41L12 13.41l-6.3 6.29-1.41-1.41L10.59 12 4.29 5.71 5.71 4.29 12 10.59l6.3-6.3 1.41 1.41z" />
                        </svg>
                      </a>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35C.747 0 0 .747 0 1.675v20.649C0 23.253.747 24 1.675 24h11.675v-10.188H9.691v-4.03h3.659V7.159c0-3.63 1.813-5.651 4.637-5.651 1.343 0 2.79.243 2.79.243v3.05h-1.571c-1.548 0-2.023.964-2.023 1.958v2.34h4.071l-.651 4.03h-3.42V24h6.64C23.253 24 24 23.253 24 22.324V1.675C24 .747 23.253 0 22.675 0z" />
                        </svg>
                      </a>
                      <a href={`https://linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(blogPost.title + " " + blogPost.content.replace(/<[^>]+>/g, ''))}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.556v-5.646c0-1.352-.024-3.09-1.888-3.09-1.886 0-2.174 1.477-2.174 3.016v5.72h-3.558V9.043h3.414v1.588h.048c.477-.88 1.642-1.805 3.377-1.805 3.608 0 4.272 2.373 4.272 5.458v6.169zM5.337 7.433c-1.144 0-2.072-.928-2.072-2.072 0-1.145.928-2.072 2.072-2.072 1.145 0 2.072.927 2.072 2.072 0 1.145-.927 2.072-2.072 2.072zM6.713 20.452H3.961V9.043h2.752v11.409zM22.225 0H1.771C.792 0 0 .791 0 1.77v20.459c0 .98.792 1.771 1.771 1.771h20.459c.979 0 1.77-.792 1.77-1.771V1.771c0-.979-.792-1.77-1.77-1.77z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
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
                    The page you are looking for doesnt exist. Here are some
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
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                      </svg>
                      <span>Go back</span>
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
