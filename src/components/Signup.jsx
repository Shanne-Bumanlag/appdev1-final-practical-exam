
import styles from './Signup.module.css';
import blossomFlower from '../assets/blossom-flower.svg';

function Signup() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>
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
