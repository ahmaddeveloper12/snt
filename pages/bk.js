// // pages/data.js
// import { useEffect, useState } from "react";

// export default function DataPage() {
//   const [bk, setbk] = useState(null);

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchbk = async () => {
//       const res = await fetch("/api/data");
//       if (res.ok) {
//         const fetchedbk = await res.json();
//         setbk(fetchedbk);
//       } else {
//         alert("Failed to fetch data.");
//       }
//     };
//     fetchbk();
//   }, []);

//   return (
//     <div>
//       <h1>Submitted Data</h1>
//       {bk ? (
//         <div>
//           <h2>{bk.title}</h2>
//           <p>{bk.desc}</p>
//           {bk.imageUrl && <img src={bk.imageUrl} alt={bk.title} />}
//         </div>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// }






















// import { useEffect, useState } from "react";

// export default function DataPage() {
//   const [bk, setBk] = useState(null);

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchBk = async () => {
//       const res = await fetch("/api/data");
//       if (res.ok) {
//         const fetchedBk = await res.json();
//         setBk(fetchedBk);
//       } else {
//         alert("Failed to fetch data.");
//       }
//     };
//     fetchBk();
//   }, []);

//   return (
//     <div className="data-container">
//       <h1>Submitted Data</h1>
//       {bk ? (
//         <div className="article-card">
//           <h2 className="article-title">{bk.title}</h2>
//           <p className="article-description">{bk.desc}</p>
//           {bk.imageUrl && <img src={bk.imageUrl} alt={bk.title} className="article-image" />}
//         </div>
//       ) : (
//         <p>Loading data...</p>
//       )}

//       <style jsx>{`
//         .data-container {
//           font-family: 'Arial', sans-serif;
//           margin: 40px auto;
//           max-width: 1200px;
//           padding: 20px;
//           background-color: #f9f9f9;
//           text-align: center;
//           border-radius: 8px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//           animation: fadeIn 1s ease-out;
//         }

//         h1 {
//           font-size: 2.5rem;
//           color: #333;
//           margin-bottom: 40px;
//           letter-spacing: 1px;
//         }

//         .article-card {
//           background-color: #fff;
//           border-radius: 8px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//           padding: 20px;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           will-change: transform, box-shadow;
//         }

//         .article-card:hover {
//           transform: translateY(-10px) rotate(3deg);
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
//         }

//         .article-title {
//           font-size: 2rem;
//           color: #007bff;
//           margin-bottom: 15px;
//           transition: color 0.3s ease;
//         }

//         .article-description {
//           color: #666;
//           font-size: 1rem;
//           line-height: 1.5;
//         }

//         .article-image {
//           width: 100%;
//           height: auto;
//           max-width: 400px;
//           border-radius: 8px;
//           margin-top: 15px;
//           transition: transform 0.3s ease;
//         }

//         .article-image:hover {
//           transform: scale(1.1);
//         }

//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//           }
//           100% {
//             opacity: 1;
//           }
//         }

//         @media (max-width: 768px) {
//           h1 {
//             font-size: 2rem;
//           }

//           .article-card {
//             padding: 15px;
//           }

//           .article-title {
//             font-size: 1.5rem;
//           }

//           .article-image {
//             max-width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }











import { useEffect, useState } from "react";
import Image from "next/image"; // Import the Image component from next/image

export default function DataPage() {
  const [bk, setBk] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchBk = async () => {
      const res = await fetch("/api/data");
      if (res.ok) {
        const fetchedBk = await res.json();
        setBk(fetchedBk);
      } else {
        alert("Failed to fetch data.");
      }
    };
    fetchBk();
  }, []);

  return (
    <div className="data-container">
      <h1>Submitted Data</h1>
      {bk ? (
        <div className="article-card">
          <h2 className="article-title">{bk.title}</h2>
          <p className="article-description">{bk.desc}</p>
          {bk.imageUrl && (
            <Image 
              src={bk.imageUrl} 
              alt={bk.title} 
              className="article-image" 
              width={400}  // Add width (adjust as needed)
              height={auto} // Add height (adjust as needed)
              priority={true}  // Optional: Add to prioritize loading for above-the-fold images
            />
          )}
        </div>
      ) : (
        <p>Loading data...</p>
      )}

      <style jsx>{`
        .data-container {
          font-family: 'Arial', sans-serif;
          margin: 40px auto;
          max-width: 1200px;
          padding: 20px;
          background-color: #f9f9f9;
          text-align: center;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1s ease-out;
        }

        h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 40px;
          letter-spacing: 1px;
        }

        .article-card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          will-change: transform, box-shadow;
        }

        .article-card:hover {
          transform: translateY(-10px) rotate(3deg);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .article-title {
          font-size: 2rem;
          color: #007bff;
          margin-bottom: 15px;
          transition: color 0.3s ease;
        }

        .article-description {
          color: #666;
          font-size: 1rem;
          line-height: 1.5;
        }

        .article-image {
          width: 100%;
          height: auto;
          max-width: 400px;
          border-radius: 8px;
          margin-top: 15px;
          transition: transform 0.3s ease;
        }

        .article-image:hover {
          transform: scale(1.1);
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .article-card {
            padding: 15px;
          }

          .article-title {
            font-size: 1.5rem;
          }

          .article-image {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}













