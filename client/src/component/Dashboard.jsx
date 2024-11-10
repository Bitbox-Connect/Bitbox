// import React from 'react';
import PropTypes from "prop-types";



const InsightCard = ({ icon, title, count, progress, color }) => (
  <div className="bg-white shadow-md rounded-lg p-6 transition-shadow duration-300 hover:shadow-lg">
    <div className="flex items-center justify-between">
      <span className={`material-symbols-sharp text-4xl ${color} text-white p-2 rounded-full`}>
        {icon}
      </span>
      <div className="text-right">
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        <h1 className="text-2xl font-bold text-gray-800">{count}</h1>
      </div>
    </div>
    <div className="mt-4 relative">
      <div className="progress-circle relative w-16 h-16">
        <svg className="absolute inset-0" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" className="text-gray-200" strokeWidth="5" />
          <circle
            cx="50"
            cy="50"
            r="30"
            className="text-blue-500"
            strokeWidth="5"
            strokeDasharray="150"
            strokeDashoffset="calc(150 - (150 * 0.8))"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-sm">
          {progress}
        </div>
      </div>
    </div>
    <small className="block text-gray-500 mt-2">Last 24 Hours</small>
  </div>
);

const PostCard = ({ post }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
    <p className="text-gray-600">{post.content}</p>
    <small className="text-gray-400">{post.date}</small>
  </div>
);

const Dashboard = () => {
    const posts=[
        {id:1,title:"title1"},
    ]
  // Placeholder data; replace with actual data from backend if needed.
  const insightsData = [
    { icon: 'trending_up', title: 'Total Views', count: '100', progress: '80%', color: 'bg-coral' },
    { icon: 'local_mall', title: 'New Users', count: '323', progress: '50%', color: 'bg-red-400' },
    { icon: 'stacked_line_chart', title: 'Total Posts', count: '12', progress: '90%', color: 'bg-green-400' },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* Header */}
      <header className="col-span-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <input type="date" className="p-2 border rounded-md text-gray-600" />
      </header>

      {/* Insights */}
      <section className="col-span-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {insightsData.map((item, index) => (
          <InsightCard key={index} icon={item.icon} title={item.title} count={item.count} progress={item.progress} color={item.color} />
        ))}
      </section>

      {/* Recent Posts */}
      <section className="col-span-full mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Posts</h2>
        <div className="space-y-4">
          {posts && posts.length > 0 ? (
            posts.map((post, index) => <PostCard key={index} post={post} />)
          ) : (
            <p className="text-gray-600">No posts available.</p>
          )}
        </div>
        <a href="#" className="text-blue-500 mt-4 inline-block">Show All</a>
      </section>
    </div>
  );
};
PostCard.propTypes = {
    post: PropTypes.string.isRequired,
};
Dashboard.propTypes = {
    post: PropTypes.string.isRequired,
};
InsightCard.propTypes = {
    post: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    count: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired, 
    color: PropTypes.string.isRequired
};
export default Dashboard;
