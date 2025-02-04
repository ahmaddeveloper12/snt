








// import { useEffect, useState } from 'react';

// export default function DataPage() {
//   const [red, setRed] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     // Fetch the stored data from the API
//     async function fetchRed() {
//       const response = await fetch('/api/formData');
//       const result = await response.json();
//       setRed(result);
//       setFilteredData(result);  // Initialize filtered data with all fetched data
//     }

//     fetchRed();
//   }, []);

//   useEffect(() => {
//     // Filter data whenever search term changes
//     const filtered = red.filter(item =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (item.other && item.other.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//     setFilteredData(filtered);
//   }, [searchTerm, red]);  // Run whenever searchTerm or red changes

//   return (
//     <div className="data-container">
//       <h1>Submitted Data</h1>

//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search by title, description, or other info..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <hr />
//       </div>

//       {/* Display Data */}
//       {filteredData.length === 0 ? (
//         <p>No data available or no matches found.</p>
//       ) : (
//         filteredData.map((item, index) => (
//           <div key={index} className="card">
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//             <img src={item.imgUrl} alt={item.title} className="image" />
//             <p><strong>Other Info:</strong> {item.other}</p>
//           </div>
//         ))
//       )}

//       <style jsx>{`
//         .data-container {
//           font-family: Arial, sans-serif;
//           margin: 0 auto;
//           max-width: 1200px;
//           padding: 20px;
//           text-align: center;
//           background-color: #f4f7f6;
//         }

//         h1 {
//           font-size: 2.5rem;
//           color: #333;
//           margin-bottom: 20px;
//         }

//         .search-bar {
//           margin-bottom: 20px;
//         }

//         .search-bar input {
//           width: 80%;
//           padding: 10px;
//           font-size: 1rem;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//           transition: border-color 0.3s ease;
//         }

//         .search-bar input:focus {
//           border-color: #007BFF;
//           outline: none;
//         }

//         hr {
//           width: 80%;
//           margin: 20px auto;
//           border: 1px solid #ccc;
//         }

//         .card {
//           background: #fff;
//           border-radius: 10px;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//           margin-bottom: 30px;
//           padding: 20px;
//           transform: scale(1);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .card:hover {
//           transform: scale(1.05);
//           box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
//         }

//         .card h2 {
//           color: #007BFF;
//           font-size: 1.8rem;
//           margin-bottom: 10px;
//         }

//         .image {
//           width: 100%;
//           height: auto;
//           max-width: 400px;
//           border-radius: 10px;
//           margin-top: 20px;
//         }

//         p {
//           color: #666;
//           font-size: 1rem;
//           line-height: 1.5;
//         }

//         @media (max-width: 768px) {
//           h1 {
//             font-size: 2rem;
//           }

//           .card {
//             margin-bottom: 20px;
//             padding: 15px;
//           }

//           .card h2 {
//             font-size: 1.6rem;
//           }

//           .image {
//             max-width: 100%;
//           }

//           .search-bar input {
//             width: 100%;
//           }
//         }

//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//           }
//           100% {
//             opacity: 1;
//           }
//         }

//         .card {
//           animation: fadeIn 0.6s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }













import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component from next/image

export default function DataPage() {
  const [red, setRed] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch the stored data from the API
    async function fetchRed() {
      const response = await fetch('/api/formData');
      const result = await response.json();
      setRed(result);
      setFilteredData(result);  // Initialize filtered data with all fetched data
    }

    fetchRed();
  }, []);

  useEffect(() => {
    // Filter data whenever search term changes
    const filtered = red.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.other && item.other.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredData(filtered);
  }, [searchTerm, red]);  // Run whenever searchTerm or red changes

  return (
    <div className="data-container">
      <h1>Submitted Data</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title, description, or other info..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <hr />
      </div>

      {/* Display Data */}
      {filteredData.length === 0 ? (
        <p>No data available or no matches found.</p>
      ) : (
        filteredData.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {/* Replaced <img> with <Image> component */}
            <Image
              src={item.imgUrl}
              alt={item.title}
              className="image"
              width={400} // Set the width of the image
              height={auto} // The height will scale automatically based on the width
              objectFit="cover" // Ensures the image fits without distortion
            />
            <p><strong>Other Info:</strong> {item.other}</p>
          </div>
        ))
      )}

      <style jsx>{`
        .data-container {
          font-family: Arial, sans-serif;
          margin: 0 auto;
          max-width: 1200px;
          padding: 20px;
          text-align: center;
          background-color: #f4f7f6;
        }

        h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 20px;
        }

        .search-bar {
          margin-bottom: 20px;
        }

        .search-bar input {
          width: 80%;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          transition: border-color 0.3s ease;
        }

        .search-bar input:focus {
          border-color: #007BFF;
          outline: none;
        }

        hr {
          width: 80%;
          margin: 20px auto;
          border: 1px solid #ccc;
        }

        .card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
          padding: 20px;
          transform: scale(1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .card h2 {
          color: #007BFF;
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        .image {
          width: 100%;
          height: auto;
          max-width: 400px;
          border-radius: 10px;
          margin-top: 20px;
        }

        p {
          color: #666;
          font-size: 1rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .card {
            margin-bottom: 20px;
            padding: 15px;
          }

          .card h2 {
            font-size: 1.6rem;
          }

          .image {
            max-width: 100%;
          }

          .search-bar input {
            width: 100%;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .card {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
