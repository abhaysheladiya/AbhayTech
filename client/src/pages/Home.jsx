import "../App.css";

export const Home = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="section-hero">
          <div className="hero-content">
            <p className="tagline">👋 Hi, I'm <strong>Abhay</strong> — a passionate developer</p>
            <h1>Welcome to My Tech Blog</h1>
            <p className="quote">
              “Clean code is like a well-told joke — you get it instantly.”
            </p>

            <div className="btn-group">
              <a href="/contact" aria-label="Connect with me">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/service" aria-label="Learn more about services">
                <button className="btn">Learn More</button>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image">
            <img
              src="/images/Home.png"
              alt="Hero showcasing developer skills"
              width="600"
              height="500"
              loading="lazy"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="stat-box">
              <h2>👥 50+</h2>
              <p>Registered Users</p>
            </div>
            <div className="stat-box">
              <h2>🎯 100+</h2>
              <p>Satisfied Clients</p>
            </div>
            <div className="stat-box">
              <h2>📅 1+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="stat-box">
              <h2>💻 10K+</h2>
              <p>Lines of Code</p>
            </div>
            <div className="stat-box">
              <h2>🛠️ GitHub</h2>
              <p>click <a href="https://github.com/abhaysheladiya" target="_blank" rel="github">here</a></p>
            </div>
          </div>
        </section>
      </main>


      <style>{`
        .section-hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4rem 2rem;
          flex-wrap: wrap;
          background: linear-gradient(to right, #f0f8ff, #ffffff);
        }

        .hero-content {
          max-width: 600px;
        }

        .tagline {
          font-size: 1.2rem;
          color: #007bff;
          margin-bottom: 1rem;
        }

        .hero-content h1 {
          font-size: 3rem;
          color: #1e1e2f;
          margin-bottom: 1rem;
        }

        .quote {
          font-style: italic;
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #444;
        }

        .btn-group {
          display: flex;
          gap: 1rem;
        }

        .btn {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .btn:hover {
          background-color: #0056b3;
        }

        .hero-image img {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        /* Stats Section */
        .section-analytics {
          padding: 4rem 2rem;
          background-color: #f9f9f9;
        }

        .grid-four-cols {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-box {
          background: #fff;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
        }

        .stat-box h2 {
          font-size: 2rem;
          color: #007bff;
          margin-bottom: 0.5rem;
        }

        .stat-box p {
          font-size: 1rem;
          color: #444;
        }

        @media (max-width: 768px) {
          .section-hero {
            flex-direction: column;
            text-align: center;
          }

          .hero-content {
            margin-bottom: 2rem;
          }

          .hero-content h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </>
  );
};
