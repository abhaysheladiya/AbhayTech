export const Footer = () => {
  return (
    <>
      <style>{`
        footer {
          background-color: #0d1b2a;
          color: #ffffff;
          padding: 1.5rem 1rem;
          text-align: center;
          font-size: 1rem;
          margin-top: auto;
          box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
        }

        footer p {
          margin: 0;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        footer p:hover {
          color: #4dabf7;
          transition: color 0.3s ease;
        }

        @media (max-width: 768px) {
          footer {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <footer>
        <p>© {new Date().getFullYear()} Abhay Sheladiya. All rights reserved.</p>
      </footer>
    </>
  );
};
