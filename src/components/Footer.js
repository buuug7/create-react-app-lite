import React from 'react';
import Link from './Link';
import { VisibilityFilters } from '../actions';

const Footer = () => {
  return (
    <div className="Footer">
      <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
      <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
      <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
    </div>
  );
};

export default Footer;