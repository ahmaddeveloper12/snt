// // pages/api/items.js

// import connectToDatabase from '../../lib/mongodb';
// import Item from '../../models/Item';

// export default async function handler(req, res) {
//   await connectToDatabase(); // Connect to MongoDB

//   // Handle POST request for creating a new item
//   if (req.method === 'POST') {
//     const { title, description, imgUrl } = req.body;
//     const newItem = new Item({ title, description, imgUrl });

//     try {
//       await newItem.save();
//       res.status(201).json({ message: 'Item created successfully!' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to create item.' });
//     }
//   }

//   // Handle GET request to fetch all items
//   else if (req.method === 'GET') {
//     try {
//       const items = await Item.find(); // Fetch all items from MongoDB
//       res.status(200).json(items); // Send the items as response
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch items.' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' }); // Handle unsupported HTTP methods
//   }
// }















import connectToDatabase from '../../lib/mongodb';
import Item from '../../models/Item';

export default async function handler(req, res) {
  await connectToDatabase(); // Connect to MongoDB

  // Handle POST request for creating a new item
  if (req.method === 'POST') {
    const { title, description, imgUrl } = req.body;
    const newItem = new Item({ title, description, imgUrl });

    try {
      await newItem.save();
      res.status(201).json({ message: 'Item created successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create item.' });
    }
  }

  // Handle GET request to fetch all items
  else if (req.method === 'GET') {
    const { search } = req.query; // Retrieve search query parameter

    try {
      let items;

      if (search) {
        // If search query is provided, perform search by title or description
        const searchRegex = new RegExp(search, 'i'); // Case-insensitive search
        items = await Item.find({
          $or: [
            { title: { $regex: searchRegex } },
            { description: { $regex: searchRegex } },
          ],
        });
      } else {
        // Fetch all items if no search query
        items = await Item.find();
      }

      res.status(200).json(items); // Send the items as response
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch items.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' }); // Handle unsupported HTTP methods
  }
}
