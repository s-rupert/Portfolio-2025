import React, {useState} from 'react';
import './Footerstyle.css';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
              ...formData,
              [name]: value,
          });
      };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the page reload

        const response = await fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus('Message sent successfully!');
        } else {
            setStatus('There was an error sending your message.');
        }
    };
  return (
    <div id="footer-section">
      <div id="accomplishment-contact">
        <div id="accomplishment-container">
          <div id="accomplishment">
            <div>
              <h1>30+</h1>
              <p>Projects</p>
            </div>
            <div>
              <h1>100+</h1>
              <p>Leetcodes</p>
            </div>
            <div>
              <h1>3yrs+</h1>
              <p>Experience</p>
            </div>
          </div>
          <p id="desc">Feel free to reach out through the provided channels. I'm available for full-time and part-time opportunities and open to contribute in projects to gain valuable experience. Thank you for visiting my website!</p>  
        </div>

        <div id="contact-container">
        <form id="contactForm" onSubmit={handleSubmit}>
            <h2>Contact</h2>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                rows="10"
                cols="50"
                placeholder="Your message ..."
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit">Submit</button>
            {status && <p>{status}</p>}
        </form>
        </div>
      </div>
        <div id="contact-channels">
          <a href="https://github.com/s-rupert" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://x.com/Srupesh01" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/s_rupert01/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/srupert/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
      </div>

      <div id="copyright">
        ©2025 <span>Rupesh</span>. All Rights Reserved, Inc.
      </div>
    </div>
  );
};

export { Footer };
