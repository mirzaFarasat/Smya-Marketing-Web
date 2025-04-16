import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          At [Company Name], we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our digital marketing services.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information that you voluntarily provide to us when you:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Register for our services</li>
          <li>Subscribe to our newsletter</li>
          <li>Request information about our services</li>
          <li>Contact us for support</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and maintain our services</li>
          <li>Improve our services and customer experience</li>
          <li>Communicate with you about our services</li>
          <li>Send you marketing communications (with your consent)</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to processing of your information</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>Email: privacy@companyname.com</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;