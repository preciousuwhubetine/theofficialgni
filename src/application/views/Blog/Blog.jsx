import { useEffect } from 'react';
import styles from './styles.module.css';

const Blog = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      document.title = "The Official Greener Nigeria Initiative";
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={styles['Blog']}>
      <div className="container">
        <div id="bh-posts"></div>
      </div>
    </div>
  )
}

export default Blog
