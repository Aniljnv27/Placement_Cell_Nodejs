const mongoose = require('mongoose');

const DB = 'mongodb+srv://manianil8423:Anil&2000@cluster0.p4pyoxg.mongodb.net/?retryWrites=true&w=majority';

// Configure the useNewUrlParser option when connecting to MongoDB
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true, // Add this option as well
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
