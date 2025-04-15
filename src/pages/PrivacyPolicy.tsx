import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Introduction
        </Typography>
        <Typography variant="body1" paragraph>
          At [Company Name], we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our digital marketing services.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We may collect personal information that you voluntarily provide to us when you:
        </Typography>
        <ul>
          <li>Register for our services</li>
          <li>Subscribe to our newsletter</li>
          <li>Request information about our services</li>
          <li>Contact us for support</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use the information we collect to:
        </Typography>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Improve our services and customer experience</li>
          <li>Communicate with you about our services</li>
          <li>Send you marketing communications (with your consent)</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to:
        </Typography>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to processing of your information</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact us at:
        </Typography>
        <Typography variant="body1">
          Email: privacy@companyname.com
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy; 