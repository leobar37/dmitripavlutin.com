import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import styles from './index.module.scss';
import {
  TO_INDEX,
  TO_ALL_POSTS,
  TO_ABOUT
} from 'routes/path';

const year = new Date().getFullYear();

export default function Footer({ profiles, author }) {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>
          © {year} {author}
        </div>
        <div className={styles.links}>
          <div className={styles.footerNavigation}>
            <Link to={TO_INDEX()}>Home</Link>
            <Link to={TO_ALL_POSTS()}>All posts</Link>
            <Link to={TO_ABOUT()}>About</Link>
          </div>
          <div className={styles.follow}>
            <a href={profiles.twitter} title={`${author}'s Twitter profile`}>
              <img alt={`${author}'s Twitter profile`} src="/twitter.svg" />
            </a>
            <a href={profiles.github} title={`${author}'s Github profile`}>
              <img alt={`${author}'s Github profile`} src="/github.svg" />
            </a>
            <a href={profiles.stackoverflow} title={`${author}'s Stackoverflow profile`}>
              <img alt={`${author}'s Stackoverflow profile`} src="/stackoverflow.svg" />
            </a>
            <a href={profiles.linkedin} title={`${author}'s LinkedIn profile`}>
              <img alt={`${author}'s LinkedIn profile`} src="/linkedin.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  profiles: PropTypes.object,
  author: PropTypes.string
};