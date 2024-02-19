import { useState } from 'react';

const SearchProjects = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleChange}
        />
    );
}

export default SearchProjects;
