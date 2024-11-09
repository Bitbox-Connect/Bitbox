import '../../css/Main.css';
import PropTypes from 'prop-types';

export default function TermOfUse() {

  return (
    <div className="text-white flex items-center justify-center min-h-screen mt-40 mb-10">
      <div className="max-w-4xl p-6 border rounded-lg shadow-lg">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-[rgb(99,102,242)] mb-8">
          Terms of Use
        </h1>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-lg">
            Welcome to BitBox! By using our platform, you agree to abide by the following terms and conditions. Please read them carefully to understand your rights and responsibilities while using our services.
          </p>
        </section>

        {/* Acceptance of Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[rgb(99,102,242)] mb-4 border-b border-gray-600 pb-2">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing or using BitBox, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please refrain from using our services.
          </p>
        </section>

        {/* User Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[rgb(99,102,242)] mb-4 border-b border-gray-600 pb-2">
            2. User Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide accurate information when creating an account.</li>
            <li>Upload projects that respect copyright and are legally permissible.</li>
            <li>Engage in constructive feedback and collaboration with respect for others.</li>
          </ul>
        </section>

        {/* Project Ownership and Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[rgb(99,102,242)] mb-4 border-b border-gray-600 pb-2">
            3. Project Ownership and Intellectual Property
          </h2>
          <p className="mb-4">
            Content shared on BitBox remains the property of the user. However, by uploading your projects, you grant BitBox permission to display and distribute your content on the platform.
          </p>
        </section>

        {/* Prohibited Conduct */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[rgb(99,102,242)] mb-4 border-b border-gray-600 pb-2">
            4. Prohibited Conduct
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Do not post illegal or harmful content.</li>
            <li>Do not engage in activities that could harm the platform or other users.</li>
            <li>Avoid unauthorized access attempts to BitBox systems.</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[rgb(99,102,242)] mb-4 border-b border-gray-600 pb-2">
            5. Limitation of Liability
          </h2>
          <p className="">
            BitBox shall not be liable for any damages arising from the use of our platform, including lost profits, data, or goodwill.
          </p>
        </section>

        {/* Termination of Access */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[rgb(99,102,242)] mb-4 border-b border-gray-600 pb-2">
            6. Termination of Access
          </h2>
          <p className="">
            We reserve the right to terminate your access to BitBox if you violate these Terms of Use or engage in harmful activities.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[rgb(99,102,242)] mb-4 border-b border-gray-600 pb-2">
            7. Changes to Terms
          </h2>
          <p className="">
            BitBox reserves the right to update these Terms of Use at any time. Continued use of the platform after changes indicates acceptance of the new terms.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[rgb(99,102,242)] mb-4 border-b border-gray-600 pb-2">
            8. Governing Law
          </h2>
          <p className="">
            These Terms shall be governed by the applicable laws in your jurisdiction.
          </p>
        </section>
      </div>
    </div>
  );
}

TermOfUse.propTypes = {
  VITE_CLIENT_PORT: PropTypes.string,
};
