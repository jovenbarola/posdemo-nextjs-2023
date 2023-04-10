// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from 'mongoose';

const { Schema } = mongoose;

const tables = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

export default (req, res) => {
  const dbconstring =
    'mongodb+srv://barolajoven:<password>@cluster0.mboz1bc.mongodb.net/posdemo?retryWrites=true&w=majority';
  const result = mongoose.connect(dbconstring);

  res.status(200).json({ name: 'Hello, world!' });
};
