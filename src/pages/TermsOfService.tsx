import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsOfService: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Terms of Service
      </Typography>
      <Typography variant="body1" paragraph>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Agreement to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          By accessing or using our digital marketing services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Services Description
        </Typography>
        <Typography variant="body1" paragraph>
          We provide digital marketing services including but not limited to:
        </Typography>
        <ul>
          <li>Brand development and strategy</li>
          <li>Content marketing and creation</li>
          <li>Performance marketing and analytics</li>
          <li>Social media management</li>
          <li>Search engine optimization (SEO)</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Client Responsibilities
        </Typography>
        <Typography variant="body1" paragraph>
          As a client, you agree to:
        </Typography>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Cooperate with our team for service delivery</li>
          <li>Pay for services as agreed in the contract</li>
          <li>Provide necessary access to digital assets when required</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Payment Terms
        </Typography>
        <Typography variant="body1" paragraph>
          Payment terms will be specified in your service agreement. Generally:
        </Typography>
        <ul>
          <li>Fees are due as specified in the contract</li>
          <li>Late payments may incur additional charges</li>
          <li>Refund policies will be detailed in the service agreement</li>
        </ul>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          All content created by us remains our intellectual property until full payment is received. Upon full payment, rights to the created content will be transferred to you as specified in the service agreement.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          For any questions regarding these Terms of Service, please contact us at:
        </Typography>
        <Typography variant="body1">
          Email: legal@companyname.com
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfService; 