const express = require('express');
   const router = express.Router();
   const UserProfile = require('../models/UserProfile');


   router.get('/', async (req, res) => {
     try {
       const profiles = await UserProfile.find();
       res.json(profiles);
     } catch (err) {
       res.status(500).json({ message: err.message });
     }
   });


   router.post('/', async (req, res) => {
     const profile = new UserProfile({
       name: req.body.name,
       dob: req.body.dob,
       gender: req.body.gender,
       height: req.body.height,
       drink: req.body.drink,
       smoke: req.body.smoke,
       activity: req.body.activity,
       bio: req.body.bio,
       emoji: req.body.emoji,
     });

     try {
       const newProfile = await profile.save();
       res.status(201).json(newProfile);
     } catch (err) {
       res.status(400).json({ message: err.message });
     }
   });

   
   router.get('/:id', getUserProfile, (req, res) => {
     res.json(res.userProfile);
   });

   
   router.patch('/:id', getUserProfile, async (req, res) => {
     if (req.body.name != null) {
       res.userProfile.name = req.body.name;
     }
     if (req.body.dob != null) {
       res.userProfile.dob = req.body.dob;
     }
     if (req.body.gender != null) {
       res.userProfile.gender = req.body.gender;
     }
     if (req.body.height != null) {
       res.userProfile.height = req.body.height;
     }
     if (req.body.drink != null) {
       res.userProfile.drink = req.body.drink;
     }
     if (req.body.smoke != null) {
       res.userProfile.smoke = req.body.smoke;
     }
     if (req.body.activity != null) {
       res.userProfile.activity = req.body.activity;
     }
     if (req.body.bio != null) {
       res.userProfile.bio = req.body.bio;
     }
     if (req.body.emoji != null) {
       res.userProfile.emoji = req.body.emoji;
     }

     try {
       const updatedProfile = await res.userProfile.save();
       res.json(updatedProfile);
     } catch (err) {
       res.status(400).json({ message: err.message });
     }
   });

   
   router.delete('/:id', getUserProfile, async (req, res) => {
     try {
       await res.userProfile.remove();
       res.json({ message: 'Deleted User Profile' });
     } catch (err) {
       res.status(500).json({ message: err.message });
     }
   });

   
   async function getUserProfile(req, res, next) {
     let userProfile;
     try {
       userProfile = await UserProfile.findById(req.params.id);
       if (userProfile == null) {
         return res.status(404).json({ message: 'Cannot find user profile' });
       }
     } catch (err) {
       return res.status(500).json({ message: err.message });
     }
     res.userProfile = userProfile;
     next();
   }

   module.exports = router;