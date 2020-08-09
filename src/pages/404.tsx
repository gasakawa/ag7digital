import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import NotFound from '../components/NotFound';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="404" meta={[]} />
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
