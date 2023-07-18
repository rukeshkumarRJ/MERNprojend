const express = require('express');
const router = express.Router();
const userSchema = require('../model/userSchema');
const eventSchema = require('../model/eventSchema');

// POST: http://localhost:4500/user/create-user

router.post('/create-event', (req, res, next) => {
    eventSchema.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  
  
// POST: http://localhost:4500/user/create-user
router.post("/create-user", (req, res, next) => {
  userSchema.create(req.body)
    .then((data) => {
      res.status(200).json({ message: "Registration successful!" });
    })
    .catch((err) => {
      res.send(err);
    });
});

// Route: POST /user/login
router.post("/login", async (req, res) => {
  const { uname, pwd } = req.body;

  try {
    // Simulate user authentication (replace this with actual authentication logic)
    const user = await userSchema.findOne({ uname: uname, pwd: pwd });

    if (user) {
      // Authentication successful
      res.status(200).json({ message: "Login successful!" });
    } else {
      // Authentication failed
      res.status(401).json({ message: "Invalid credentials." });
    }
  } catch (err) {
    // Handle any errors that occurred during the query or authentication process
    console.error(err);
    res.status(500).json();
  }
});


  router.get('/',async (request, response) => {
    try{
      const users = await eventSchema.find();
      response.status(200).json(users);
  }catch( error ){
      response.status(404).json({ message: error.message })
  }
})

  router.route('/update-event/:id')
  .get(async (req, res, next) => {
    try {
      const data = await eventSchema.findById(req.params.id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await eventSchema.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        { new: true }
      );
      res.json(data);
      console.log(req.body, req.params.id);
    } catch (error) {
      next(error);
    }
  });


  router.delete('/delete-event/:id', async (req, res) => {
    try{
      await eventSchema.deleteOne({_id: req.params.id});
      res.status(200).json("User deleted Successfully");
  } catch (error){
      res.status(400).json({ message: error.message});     
  }
  });
    
  



//http://localhost:4500/student/create-student
module.exports = router;