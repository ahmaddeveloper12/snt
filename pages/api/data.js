// // pages/api/data.js
// let storedData = null;

// export default function handler(req, res) {
//   if (req.method === "POST") {
//     // Store the data sent by the client
//     storedData = req.body;
//     return res.status(200).json({ message: "Data saved successfully." });
//   } else if (req.method === "GET") {
//     // Return the stored data
//     return res.status(200).json(storedData);
//   } else {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }
// }




















let storedData = null;

export default function handler(req, res) {
  if (req.method === "POST") {
    // Store the data sent by the client
    storedData = req.body;
    return res.status(200).json({ message: "Data saved successfully." });
  } else if (req.method === "GET") {
    // Get search query from request
    const { search } = req.query;  // Search query parameter
    
    if (search) {
      // Filter data based on search term
      const filteredData = storedData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        (item.other && item.other.toLowerCase().includes(search.toLowerCase()))
      );
      return res.status(200).json(filteredData);
    } else {
      // Return all stored data if no search query
      return res.status(200).json(storedData);
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}




