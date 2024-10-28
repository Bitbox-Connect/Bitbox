import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';


const ContributorCard = ({
  login,
  avatar_url,
  html_url,
  contributions,
  type,
  mode,
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className={`rounded-lg overflow-hidden border transition-all duration-300 ${mode === 'dark'
      ? 'bg-black/30 backdrop-blur-md border-white/10'
      : 'bg-white backdrop-blur-sm border-gray-300'
      }`}
    data-aos="fade-up"
    data-aos-duration='1500'
  >
    <div className='p-6 text-center'>
      <img
        src={avatar_url}
        alt={login}
        className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 ${mode === 'dark' ? 'border-primary' : 'border-blue-500'
          }`}
      />
      <h3 className={`font-bold text-xl ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        {login}
      </h3>
      <p className={`text-sm ${mode === 'dark' ? 'text-primary' : 'text-gray-600'} mb-2`}>
        {type}
      </p>
      <div className={`mt-4 rounded-full py-2 px-4 inline-block ${mode === 'dark' ? 'bg-white/10' : 'bg-blue-100'
        }`}>
        <span className={`font-semibold ${mode === 'dark' ? 'text-primary' : 'text-blue-600'
          }`}>
          {contributions} contributions
        </span>
      </div>
    </div>
    <div className={`py-3 px-6 flex justify-between items-center ${mode === 'dark' ? 'bg-white/5' : 'bg-blue-200'
      }`}>
      <a
        href={html_url}
        target='_blank'
        rel='noopener noreferrer'
        className={`text-primary hover:text-primary/80 transition-colors flex items-center ${mode === 'dark' ? 'text-white' : 'text-blue-800'
          }`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 mr-2'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
          <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
        </svg>
        View Profile
      </a>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='text-white/50'
      >
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
      </svg>
    </div>
  </motion.div>

);

ContributorCard.propTypes = {
  login: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  contributions: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

const StatCard = ({ label, value, icon, mode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`rounded-lg p-6 flex items-center border transition-all duration-300 ${mode === 'dark'
      ? 'bg-black/30 backdrop-blur-md border-white/10'
      : 'bg-white backdrop-blur-sm border-gray-300'
      }`}
  >
    <div className={`rounded-full p-3 mr-4 ${mode === 'dark' ? 'bg-white/10' : 'bg-gray-200'
      }`}>
      {icon}
    </div>
    <div>
      <h3 className={`text-3xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-800'
        }`}>
        {value}
      </h3>
      <p className={`text-sm ${mode === 'dark' ? 'text-white/70' : 'text-gray-600'
        }`}>
        {label}
      </p>
    </div>
  </motion.div>

);
StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.node.isRequired,
};



export default function Contributor(props) {
  const [contributors, setContributors] = useState([]);
  const [repoStats, setRepoStats] = useState({
    stars: 0,
    forks: 0,
    openIssues: 0,
  });
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const contributorsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allContributors = [];
        const contributorsResponse = await fetch("https://api.github.com/repos/Bitbox-Connect/Bitbox/contributors?page=1&per_page=100", {})
        if (!contributorsResponse.ok) {
          throw new Error('Failed to fetch contributors data');
        }
        const contributorsData = await contributorsResponse.json();


        allContributors = [...allContributors, ...contributorsData];
        setContributors(allContributors);

        const repoResponse = await fetch(
          'https://api.github.com/repos/Bitbox-Connect/Bitbox',
        );
        const repoData = await repoResponse.json();
        setRepoStats({
          stars: repoData.stargazers_count,
          forks: repoData.forks_count,
          openIssues: repoData.open_issues_count,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastContributor = currentPage * contributorsPerPage;
  const indexOfFirstContributor = indexOfLastContributor - contributorsPerPage;
  const currentContributors = contributors.slice(
    indexOfFirstContributor,
    indexOfLastContributor,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(contributors.length / contributorsPerPage);


  return (
    <div
      className={`min-h-screen ${props.mode === 'dark'
        ? 'bg-gradient-to-br from-gray-900 to-black text-white'
        : 'bg-gradient-to-br from-white to-blue-100 text-black'
        }`}
    >
      {/* Hero Section */}
      <section
        className={`relative h-[70vh] flex items-center justify-center text-center ${props.mode === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
          : 'bg-gradient-to-br from-white via-blue-100 to-blue-200'
          }`}
      >
        <div
          className={`absolute inset-0 ${props.mode === 'dark' ? 'bg-black/50' : 'bg-white/50'
            } backdrop-blur-sm`}
        />
        <div className="relative z-10 space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            className={`text-5xl font-bold sm:text-6xl md:text-7xl ${props.mode === 'dark' ? 'text-white' : 'text-black'
              }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Amazing Contributors
          </motion.h1>
          <motion.p
            className={`text-xl sm:text-2xl ${props.mode === 'dark' ? 'text-white/80' : 'text-black/80'
              }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shaping the future of Bitbox, one commit at a time
          </motion.p>
        </div>
      </section>

      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${props.mode === 'dark'
          ? 'bg-black/30 backdrop-blur-md'
          : 'bg-white/30 backdrop-blur-md'
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${props.mode === 'dark' ? 'text-white' : 'text-black'
              }`}
          >
            Project Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              mode={props.mode}
              label="Contributors"
              value={contributors.length}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 7H7v6h6V7z" />
                  <path
                    fillRule="evenodd"
                    d="M18 10A8 8 0 11-1 10a8 8 0 0117 0zm-6-4H7v6h6V6z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
            <StatCard
              mode={props.mode}
              label="Stars"
              value={repoStats.stars}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.175 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.1c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
                </svg>
              }
            />
            <StatCard
              mode={props.mode}
              label="Forks"
              value={repoStats.forks}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 5a3 3 0 01-3 3H2a3 3 0 003 3v4a3 3 0 006 0v-4a3 3 0 003-3h-1a3 3 0 01-3-3V2h-2v3H6zm7-3v3a3 3 0 013 3h1a3 3 0 00-3-3h-1V2h-2z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
            <StatCard
              mode={props.mode}
              label="Open Issues"
              value={repoStats.openIssues}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.05 3.05A7 7 0 1018 10a7.002 7.002 0 00-12.95 0A5.001 5.001 0 115 3.05zm0 2A3.001 3.001 0 105 10a3.001 3.001 0 000-4.95z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${props.mode === 'dark' ? 'text-white' : 'text-black'
              }`}
          >
            Meet Our Contributors
          </h2>
          {loading ? (
            <p className="text-center text-white">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentContributors.map((contributor) => (
                <ContributorCard key={contributor.id} {...contributor} mode={props.mode} />
              ))}
            </div>
          )}

          <div className="mt-8 flex justify-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-4 py-2 rounded transition-colors duration-300 
                     ${currentPage === index + 1
                    ? 'bg-primary text-white'
                    : 'bg-black/10 text-white hover:bg-black/20'}`}
                aria-current={currentPage === index + 1 ? 'page' : undefined}
                aria-label={`Go to page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

        </div>
      </section>
    </div>

  );
}

Contributor.propTypes = {
  mode: PropTypes.string.isRequired,
};