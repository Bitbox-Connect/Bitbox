import '../../css/Main.css';
import PropTypes from 'prop-types';

export default function PrivacyPolicy() {
  const VITE_CLIENT_PORT = import.meta.env.VITE_CLIENT_PORT;

  return (
    <div className="privacy-container mx-auto p-8 mt-20 mb-12 max-w-3xl bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-4xl font-bold text-blue-900 mb-8">Privacy Policy</h2>

      <section className="mb-8">
        <p className="text-gray-500 text-sm">Effective Date: October 2024</p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          This Privacy Policy describes how BITBOX ("we," "us," or "our") collects, uses, and discloses your information when you use our website, located at 
          <span className="font-semibold text-blue-800"> {VITE_CLIENT_PORT}/privacy</span>.
        </p>
      </section>

      <section className="policy-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Information We Collect</h3>
        <p className="text-gray-700 leading-relaxed">
          We collect various types of information in connection with the services we provide, including information you provide directly and information collected automatically.
        </p>
      </section>

      <section className="policy-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Use of Information</h3>
        <p className="text-gray-700 leading-relaxed">
          We use the information we collect to provide, operate, and maintain our services, including improving our offerings and ensuring the security of the site.
        </p>
      </section>

      <section className="policy-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sharing of Information</h3>
        <p className="text-gray-700 leading-relaxed">
          We may share your information with third parties, such as service providers, to help us operate our business, or where required by law.
        </p>
      </section>

      <section className="policy-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Data Security</h3>
        <p className="text-gray-700 leading-relaxed">
          We implement security measures designed to protect your information from unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="policy-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Your Rights</h3>
        <p className="text-gray-700 leading-relaxed">
          Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data.
        </p>
      </section>

      <section className="policy-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Changes to this Privacy Policy</h3>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time. When we make changes, we will notify you by revising the effective date or providing additional notice.
        </p>
      </section>

      <section className="policy-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h3>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at support@bitbox.com.
        </p>
      </section>
    </div>
  );
}

PrivacyPolicy.propTypes = {
  VITE_CLIENT_PORT: PropTypes.string,
};
