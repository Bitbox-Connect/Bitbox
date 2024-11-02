import { useEffect, useState } from "react";

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
            filteredPosts.map((blogPost) => (

              <div className={`max-w-3xl mx-auto my-8 ${props.mode === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg shadow-md overflow-hidden`} key={blogPost.id}>
                <img
                  src={categoryImage(blogPost.category)}
                  alt={blogPost.title}
                  className="w-full h-64 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/placeholder.svg'; }}
                />
                <div className="p-6">
                  <h1 className={`text-3xl font-bold ${props.mode === 'light' ? 'text-gray-900' : 'text-white'} mb-4`}>{blogPost.title}</h1>
                  <div className={`flex items-center ${props.mode === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm mb-4`}>
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
                  <div
                    className={`${props.mode === 'light' ? 'text-gray-400' : 'text-gray-700'} leading-relaxed mb-4`}
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />
                </div>
                <div className={`px-6 py-4 border-t ${props.mode === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
                  <Link to={`/read-more-blog/${blogPost._id}`} className={`inline-flex items-center px-4 py-2 border ${props.mode === 'light' ? 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50' : 'border-gray-600 text-gray-200 bg-gray-700 hover:bg-gray-600'} shadow-sm text-sm font-medium rounded-md`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8M8 16h8M8 8h8" />
                    </svg>
                    Read More
                  </Link>
                </div>
              </div>


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
