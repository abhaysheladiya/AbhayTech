import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <style>{`
        .error-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #f9f9fb;
          text-align: center;
          padding: 2rem;
        }

        .error-page h1 {
          font-size: 6rem;
          color: #007bff;
          margin-bottom: 1rem;
        }

        .error-page p {
          font-size: 1.5rem;
          color: #555;
          margin-bottom: 2rem;
        }

        .error-buttons {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .error-buttons a {
          background-color: #007bff;
          color: #fff;
          padding: 0.8rem 1.8rem;
          border-radius: 8px;
          text-decoration: none;
          font-size: 1rem;
          transition: background 0.3s ease;
        }

        .error-buttons a:hover {
          background-color: #0056b3;
        }
      `}</style>

      <div className="error-page">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>

        <div className="error-buttons">
          <NavLink to="/">🏠 Return to Home</NavLink>
          <NavLink to="/contact">📧 Report a Problem</NavLink>
        </div>
      </div>
    </>
  );
};
