// // pages/api/formData.js
// let formData = [];

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     // Return all stored form data
//     return res.status(200).json(formData);
//   }

//   if (req.method === 'POST') {
//     // Store the new data from the form
//     const { title, description, imgUrl, other } = req.body;
    
//     const newEntry = { title, description, imgUrl, other };
//     formData.push(newEntry);
    
//     return res.status(201).json(newEntry);
//   }
// }















let formData = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Get the search term from the query string
    const { searchTerm } = req.query;

    // If a search term is provided, filter the form data based on it
    if (searchTerm) {
      const filteredData = formData.filter(entry =>
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (entry.other && entry.other.toLowerCase().includes(searchTerm.toLowerCase())) // Optional: Include other fields in the search
      );
      return res.status(200).json(filteredData);
    }

    // If no search term, return all stored data
    return res.status(200).json(formData);
  }

  if (req.method === 'POST') {
    // Store the new data from the form
    const { title, description, imgUrl, other } = req.body;

    const newEntry = { title, description, imgUrl, other };
    formData.push(newEntry);

    return res.status(201).json(newEntry);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
