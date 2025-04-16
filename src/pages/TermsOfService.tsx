import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Agreement to Terms</h2>
        <p className="mb-4">
          By accessing or using our digital marketing services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Services Description</h2>
        <p className="mb-4">
          We provide digital marketing services including but not limited to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Brand development and strategy</li>
          <li>Content marketing and creation</li>
          <li>Performance marketing and analytics</li>
          <li>Social media management</li>
          <li>Search engine optimization (SEO)</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Client Responsibilities</h2>
        <p className="mb-4">
          As a client, you agree to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide accurate and complete information</li>
          <li>Cooperate with our team for service delivery</li>
          <li>Pay for services as agreed in the contract</li>
          <li>Provide necessary access to digital assets when required</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Payment Terms</h2>
        <p className="mb-4">
          Payment terms will be specified in your service agreement. Generally:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Fees are due as specified in the contract</li>
          <li>Late payments may incur additional charges</li>
          <li>Refund policies will be detailed in the service agreement</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
        <p className="mb-4">
          All content created by us remains our intellectual property until full payment is received. Upon full payment, rights to the created content will be transferred to you as specified in the service agreement.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-4">
          For any questions regarding these Terms of Service, please contact us at:
        </p>
        <p>Email: legal@companyname.com</p>
      </div>
    </div>
  );
};

export default TermsOfService;