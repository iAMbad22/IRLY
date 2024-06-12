const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

   const userProfiles = require('./routes/userProfiles');

   const app = express();
   const PORT = process.env.PORT || 5000;

   
   app.use(bodyParser.json());
   app.use(cors());

   
   app.use('/userProfiles', userProfiles);

   
   mongoose.connect(
    process.env.MONGODB_URI, 
    { useNewUrlParser: true,
      useUnifiedTopology: true 
    }
        ) .then(() => console.log('MongoDB connected'))
          .catch(err => console.log(err));

   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });





   
   