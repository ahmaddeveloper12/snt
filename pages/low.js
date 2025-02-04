// // pages/index.js

// import { useState } from 'react';
// import { useRouter } from 'next/router';

// export default function FormPage() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [imgUrl, setImgUrl] = useState('');
//   const [other, setOther] = useState('');
//   const [message, setMessage] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('/api/formData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ title, description, imgUrl, other }),
//     });

//     if (response.ok) {
//       setMessage('Data submitted successfully!');
//       setTitle('');
//       setDescription('');
//       setImgUrl('');
//       setOther('');
//       router.push('/data'); // Redirect to data display page after submission
//     } else {
//       setMessage('Error submitting data');
//     }
//   };

//   return (
//     <div>
//       <h1>Submit Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Image URL:</label>
//           <input
//             type="text"
//             value={imgUrl}
//             onChange={(e) => setImgUrl(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Other Info:</label>
//           <input
//             type="text"
//             value={other}
//             onChange={(e) => setOther(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }



















import { useState } from 'react';
import { useRouter } from 'next/router';

export default function FormPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [other, setOther] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/formData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, imgUrl, other }),
    });

    if (response.ok) {
      setMessage('Data submitted successfully!');
      setTitle('');
      setDescription('');
      setImgUrl('');
      setOther('');
      router.push('/data'); // Redirect to data display page after submission
    } else {
      setMessage('Error submitting data');
    }
  };

  return (
    <div className="form-container">
      <h1>Submit Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label>Other Info:</label>
          <input
            type="text"
            value={other}
            onChange={(e) => setOther(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
      <style jsx>{`
        .form-container {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f7f6;
          padding: 20px;
        }

        h1 {
          text-align: center;
          color: #333;
        }

        .form {
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
          transform: scale(1);
          transition: transform 0.3s ease;
        }

        .form:hover {
          transform: scale(1.03);
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .input {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border-radius: 5px;
          border: 1px solid #ddd;
          box-sizing: border-box;
          transition: border-color 0.3s;
        }

        .input:focus {
          border-color: #007BFF;
          outline: none;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          font-size: 1.1rem;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s ease-in-out;
        }

        .submit-btn:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }

        .message {
          margin-top: 20px;
          color: green;
          font-size: 1.1rem;
          font-weight: bold;
          text-align: center;
        }

        @media (max-width: 768px) {
          .form-container {
            padding: 20px 10px;
          }

          .form {
            padding: 20px;
          }

          h1 {
            font-size: 1.8rem;
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

        .form {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
