import React from 'react';
import s from './Section.module.css';
import { element, string } from 'prop-types';

function Section({ title, children }) {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: string.isRequired,
  children: element.isRequired,
};

export default Section;
