import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Typist from 'react-typist';

const IndexPage = () => (
  <Layout>
    <SEO title="Christos"/>
    <section className="content">
      <h1>
        <span style={{display: 'block'}}>Christos</span>
        <span style={{display: 'block'}}>Tselepidas</span>
      </h1>
      <Typist cursor={{show: false}}><p>Frontend Developer</p></Typist>
      <a style={{marginLeft: '.4rem'}} href="mailto:ctselepidas@gmail.com" title="Email Christos Tselepidas">
        Contact
      </a>
    </section>
  </Layout>
);

export default IndexPage;
