// // pages/index.js
// import { useState } from "react";
// import Router from "next/router";

// export default function Home() {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = { title, desc, imageUrl };

//     // Send the data to the backend API to store it
//     const res = await fetch("/api/data", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     // After successful submission, redirect to the result page
//     if (res.ok) {
//       Router.push("/data");
//     } else {
//       alert("Failed to save data.");
//     }
//   };

//   return (
//     <div>
//       <h1>Enter Data</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Image URL:
//           <input
//             type="url"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
















import { useState } from "react";
import Router from "next/router";

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { title, desc, imageUrl };

    // Send the data to the backend API to store it
    const res = await fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // After successful submission, redirect to the result page
    if (res.ok) {
      Router.push("/data");
    } else {
      alert("Failed to save data.");
    }
  };

  return (
    <div className="form-container">
      <h1>Enter Data</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input"
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            className="input"
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            className="input"
          />
        </label>
        <br />
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <style jsx>{`
        .form-container {
          font-family: 'Arial', sans-serif;
          margin: 0 auto;
          max-width: 600px;
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

        .form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 1rem;
          outline: none;
          transition: border 0.3s ease, box-shadow 0.3s ease;
        }

        .input:focus {
          border-color: #007bff;
          box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
        }

        .submit-btn {
          padding: 12px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #0056b3;
          transform: translateY(-4px);
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

          .form-container {
            padding: 15px;
          }

          .submit-btn {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
