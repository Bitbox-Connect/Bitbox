import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';



import img1 from "../assets/blogs/1.webp";
import img2 from "../assets/blogs/2.jpeg";
import img3 from "../assets/blogs/3.png";
import img4 from "../assets/blogs/4.jpeg";
import img5 from "../assets/blogs/5.jpeg";
import img6 from "../assets/blogs/6.png";


const images = [
    { src: img1, category: 'Web Development' },
    { src: img2, category: 'Mobile Development' },
    { src: img6, category: 'Data Science' },
    { src: img5, category: 'Machine Learning' },
    { src: img4, category: 'AI' },
    { src: img3, category: 'Cybersecurity' },
];


const ReadMoreBlog = (props) => {
    const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || "https://bitbox-uxbo.onrender.com";

    const { id } = useParams();
    const [blogPost, setBlogPost] = useState(null);
    const fetchData = async () => {
        try {
            const response = await fetch(`${VITE_SERVER_PORT}/api/blog/getById/${id}`);

            const data = await response.json();
            setBlogPost(data.blog); // Set the retrieved blog post to state
        } catch (error) {
            console.error('Error fetching blog post:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const categoryImage = (cat) => {
        const imgSrc = images.find(image => image.category === cat);
        if (imgSrc) {
            return imgSrc.src;
        }
        return '' // Safeguard for undefined
    };

    if (!blogPost) return <div>Loading...</div>;

    return (
        <>
            <div className={`max-w-3xl mx-auto my-8 mt-36 ${props.mode === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg shadow-md overflow-hidden`}>
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
                        className={`${props.mode === 'light' ? 'text-gray-700' : 'text-gray-100'} leading-relaxed mb-4`}
                        dangerouslySetInnerHTML={{ __html: blogPost.content }}
                    />
                </div>
                <div className={`px-6 py-4 border-t ${props.mode === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
                    <Link to={'/blog'} className={`inline-flex items-center px-4 py-2 border ${props.mode === 'light' ? 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50' : 'border-gray-600 text-gray-200 bg-gray-700 hover:bg-gray-600'} shadow-sm text-sm font-medium rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8M8 16h8M8 8h8" />
                        </svg>
                        Back to all
                    </Link>
                </div>
            </div>

        </>
    );
};

export default ReadMoreBlog;
