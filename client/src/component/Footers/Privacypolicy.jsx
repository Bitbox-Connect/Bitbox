import '../css/Main.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h2 className="Heading-Page mb-3">Privacy Policy</h2>
      <div className="container">
        <p className='paragraph'>
          Welcome to the Privacy Policy of Bitbox OpenSource Community (referred to as "Bitbox," "we," "our," or "us"). This Policy outlines how we collect, use, maintain, and disclose information of our users. It also describes users' privacy rights and choices regarding their information. Please read this Policy carefully before accessing our Platform or using any of the services or products offered therein. If you have any questions, feel free to contact us using the information provided below.
        </p>
        {/* <hr /> */}
        <h3>1. Personal Information</h3>
        <p className='paragraph'>
          "Personal Information" refers to data that identifies a user, including but not limited to their name, identification number, email address, age, gender, location, photograph, and/or phone number provided during registration or thereafter on the Platform.
          "Sensitive Personal Information" includes data such as passwords, financial information (excluding truncated credit/debit card digits), health data, official identifiers (e.g., biometric data, social security numbers), information about sexual life, race, ethnicity, political or religious beliefs, account details, or other data categorized as 'sensitive personal data' or 'special categories of data' under applicable data protection laws.
        </p>
        {/* <hr /> */}
        <h3>2. Information We Collect</h3>
        <p>
          We may collect both personal and non-personal identifiable information when users visit our Platform, register, or engage in other activities, services, features, or resources we offer. However, we only collect Personal Information when necessary, such as during registration.
        </p>
        <div className='subpara'> 
        <p>
            <strong>a. Personal Identifiable Information:</strong> We collect personal identifiable information, such as names and email addresses, to enable access to the Platform and its services/products. This information is collected only if voluntarily submitted by users.
        </p>
        <p>
        <strong>b. Non-Personal Identifiable Information:</strong> When users interact with our Platform, we may collect non-personal identifiable information such as browser names, language preferences, and referring sites.
        </p>
        <p>
          <strong>c. Cookies:</strong> Our Platform may use cookies to enhance user experience. Users may choose to refuse cookies, but doing so may affect some functionalities.
        </p>
        </div>
        {/* <hr /> */}
        <h3 className='shareInfo'>3. How We Use and Share Information</h3>
        <p className='paragraph'>
          We collect and use Personal Information for purposes including providing access to our Platform, improving and customizing our services, and communicating with users. We do not sell or trade Personal Information, and we only share generic aggregated demographic information with trusted affiliates.
        </p>
        {/* <hr /> */}
        <h3>4. Your Choice</h3>
        <p className='paragraph'>
          Users have the option to limit the information provided, communications received, and cookies used. Additionally, users have rights to access, correct, and delete their information, subject to applicable laws.
        </p>
        {/* <hr /> */}
        <h3>5. Protection of Your Information</h3>
        <p className='paragraph'>
          We employ security measures to protect against unauthorized access, use, alteration, or destruction of Personal Information. Disclosure of information is limited to authorized personnel and as required by law.
        </p>
        {/* <hr /> */}
        <h3>6. Third Party Websites</h3>
        <p className='paragraph'>
          Our Platform may contain links to third-party websites, whose practices are not controlled by us. Users should review the terms and policies of such websites.
        </p>
        {/* <hr /> */}
        <h3>7. Cross-Border Data Transfer</h3>
        <p className='paragraph'>
          Your information, including Personal Information, may be stored, processed, and transferred to servers in countries with differing privacy laws. By accessing our Platform, users consent to such transfers.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
