import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logo'; // Adjust path as needed

const About = ({ image = 'https://via.placeholder.com/215', about = '' }) => (
  <aside>
    <img src={image} alt="blog logo" />
    <p>{about}</p>
  </aside>
);

About.propTypes = {
  image: PropTypes.string,
  about: PropTypes.string
};

export default About;