// pages/about.js
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>About Us</h1>
        <p>
          Welcome to our site! We are a team of passionate individuals committed to providing high-quality content and Information. 
          Our mission is to make a difference in the industry by creating solutions that cater to all your needs.
        </p>
        <p>
          Our team consists of experts in information, development, marketing, and business strategy. We are driven by innovation and customer satisfaction.
        </p>
        <p>
          Thank you for visiting our page. We hope to work with you soon!
        </p>
      </div>
    </div>
  );
}
