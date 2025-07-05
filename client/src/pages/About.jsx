export const About = () => {
  return (
    <>
      <style>{`
        /* Section Wrapper */
        .section-about {
          padding: 5rem 1.5rem;
          background: linear-gradient(to right, #e3f2fd, #ffffff);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: fadeIn 1s ease-in-out;
        }

        /* About Card */
        .about-container {
          max-width: 1200px;
          width: 100%;
          background: #ffffff;
          padding: 4rem 3rem;
          border-radius: 20px;
          box-shadow: 0 14px 45px rgba(0, 0, 0, 0.1);
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          align-items: center;
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 1s ease-out forwards;
        }

        /* Image Styling */
        .about-image img {
          width: 100%;
          max-width: 360px;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
          transition: transform 0.4s ease;
        }

        .about-image img:hover {
          transform: scale(1.05);
        }

        /* Content Styling */
        .about-content {
          text-align: left;
        }

        .main-heading {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #1e1e2f;
        }

        .subtitle {
          font-size: 1.4rem;
          color: #555;
          margin-bottom: 2rem;
        }

        .about-content p {
          font-size: 1.25rem;
          line-height: 2;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .about-content strong {
          color: #007bff;
        }

        /* Map Section */
        .map-section {
          margin-top: 4rem;
          padding: 4rem 2rem;
          background-color: #f9fbfe;
          width: 100%;
          text-align: center;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .map-text h2 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          color: #007bff;
        }

        .map-text p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 2rem;
        }

        .map-container {
          display: flex;
          justify-content: center;
        }

        .responsive-map {
          width: 100%;
          max-width: 1000px;
          height: 420px;
          border: none;
          border-radius: 16px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        /* Animations */
        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about-container {
            grid-template-columns: 1fr;
            padding: 2.5rem 1.5rem;
            text-align: center;
          }

          .about-image {
            margin-bottom: 2rem;
          }

          .main-heading {
            font-size: 2.2rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .about-content p {
            font-size: 1.05rem;
          }

          .map-text h2 {
            font-size: 1.6rem;
          }

          .responsive-map {
            height: 300px;
          }
        }
      `}</style>

      <section className="section-about">
        <div className="about-container">
          <div className="about-image">
            <img src="/images/about.png" alt="Abhay profile" />
          </div>

          <div className="about-content">
            <h1 className="main-heading">About Me</h1>
            <p className="subtitle">Crafting code with creativity and purpose.</p>
            <p>
              Hi, I'm <strong>Abhay</strong> — a full-stack web developer passionate about building clean, scalable, and impactful applications.
              With a strong foundation in the MERN stack, I love exploring new technologies and sharing what I learn through this blog.
            </p>
            <p>
              Beyond coding, I believe in continuous learning, open-source contributions, and collaborating on meaningful projects.
              This blog is my canvas — where thoughts meet technology and creativity meets code.
            </p>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="map-section">
          <div className="map-text">
            <h2>📍 Our Location</h2>
            <p> Education Campus, Ahmedabad, Gujarat</p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3670.369578777589!2d72.49341921744387!3d23.08356299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA1JzA0LjAiTiA3MsKwMjknNDMuNyJF!5e0!3m2!1sen!2sin!4v1751729085291!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="responsive-map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
