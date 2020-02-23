import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCheckSquare, faCoffee);

const Layout = ({ children }) => {
  return (
    <>
      <main className="container">{children}</main>
      <footer>
        <a
          className="gh"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/yogainalift"
          title="Christos Tselepidas on Twitter"
        >
          <FontAwesomeIcon icon={['fab', 'github']}/>
        </a>
        <a
          className="li"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ctselepidas"
          title="Christos Tselepidas on LinkedIn"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']}/>
        </a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
