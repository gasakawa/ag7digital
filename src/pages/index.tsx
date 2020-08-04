import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" meta={[]} />
      <Home />
      <About />
      <Services />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
