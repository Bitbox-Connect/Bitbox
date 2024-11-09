import '../../css/Main.css';
import PropTypes from 'prop-types';

export default function PrivacyPolicy(props) {
  const VITE_CLIENT_PORT = import.meta.env.VITE_CLIENT_PORT;

  return (
    <div
      className="container p-10"
      style={{
        backgroundColor: props.mode === 'dark' ? '#111111' : '#f9f9f9',
        color: props.mode === 'dark' ? '#f9f9f9' : '#1a1a1a',
        lineHeight: '1.75',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h2 className={`text-4xl font-extrabold mb-10 mt-28 text-center tracking-wide ${props.mode === 'dark' ? 'text-gray-100' : 'text-gray-700'}`}>
        Privacy Policy
      </h2>

      <div
        className="container mx-auto p-8"
        style={{
          backgroundColor: props.mode === 'dark' ? '#282828' : '#ffffff',
          color: props.mode === 'dark' ? '#eaeaea' : '#1a1a1a',
          borderRadius: '12px',
          boxShadow: props.mode === 'dark'
            ? '0 10px 30px rgba(0, 0, 0, 0.5)'
            : '0 10px 30px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 italic">
          Last updated: April 13, 2024
        </div>

        <div className="mb-8 text-lg leading-relaxed">
          This Privacy Policy describes our policies and procedures on the
          collection, use, and disclosure of your information when you use the
          Service. It also explains your privacy rights and how the law protects
          you.
        </div>

        <h3 className={`text-3xl font-semibold mb-6   ${props.mode === 'dark' ? 'text-gray-100' : 'text-gray-700'} `}>
          Interpretation
        </h3>
        <p className="mb-8 text-lg leading-relaxed">
          Words with capitalized initials have meanings defined under the following
          conditions. These definitions shall apply whether they appear in singular
          or plural.
        </p>

        <h3 className={`text-3xl font-semibold mb-6 ${props.mode === 'dark' ? 'text-gray-100' : 'text-gray-700'}`}>
          Definitions
        </h3>
        <div className="space-y-6 text-lg">
          <ul className="list-disc list-inside pl-6 space-y-4">
            <li>
              <strong>Account:</strong> A unique account created for you to access
              our Service or parts of our Service.
            </li>
            <li>
              <strong>Company:</strong> Refers to BitBox (also referred to as &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;).
            </li>
            <li>
              <strong>Cookies:</strong> Small files placed on your device (computer,
              mobile, or tablet) that store details of your browsing history.
            </li>
            <li>
              <strong>Device:</strong> Any device that can access the Service, such
              as a computer, cellphone, or tablet.
            </li>
            <li>
              <strong>Personal Data:</strong> Information that relates to an
              identifiable individual.
            </li>
            <li>
              <strong>Service:</strong> Refers to the Website.
            </li>
            <li>
              <strong>Service Provider:</strong> Any person or company who processes
              data on behalf of the Company.
            </li>
            <li>
              <strong>Usage Data:</strong> Data collected automatically (such as the
              duration of a page visit).
            </li>
            <li>
              <strong>Website:</strong> Refers to BitBox, accessible from{' '}
              <a
                href={VITE_CLIENT_PORT}
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
              >
                {VITE_CLIENT_PORT}/
              </a>
            </li>
            <li>
              <strong>You:</strong> The individual using the Service, or the company
              represented by that individual.
            </li>
          </ul>
        </div>

        <h2 className={`text-3xl font-semibold mt-12 mb-6 ${props.mode === 'dark' ? 'text-gray-100' : 'text-gray-700'}`}>
          Collecting and Using Your Personal Data
        </h2>

        <h3 className={`text-2xl font-semibold mb-4 ${props.mode === 'dark' ? 'text-gray-100' : 'text-gray-700'}`}>
          Types of Data Collected
        </h3>

        <h4 className={`text-xl font-semibold mb-3 ${props.mode === 'dark' ? 'text-gray-100' : 'text-gray-700'}"`}>
          Personal Data
        </h4>
        <p className="mb-6 text-lg leading-relaxed">
          We may ask you to provide personally identifiable information to contact
          or identify you, including:
        </p>
        <ul className="list-disc list-inside pl-6 space-y-2 text-lg">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Usage Data</li>
        </ul>

        <h4 className="text-xl font-semibold mt-8 mb-3 ${props.mode === 'dark' ? 'text-gray-100' : 'text-gray-700'}">
          Usage Data
        </h4>
        <p className="mb-6 text-lg leading-relaxed">
          Usage Data is collected automatically and may include information like
          your IP address, browser type, device details, and time spent on our
          Service.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4 ${props.mode === 'dark' ? 'text-gray-100' : 'text-gray-700'}">
          Tracking Technologies and Cookies
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          We use cookies and similar tracking technologies (beacons, tags, and
          scripts) to collect and analyze information to improve our Service. The
          types of tracking we use include:
        </p>
        <ul className="list-disc list-inside pl-6 space-y-4 text-lg">
          <li>
            <strong>Cookies:</strong> Small files placed on your device. You can
            instruct your browser to refuse cookies or indicate when a cookie is
            sent. Without cookies, parts of our Service may not work properly.
          </li>
          <li>
            <strong>Web Beacons:</strong> Small electronic files that permit the
            Company to count users who visit certain pages or read emails.
          </li>
        </ul>
      </div>

    </div>


  );
}

PrivacyPolicy.propTypes = {
  VITE_CLIENT_PORT: PropTypes.string,
  mode: PropTypes.string,
  props: PropTypes.object,
};
