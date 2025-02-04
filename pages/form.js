// // pages/form.js

// import { useState } from 'react';
// import { useRouter } from 'next/router';

// export default function FormPage() {
//   const router = useRouter();
  
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     imgUrl: ''
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch('/api/items', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (res.ok) {
//       setFormData({
//         title: '',
//         description: '',
//         imgUrl: ''
//       });

//       alert('Item created successfully!');
//       router.push('/items');  // Redirect to the page that lists the items
//     } else {
//       alert('Failed to submit form');
//     }
//   };

//   return (
//     <div>
//       <h1>Create New Item</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="imgUrl"
//           placeholder="Image URL"
//           value={formData.imgUrl}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }






















import { useState } from 'react';
import { useRouter } from 'next/router';

export default function FormPage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imgUrl: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({
        title: '',
        description: '',
        imgUrl: ''
      });

      alert('Item created successfully!');
      router.push('/items');  // Redirect to the page that lists the items
    } else {
      alert('Failed to submit form');
    }
  };

  return (
    <div className="form-container">
      <h1>Create New Item</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="form-input"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="form-textarea"
        />
        <input
          type="text"
          name="imgUrl"
          placeholder="Image URL"
          value={formData.imgUrl}
          onChange={handleChange}
          required
          className="form-input"
        />
        <button type="submit" className="form-button">Submit</button>
      </form>

      <style jsx>{`
        .form-container {
          font-family: 'Arial', sans-serif;
          max-width: 600px;
          margin: 50px auto;
          background: #f9f9f9;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        h1 {
          font-size: 2.2rem;
          margin-bottom: 20px;
          color: #333;
        }

        .form {
          display: flex;
          flex-direction: column;
        }

        .form-input, .form-textarea {
          margin: 10px 0;
          padding: 12px;
          font-size: 1rem;
          border: 2px solid #ddd;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .form-input:focus, .form-textarea:focus {
          border-color: #007bff;
          transform: scale(1.02);
        }

        .form-textarea {
          resize: vertical;
          height: 150px;
        }

        .form-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 15px;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .form-button:hover {
          background-color: #0056b3;
          transform: translateY(-5px);
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .form-container {
          animation: fadeIn 1s ease-out;
        }

        @media (max-width: 768px) {
          .form-container {
            padding: 20px;
          }

          h1 {
            font-size: 1.8rem;
          }

          .form-input, .form-textarea {
            padding: 10px;
          }

          .form-button {
            padding: 12px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
