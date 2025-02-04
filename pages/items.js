// // pages/items.js

// import { useEffect, useState } from 'react';

// export default function ItemsPage() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     async function fetchItems() {
//       const res = await fetch('/api/items');
//       const data = await res.json();
//       setItems(data);
//     }

//     fetchItems();
//   }, []);

//   return (
//     <div>
//       <h1>All Items</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item._id}>
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//             <img src={item.imgUrl} alt={item.title} width="200" />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }








// import { useEffect, useState } from 'react';

// export default function ItemsPage() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     async function fetchItems() {
//       const res = await fetch('/api/items');
//       const data = await res.json();
//       setItems(data);
//     }

//     fetchItems();
//   }, []);

//   return (
//     <div className="items-container">
//       <h1>All Items</h1>
//       <ul className="items-list">
//         {items.map((item) => (
//           <li key={item._id} className="item-card">
//             <h2 className="item-title">{item.title}</h2>
//             <p className="item-description">{item.description}</p>
//             <img src={item.imgUrl} alt={item.title} className="item-image" />
//           </li>
//         ))}
//       </ul>

//       <style jsx>{`
//         .items-container {
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

//         .items-list {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//           gap: 20px;
//           list-style-type: none;
//           padding: 0;
//           margin: 0;
//         }

//         .item-card {
//           background-color: #fff;
//           border-radius: 8px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//           padding: 20px;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           will-change: transform, box-shadow;
//         }

//         .item-card:hover {
//           transform: translateY(-10px) rotate(3deg);
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
//         }

//         .item-title {
//           font-size: 1.8rem;
//           color: #007bff;
//           margin-bottom: 15px;
//           transition: color 0.3s ease;
//         }

//         .item-description {
//           color: #666;
//           font-size: 1rem;
//           line-height: 1.5;
//         }

//         .item-image {
//           width: 100%;
//           height: auto;
//           max-width: 250px;
//           border-radius: 8px;
//           margin-top: 15px;
//           transition: transform 0.3s ease;
//         }

//         .item-image:hover {
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

//           .item-card {
//             padding: 15px;
//           }

//           .item-title {
//             font-size: 1.5rem;
//           }

//           .item-image {
//             max-width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }






// import { useEffect, useState } from 'react';

// export default function ItemsPage() {
//   const [items, setItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     async function fetchItems() {
//       const res = await fetch('/api/items');
//       const data = await res.json();
//       setItems(data);
//     }

//     fetchItems();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredItems = items.filter(
//     (item) =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="items-container">
//       <h1>All Items</h1>
      
//       {/* Search bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search items..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </div>
      
//       {/* Horizontal line */}
//       <hr className="horizontal-line" />

//       <ul className="items-list">
//         {filteredItems.map((item) => (
//           <li key={item._id} className="item-card">
//             <h2 className="item-title">{item.title}</h2>
//             <p className="item-description">{item.description}</p>
//             <img src={item.imgUrl} alt={item.title} className="item-image" />
//           </li>
//         ))}
//       </ul>

//       <style jsx>{`
//         .items-container {
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
//           margin-bottom: 20px;
//           letter-spacing: 1px;
//         }

//         .search-bar {
//           margin-bottom: 20px;
//         }

//         .search-bar input {
//           width: 100%;
//           max-width: 400px;
//           padding: 10px;
//           font-size: 1rem;
//           border: 1px solid #ccc;
//           border-radius: 4px;
//           transition: border-color 0.3s ease;
//         }

//         .search-bar input:focus {
//           border-color: #007bff;
//           outline: none;
//         }

//         .horizontal-line {
//           border: none;
//           border-top: 1px solid #ccc;
//           margin: 20px 0;
//         }

//         .items-list {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//           gap: 20px;
//           list-style-type: none;
//           padding: 0;
//           margin: 0;
//         }

//         .item-card {
//           background-color: #fff;
//           border-radius: 8px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//           padding: 20px;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           will-change: transform, box-shadow;
//         }

//         .item-card:hover {
//           transform: translateY(-10px) rotate(3deg);
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
//         }

//         .item-title {
//           font-size: 1.8rem;
//           color: #007bff;
//           margin-bottom: 15px;
//           transition: color 0.3s ease;
//         }

//         .item-description {
//           color: #666;
//           font-size: 1rem;
//           line-height: 1.5;
//         }

//         .item-image {
//           width: 100%;
//           height: auto;
//           max-width: 250px;
//           border-radius: 8px;
//           margin-top: 15px;
//           transition: transform 0.3s ease;
//         }

//         .item-image:hover {
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

//           .item-card {
//             padding: 15px;
//           }

//           .item-title {
//             font-size: 1.5rem;
//           }

//           .item-image {
//             max-width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


















import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component from next/image

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchItems() {
      const res = await fetch('/api/items');
      const data = await res.json();
      setItems(data);
    }

    fetchItems();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="items-container">
      <h1>All Items</h1>
      
      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      
      {/* Horizontal line */}
      <hr className="horizontal-line" />

      <ul className="items-list">
        {filteredItems.map((item) => (
          <li key={item._id} className="item-card">
            <h2 className="item-title">{item.title}</h2>
            <p className="item-description">{item.description}</p>
            {/* Updated img to Image component */}
            <Image 
              src={item.imgUrl} 
              alt={item.title} 
              width={250} // Define the width of the image
              height={250} // Define the height of the image
              className="item-image"
            />
          </li>
        ))}
      </ul>

      <style jsx>{`
        .items-container {
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
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .search-bar {
          margin-bottom: 20px;
        }

        .search-bar input {
          width: 100%;
          max-width: 400px;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          transition: border-color 0.3s ease;
        }

        .search-bar input:focus {
          border-color: #007bff;
          outline: none;
        }

        .horizontal-line {
          border: none;
          border-top: 1px solid #ccc;
          margin: 20px 0;
        }

        .items-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .item-card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          will-change: transform, box-shadow;
        }

        .item-card:hover {
          transform: translateY(-10px) rotate(3deg);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .item-title {
          font-size: 1.8rem;
          color: #007bff;
          margin-bottom: 15px;
          transition: color 0.3s ease;
        }

        .item-description {
          color: #666;
          font-size: 1rem;
          line-height: 1.5;
        }

        .item-image {
          width: 100%;
          height: auto;
          max-width: 250px;
          border-radius: 8px;
          margin-top: 15px;
          transition: transform 0.3s ease;
        }

        .item-image:hover {
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

          .item-card {
            padding: 15px;
          }

          .item-title {
            font-size: 1.5rem;
          }

          .item-image {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
