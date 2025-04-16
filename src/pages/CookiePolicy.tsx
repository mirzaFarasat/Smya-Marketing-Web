import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p className="mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">What Are Cookies</h2>
        <p className="mb-4">
          Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and allow us to improve our services.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">How We Use Cookies</h2>
        <p className="mb-4">
          We use cookies for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Essential cookies: Required for the website to function properly</li>
          <li>Analytics cookies: Help us understand how visitors interact with our website</li>
          <li>Functionality cookies: Remember your preferences and settings</li>
          <li>Marketing cookies: Used to deliver relevant advertisements</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Types of Cookies We Use</h2>
        <p className="mb-4">
          Our website uses the following types of cookies:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Session cookies: Temporary cookies that expire when you close your browser</li>
          <li>Persistent cookies: Remain on your device for a set period of time</li>
          <li>First-party cookies: Set by our website</li>
          <li>Third-party cookies: Set by our service providers</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Managing Cookies</h2>
        <p className="mb-4">
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our site.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Third-Party Cookies</h2>
        <p className="mb-4">
          We use services from third parties that may set cookies on your device. These include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Google Analytics for website analytics</li>
          <li>Social media platforms for sharing features</li>
          <li>Advertising networks for relevant ads</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our Cookie Policy, please contact us at:
        </p>
        <p>Email: privacy@companyname.com</p>
      </div>
    </div>
  );
};

export default CookiePolicy;