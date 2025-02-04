// models/Item.js

import mongoose from 'mongoose';

const workSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.work || mongoose.model('work', workSchema);
