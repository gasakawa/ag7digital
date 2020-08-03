import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';
import Home from '../components/Home';
import About from '../components/About';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" meta={[]} />
      <Home />
      <About />
    </Layout>
  );
};

export default IndexPage;
