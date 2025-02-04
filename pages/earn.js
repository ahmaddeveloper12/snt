// pages/earn.js
import React from 'react';

export default function Earn() {
  return (
    <>
      <div className="container">
        <div className="card">
          <h1>How We Earn</h1>
          <div className="earningContent">
            <div className="earningItem">
              <h2>Advertising</h2>
              <p>We monetize through display ads and sponsored content.</p>
            </div>
            <div className="earningItem">
              <h2>Subscriptions</h2>
              <p>Premium memberships for exclusive content and features.</p>
            </div>
            <div className="earningItem">
              <h2>Partnerships</h2>
              <p>Collaborations with brands and influencers to expand reach.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Global Styles */
        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: #f7f7f7;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          perspective: 1500px;
          padding: 20px;
        }

        /* Card Styles */
        .card {
          background: #fff;
          width: 100%;
          max-width: 1000px;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          transform-style: preserve-3d;
          text-align: center;
          transform: rotateX(10deg) rotateY(-10deg);
          transition: transform 0.8s ease-out, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: rotateX(0deg) rotateY(15deg) scale(1.05);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        h1 {
          font-size: 36px;
          color: #fff;
          margin-bottom: 30px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          animation: fadeIn 1s ease-out;
        }

        .earningContent {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          flex-wrap: wrap;
          animation: fadeIn 1s ease-out;
        }

        .earningItem {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 12px;
          width: 280px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transform-style: preserve-3d;
          text-align: center;
          opacity: 0;
          animation: fadeUp 1s ease-out forwards;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .earningItem:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .earningItem h2 {
          font-size: 24px;
          color: #4f93ff;
          margin-bottom: 15px;
          font-weight: 500;
        }

        .earningItem p {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
        }

        /* Animation for fade-in and slide-up */
        .earningItem:nth-child(1) {
          animation-delay: 0.3s;
        }

        .earningItem:nth-child(2) {
          animation-delay: 0.6s;
        }

        .earningItem:nth-child(3) {
          animation-delay: 0.9s;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive design */
        @media (max-width: 1024px) {
          .earningContent {
            justify-content: center;
          }

          .earningItem {
            width: 90%;
            margin-bottom: 20px;
          }
        }

        @media (max-width: 768px) {
          .card {
            width: 100%;
            padding: 25px;
          }

          .earningItem {
            width: 100%;
            margin-bottom: 30px;
          }

          h1 {
            font-size: 30px;
          }
        }

        @media (max-width: 480px) {
          .card {
            padding: 20px;
          }

          .earningItem {
            padding: 20px;
          }

          h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}
