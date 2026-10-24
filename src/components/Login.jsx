
import styles from './Login.module.css';
import blossomFlower from '../assets/blossom-flower.svg';
import googleLogo from '../assets/icons-google-logo.svg';
import appleLogo from '../assets/icons-apple-logo.svg';

function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Welcome back!</h1>
        <p className={styles.subtitle}>
          Enter your Credentials to access your account
        </p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.passwordLabel}>
              <label htmlFor="password">Password</label>
              <a href="#">Forgot password?</a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <label className={styles.checkboxGroup}>
            <input type="checkbox" />
            <span>Remember for 30 days</span>
          </label>

          <button
  type="submit"
  className={styles.signupButton}
>
  Login
</button>
        </form>

        <div className={styles.divider}>
          <span></span>
          <p>Or</p>
          <span></span>
        </div>

        <div className={styles.socialButtons}>
          <button
            type="button"
            className={styles.socialButton}
          >
            <img src={googleLogo} alt="" />
            <span>Sign in with Google</span>
          </button>

          <button
            type="button"
            className={styles.socialButton}
          >
            <img src={appleLogo} alt="" />
            <span>Sign in with Apple</span>
          </button>
        </div>

       <p className={styles.accountText}>
  Don’t have an account? <a href="#">Sign Up</a>
        </p>
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

export default Login;
