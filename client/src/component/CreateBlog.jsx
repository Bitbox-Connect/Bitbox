import { useState } from 'react';
import './CreateBlog.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        author: '',
        excerpt: '',
        category: '',
    });
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleContentChange = (value) => {
        setFormData({
            ...formData,
            content: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        // Generate a unique ID for the blog post
        const uniqueId = uuidv4();
        const blogPost = { ...formData, id: uniqueId }; // Add the ID to formData
        console.log(blogPost)
        try {
            const response = await axios.post('http://localhost:5000/api/blog/post-blog', blogPost, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('Response:', response.data);
            setFormData({ title: '', author: '', content: '', id: '', category: '' }); // Reset form data
            alert('Blog created successfully.');
            navigate('/blog');

        } catch (error) {
            console.error('Error:', error);
            setErrors('There was an issue with your submission. Please try again later.');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <>
            <div className="create-blog-container">
                <h1>Create a New Blog Post</h1>
                <form onSubmit={handleSubmit} className="blog-form">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="AI">Artificial intelligence</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile Development">Mobile Development</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Cloud Computing">Cloud Computing</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <ReactQuill
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleContentChange}
                            required
                            modules={{
                                toolbar: [
                                    [{ 'header': [1, 2, false] }],
                                    ['bold', 'italic', 'underline'],
                                    ['link', 'image'],
                                    ['clean']
                                ]
                            }}
                            formats={[
                                'header',
                                'bold',
                                'italic',
                                'underline',
                                'link',
                                'image'
                            ]}
                        />
                    </div>

                    <button disabled={loading} type="submit" className="submit-button">Submit</button>
                </form>
                {errors && <p className="error-message">{errors}</p>}
            </div>
        </>
    );
};

export default CreateBlog;
