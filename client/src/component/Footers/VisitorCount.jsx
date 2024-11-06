import { useEffect, useState } from "react";

// Function to increment the visitor count
async function incrementVisitorCount() {
    try {
        const response = await fetch("http://localhost:5000/api/visitor/increment", {
            method: "POST",
        });
        const data = await response.json();
        console.log("Visitor count incremented:", data.count);
        return data.count;
    } catch (error) {
        console.error("Error incrementing visitor count:", error);
        return null;
    }
}

// Function to get the current visitor count
async function getVisitorCount() {
    try {
        const response = await fetch("http://localhost:5000/api/visitor/count", {
            method: "GET",
        });
        const data = await response.json();
        return data.count;
    } catch (error) {
        console.error("Error retrieving visitor count:", error);
        return null;
    }
}

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(null);

    useEffect(() => {
        // Increment and retrieve visitor count on component mount
        const fetchAndIncrementVisitorCount = async () => {
            // First, increment the visitor count
            const newCount = await incrementVisitorCount();
            if (newCount !== null) {
                setVisitorCount(newCount);
            } else {
                // If increment fails, fetch the latest count
                const currentCount = await getVisitorCount();
                setVisitorCount(currentCount);
            }
        };

        fetchAndIncrementVisitorCount();
    }, []);

    return (
        <div>
            {visitorCount !== null ? (
                <p className="font-bold text-2xl text-gray-300">Total Visitors: {visitorCount}</p>
            ) : (
                <p>Loading visitor count...</p>
            )}
        </div>
    );
};

export default VisitorCounter;
