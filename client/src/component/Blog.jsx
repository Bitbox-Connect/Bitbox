import React, { useState } from 'react';
import { Search } from 'lucide-react';
import img1 from "../assets/blogs/1.webp";
import img2 from "../assets/blogs/2.jpeg";
import img3 from "../assets/blogs/3.png";
import img4 from "../assets/blogs/4.jpeg";
import img5 from "../assets/blogs/5.jpeg";
import img6 from "../assets/blogs/6.png";


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
    excerpt: "Exploring the latest trends in web design and how they shape user experiences in the digital age.",
    tags: ["Design", "Web", "UI/UX"]
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    author: "James Wilson",
    date: "March 18, 2024",
    category: "Development",
    readTime: "8 min read",
    image: img2,
    excerpt: "A deep dive into React Hooks and how they're revolutionizing the way we build components.",
    tags: ["React", "JavaScript", "Programming"]
  },
  {
    id: 3,
    title: "The Future of AI in Design",
    author: "Elena Martinez",
    date: "March 20, 2024",
    category: "AI",
    readTime: "6 min read",
    image: img3,
    excerpt: "How artificial intelligence is transforming the design industry and what it means for creators.",
    tags: ["AI", "Design", "Technology"]
  },
  {
    id: 4,
    title: "Building Sustainable Tech",
    author: "Alex Kumar",
    date: "March 22, 2024",
    category: "Technology",
    readTime: "7 min read",
    image: img4,
    excerpt: "Exploring eco-friendly approaches to software development and digital infrastructure.",
    tags: ["Sustainability", "Technology", "Green Computing"]
  },
  {
    id: 5,
    title: "The Psychology of UX Design",
    author: "Maya Patel",
    date: "March 25, 2024",
    category: "UX",
    readTime: "10 min read",
    image: img5,
    excerpt: "Understanding how human psychology influences user experience design decisions.",
    tags: ["UX", "Psychology", "Design"]
  },
  {
    id: 6,
    title: "Mobile-First Development",
    author: "Thomas Anderson",
    date: "March 27, 2024",
    category: "Development",
    readTime: "6 min read",
    image: img6,
    excerpt: "Best practices for building responsive applications with a mobile-first approach.",
    tags: ["Mobile", "Development", "Responsive"]
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-dark">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-dark-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {post.date}
                      </p>
                    </div>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}