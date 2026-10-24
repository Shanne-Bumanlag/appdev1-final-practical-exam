
import styles from './Signup.module.css';
import blossomFlower from '../assets/blossom-flower.svg';

function Signup() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <label className={styles.checkboxGroup}>
            <input type="checkbox" />
            <span>I agree to the terms &amp; policy</span>
          </label>

          <button type="submit" className={styles.signupButton}>
            Signup
          </button>
        </form>
      </section>

      <section className={styles.rightSection}>
        <img
          src={blossomFlower}
          alt="Blossom flower"
          className={styles.blossomImage}
        />
      </section>
    </main>
  );
}

export default Signup;
