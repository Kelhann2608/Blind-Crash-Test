import { useState } from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => setEmail(e.target.value);
  const display = () => {
    document.getElementById('email').value = '';
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Entre ton email"
          onChange={handleEmailChange}
          value={email}
        />

        <button type="submit" className="button-class" onClick={display}>
          <a target="_blank" href={`mailto:${email}`} rel="noreferrer">
            Partage ton résultat
          </a>
        </button>
        <div className="social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/"
            className="twitter-button"
            data-show-count="false"
          >
            <FaTwitter color="black" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://facebook.com/"
            className="facebook-button"
            data-show-count="false"
          >
            <FaFacebook color="black" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/"
            className="instagram-button"
            data-show-count="false"
          >
            <FaInstagramSquare color="black" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
