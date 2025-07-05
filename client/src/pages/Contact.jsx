import { useState } from "react";
export const Contact = () => {

const [contact, setContact]= useState({
    username: "",
    email: "",
    message: "",
});

const handleInput =(e)=>{
    const name= e.target.name;
    const value= e.target.value;

    setContact({
        ...contact,
        [name]: value,
    });
};

const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(contact);
}

  return (
    <>
      <style>{`
        .section-contact {
          padding: 5rem 2rem;
          min-height: 100vh;
          background-color: #f5f8fa;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 1100px;
          width: 100%;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .contact-image {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e3f2fd;
          padding: 2rem;
        }

        .contact-image img {
          width: 100%;
          max-width: 400px;
          height: auto;
          object-fit: cover;
          border-radius: 12px;
        }

        .contact-container {
          padding: 3rem 2.5rem;
        }

        .contact-container h1 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #1e1e2f;
        }

        .contact-form div {
          margin-bottom: 1.5rem;
        }

        .contact-form label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #444;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.9rem 1.2rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
          transition: border 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #007bff;
          outline: none;
          background-color: #fff;
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-form button {
          background-color: #007bff;
          color: white;
          padding: 0.9rem 2rem;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-image {
            display: none;
          }

          .contact-container {
            padding: 2rem 1.5rem;
          }

          .contact-container h1 {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="section-contact">
        <div className="contact-grid">
          <div className="contact-image">
            <img src="/images/contact.png" alt="Contact illustration" />
          </div>

          <div className="contact-container">
            <h1>Contact Us</h1>
            <form  onSubmit={handleSubmit} className="contact-form">
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your name"
                  required
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message"
                  required
                  value={contact.message}
                  onChange={handleInput}
                ></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
