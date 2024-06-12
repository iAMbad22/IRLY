const mongoose = require('mongoose');
const Schema = mongoose.Schema;

   const UserProfileSchema = new Schema({
     name: {
       type: String,
       required: true
     },
     dob: {
       type: String, 
       required: true
     },
     gender: {
       type: String,
       required: true
     },
     height: {
       type: Number,
       required: true
     },
     drink: {
       type: String,
       required: true
     },
     smoke: {
       type: String,
       required: true
     },
     activity: {
       type: String,
       required: true
     },
     bio: {
       type: String,
       required: true
     },
     emoji: {
       type: String,
       required: true
     },
   });

   module.exports = mongoose.model('UserProfile', UserProfileSchema);