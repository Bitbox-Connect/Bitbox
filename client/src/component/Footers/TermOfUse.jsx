import '../../css/Main.css';
import PropTypes from 'prop-types';

export default function TermOfUse() {
  const VITE_CLIENT_PORT = import.meta.env.VITE_CLIENT_PORT;

  return (
    <div className="terms-container mx-auto p-8 mt-20 mb-12 max-w-3xl bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-4xl font-bold text-blue-900 mb-8">Terms Of Use</h2>

      <section className="mb-8">
        <p className="text-gray-500 text-sm">Version 1.0</p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          The BITBOX website located at <span className="font-semibold text-blue-800">{VITE_CLIENT_PORT}/termofuse</span> is a copyrighted work belonging to BITBOX. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.
        </p>
      </section>

      <section className="term-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Access to the Site</h3>
        <p className="text-gray-700 leading-relaxed">
          Subject to these Terms, Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, non-commercial use.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Company reserves the right to change, suspend, or cease the Site with or without notice. You acknowledge that Company will not be liable to you or any third-party for any changes, interruptions, or termination of the Site or any part.
        </p>
      </section>

      <section className="term-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">User Content</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>User Content:</strong> "User Content" means any information and content that a user submits to the Site. You are exclusively responsible for your User Content...
        </p>
      </section>

      <section className="term-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Third-Party Links & Ads; Other Users</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Third-Party Links & Ads:</strong> The Site may contain links to third-party websites and services, and/or display advertisements for third-parties...
        </p>
      </section>

      <section className="term-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Disclaimers</h3>
        <p className="text-gray-700 leading-relaxed">
          The site is provided on an "as-is" and "as available" basis, and Company and our suppliers expressly disclaim any and all warranties...
        </p>
      </section>

      <section className="term-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Limitation on Liability</h3>
        <p className="text-gray-700 leading-relaxed">
          Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages...
        </p>
      </section>

      <section className="term-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Copyright Policy</h3>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed pl-5">
          <li>Your physical or electronic signature;</li>
          <li>Identification of the copyrighted work(s) that you claim to have been infringed;</li>
          <li>Identification of the material on our services that you claim is infringing...</li>
        </ul>
      </section>

      <section className="term-section mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">General</h3>
        <p className="text-gray-700 leading-relaxed">
          These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you...
        </p>
      </section>
    </div>
  );
}

TermOfUse.propTypes = {
  VITE_CLIENT_PORT: PropTypes.string,
};
