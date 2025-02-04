// // pages/owner.js
// import React from 'react';

// export default function Owner() {
//   return (
//     <>
//       <div className="container">
//         <div className="card">
//           <h1>San Tech</h1>
//           <div className="owner-info">
//             <div className="owner-photo">
//               <img
//                 src="https://img.freepik.com/premium-vector/luxury-sn-ns-monogram-letter-gold-logo-design_375081-2026.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_hybrid_sidr"
//                 alt="Owner"
//                 className="owner-image"
//               />
//             </div>
//             <div className="owner-details">
//               <h2>Ahmad khan</h2>
//               <p className="role">Founder & CEO</p>
//               <p className="bio">
//                 Ahmad is a visionary leader with over 10 years of experience in the tech industry. His passion for innovation has helped the company grow rapidly.
//               </p>
//               <div className="social-links">
//                 {/* <a href="https://linkedin.com" target="_blank" className="social-link">
//                   LinkedIn
//                 </a>
//                 <a href="https://twitter.com" target="_blank" className="social-link">
//                   Twitter
//                 </a>
//                 <a href="https://instagram.com" target="_blank" className="social-link">
//                   Instagram
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Global Styles */
//         body {
//           font-family: 'Roboto', sans-serif;
//           margin: 0;
//           padding: 0;
//           background: linear-gradient(135deg, #6e7cfc, #4f93ff);
//           color: #333;
//         }

//         .container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-height: 100vh;
//           padding: 20px;
//         }

//         .card {
//           background: white;
//           width: 90%;
//           max-width: 1000px;
//           border-radius: 16px;
//           padding: 40px;
//           box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
//           transform-style: preserve-3d;
//           text-align: center;
//           transform: rotateX(10deg) rotateY(-10deg);
//           transition: transform 1s ease-out, box-shadow 0.3s ease;
//         }

//         .card:hover {
//           transform: rotateX(0deg) rotateY(15deg) scale(1.05);
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
//         }

//         h1 {
//           font-size: 36px;
//           color: #fff;
//           margin-bottom: 30px;
//           font-weight: 600;
//           text-transform: uppercase;
//         }

//         .owner-info {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 20px;
//           justify-content: center;
//           animation: fadeIn 1.5s ease-out;
//         }

//         .owner-photo {
//           flex: 1;
//           max-width: 300px;
//           border-radius: 50%;
//           overflow: hidden;
//           animation: scaleUp 1s ease-out;
//         }

//         .owner-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }

//         .owner-image:hover {
//           transform: scale(1.1);
//         }

//         .owner-details {
//           flex: 2;
//           text-align: left;
//           animation: fadeUp 1s ease-out forwards;
//         }

//         .owner-details h2 {
//           font-size: 30px;
//           color: #4f93ff;
//           font-weight: 600;
//         }

//         .role {
//           font-size: 18px;
//           color: #777;
//           margin-bottom: 20px;
//         }

//         .bio {
//           font-size: 16px;
//           color: #555;
//           line-height: 1.6;
//           margin-bottom: 20px;
//         }

//         .social-links {
//           display: flex;
//           gap: 20px;
//         }

//         .social-link {
//           font-size: 16px;
//           text-decoration: none;
//           color: #4f93ff;
//           transition: color 0.3s ease;
//         }

//         .social-link:hover {
//           color: #333;
//         }

//         /* Keyframe Animations */
//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeUp {
//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes scaleUp {
//           0% {
//             transform: scale(0.9);
//           }
//           100% {
//             transform: scale(1);
//           }
//         }

//         /* Responsive Design */
//         @media (max-width: 768px) {
//           .owner-info {
//             flex-direction: column;
//             align-items: center;
//           }

//           .owner-details {
//             text-align: center;
//             padding: 0 20px;
//           }

//           .owner-photo {
//             max-width: 250px;
//           }

//           h1 {
//             font-size: 30px;
//           }
//         }

//         @media (max-width: 480px) {
//           h1 {
//             font-size: 24px;
//           }

//           .owner-details h2 {
//             font-size: 24px;
//           }

//           .bio {
//             font-size: 14px;
//           }

//           .social-links {
//             flex-direction: column;
//             align-items: center;
//           }

//           .social-link {
//             margin-bottom: 10px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }












import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image

export default function Owner() {
  return (
    <>
      <div className="container">
        <div className="card">
          <h1>San Tech</h1>
          <div className="owner-info">
            <div className="owner-photo">
              {/* Replaced img with Image component */}
              <Image
                src="https://img.freepik.com/premium-vector/luxury-sn-ns-monogram-letter-gold-logo-design_375081-2026.jpg?ga=GA1.1.2040314287.1733501560&semt=ais_hybrid_sidr"
                alt="Owner"
                className="owner-image"
                width={300} // Set the width of the image
                height={300} // Set the height of the image
                objectFit="cover" // Ensure the image covers the container without distortion
              />
            </div>
            <div className="owner-details">
              <h2>Ahmad khan</h2>
              <p className="role">Founder & CEO</p>
              <p className="bio">
                Ahmad is a visionary leader with over 10 years of experience in the tech industry. His passion for innovation has helped the company grow rapidly.
              </p>
              <div className="social-links">
                {/* <a href="https://linkedin.com" target="_blank" className="social-link">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" className="social-link">
                  Twitter
                </a>
                <a href="https://instagram.com" target="_blank" className="social-link">
                  Instagram
                </a> */}
              </div>
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
          background: linear-gradient(135deg, #6e7cfc, #4f93ff);
          color: #333;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
        }

        .card {
          background: white;
          width: 90%;
          max-width: 1000px;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          transform-style: preserve-3d;
          text-align: center;
          transform: rotateX(10deg) rotateY(-10deg);
          transition: transform 1s ease-out, box-shadow 0.3s ease;
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
        }

        .owner-info {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          animation: fadeIn 1.5s ease-out;
        }

        .owner-photo {
          flex: 1;
          max-width: 300px;
          border-radius: 50%;
          overflow: hidden;
          animation: scaleUp 1s ease-out;
        }

        .owner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .owner-image:hover {
          transform: scale(1.1);
        }

        .owner-details {
          flex: 2;
          text-align: left;
          animation: fadeUp 1s ease-out forwards;
        }

        .owner-details h2 {
          font-size: 30px;
          color: #4f93ff;
          font-weight: 600;
        }

        .role {
          font-size: 18px;
          color: #777;
          margin-bottom: 20px;
        }

        .bio {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-link {
          font-size: 16px;
          text-decoration: none;
          color: #4f93ff;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: #333;
        }

        /* Keyframe Animations */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleUp {
          0% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .owner-info {
            flex-direction: column;
            align-items: center;
          }

          .owner-details {
            text-align: center;
            padding: 0 20px;
          }

          .owner-photo {
            max-width: 250px;
          }

          h1 {
            font-size: 30px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 24px;
          }

          .owner-details h2 {
            font-size: 24px;
          }

          .bio {
            font-size: 14px;
          }

          .social-links {
            flex-direction: column;
            align-items: center;
          }

          .social-link {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  );
}
