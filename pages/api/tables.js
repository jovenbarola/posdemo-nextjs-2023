// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let sconnectionstring =
  'mongodb+srv://barolajoven:<password>@cluster0.mboz1bc.mongodb.net/?retryWrites=true&w=majority';

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!

  res.status(200).json({ name: 'Hello, world!' });
};
