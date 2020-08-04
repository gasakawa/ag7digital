import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" meta={[]} />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
