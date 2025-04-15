import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const CookiePolicy: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Cookie Policy
      </Typography>
      <Typography variant="body1" paragraph>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          What Are Cookies
        </Typography>
        <Typography variant="body1" paragraph>
          Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and allow us to improve our services.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          How We Use Cookies
        </Typography>
        <Typography variant="body1" paragraph>
          We use cookies for the following purposes:
        </Typography>
        <ul>
          <li>Essential cookies: Required for the website to function properly</li>
          <li>Analytics cookies: Help us understand how visitors interact with our website</li>
          <li>Functionality cookies: Remember your preferences and settings</li>
          <li>Marketing cookies: Used to deliver relevant advertisements</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Types of Cookies We Use
        </Typography>
        <Typography variant="body1" paragraph>
          Our website uses the following types of cookies:
        </Typography>
        <ul>
          <li>Session cookies: Temporary cookies that expire when you close your browser</li>
          <li>Persistent cookies: Remain on your device for a set period of time</li>
          <li>First-party cookies: Set by our website</li>
          <li>Third-party cookies: Set by our service providers</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Managing Cookies
        </Typography>
        <Typography variant="body1" paragraph>
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our site.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Third-Party Cookies
        </Typography>
        <Typography variant="body1" paragraph>
          We use services from third parties that may set cookies on your device. These include:
        </Typography>
        <ul>
          <li>Google Analytics for website analytics</li>
          <li>Social media platforms for sharing features</li>
          <li>Advertising networks for relevant ads</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Updates to This Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about our Cookie Policy, please contact us at:
        </Typography>
        <Typography variant="body1">
          Email: privacy@companyname.com
        </Typography>
      </Box>
    </Container>
  );
};

export default CookiePolicy; 