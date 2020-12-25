import React from 'react';
import s from './Container.module.css';
import { node } from 'prop-types';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.propTypes = {
  children: node.isRequired,
};

export default Container;
