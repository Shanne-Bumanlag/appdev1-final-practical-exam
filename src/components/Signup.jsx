
import styles from './Signup.module.css';
import blossomFlower from '../assets/blossom-flower.svg';

function Signup() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection}>
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
