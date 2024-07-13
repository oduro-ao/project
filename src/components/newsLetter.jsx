// Newsletter.js
import React from 'react';

const Newsletter = () => {
  return (
    <div>
      <section className="newsletter-section">
        <form className="form" action="">
          <h3 className="heading">subscribe for latest updates</h3>
          <input
            type="email"
            name=""
            placeholder="enter your email"
            id=""
            className="email-input"
          />
          <input type="submit" value="subscribe" className="submit-button" />
        </form>
      </section>
    </div>
  );
}

export default Newsletter;
