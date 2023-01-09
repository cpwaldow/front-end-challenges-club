import React from 'react';
import './signupform.css';

const SignUpForm = () => {
  const [email, setEmail] = React.useState('');
  return (
    <section className="container">
      <h2>Sign up for the latest updates</h2>
      <form>
        <label htmlFor="email">EMAIL ADDRESS</label>
        <section className="container-input-btn">
          <input
            type="email"
            placeholder="person@inbox.com"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button>→</button>
        </section>
      </form>
    </section>
  );
};

export default SignUpForm;
