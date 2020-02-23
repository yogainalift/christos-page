import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Christos"/>
    <section className="content">
      <h1>
        <span style={{ display: 'block' }}>Christos</span>
        <span style={{ display: 'block' }}>Tselepidas</span>
      </h1>
      <p>Frontend Developer</p>
      <a href="mailto:ctselepidas@gmail.com" title="Email Christos Tselepidas">
        Contact
      </a>
    </section>
  </Layout>
);

export default IndexPage;
