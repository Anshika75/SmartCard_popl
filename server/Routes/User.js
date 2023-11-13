const express = require("express");
const router = express.Router();
const User = require("../Models/User");
router.get("/all", async (req, res) => {
  const U = await User.find();
  res.json(U);
});

router.post("/register", async (req, res) => {
  const { displayName, displayProfile, email, Authentication, Cards } =
    req.body;
  const Username = req.body.Authentication.Username;
  const Password = req.body.Authentication.Password;

  if (
    await User.findOne({
      "Authentication.Username": Username,
      "Authentication.Password": Password,
    })
  ) {
    const user = await User.findOne({
      "Authentication.Username": Username,
      "Authentication.Password": Password,
    });
    res.json({
      Message: "User Already Exist",
      Details: user,
    });
  } else {
    try {
      const newUser = new User({
        displayName,
        displayProfile,
        email,
        Cards,
        Authentication,
      });
      await newUser.save();
      res
        .status(201)
        .json({ Message: "User registered successfully", Details: newUser });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: error.message, Message: "Internal server error" });
    }
  }
});

//   const {
//   UserID,
//   FirstName,
//   LastName,
//   ProfileImage,
//   CoverImage,
//   Contact,
//   DOB,
//   BusinessName,
//   Position,
//   Designation,
//   Website,
//   Socials,
//   About,
//   Location,
//   Gallery,
//   Payment,
//   Authentication,
// } = req.body;

// const Username=req.body.Authentication.Username
// const Password=req.body.Authentication.Password
// if (await User.findOne({ 'Authentication.Username': Username, 'Authentication.Password': Password  })){
//   const user= await User.findOne({ 'Authentication.Username': Username, 'Authentication.Password': Password  })
//   res.json({
//     "Message":"User Already Exist",
//     "Details":user
//   })
// } else{

// try {
//   const newUser = new User({
//     UserID,
//     FirstName,
//     LastName,
//     ProfileImage,
//     CoverImage,
//     Contact,
//     DOB,
//     BusinessName,
//     Position,
//     Designation,
//     Website,
//     Socials,
//     About,
//     Location,
//     Gallery,
//     Payment,
//     Authentication,
//   });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }
// });

router.get("/:id", async (req, res) => {
  const U = await User.findById(req.params.id);
  res.json(U);
});

router.patch("/update/:id", async (req, res) => {
  // const U = await User.findById(req.params.id)
  try {
    const updated_fields = req.body;
    console.log(updated_fields, req.params.id);
    const update = await User.findByIdAndUpdate(req.params.id, updated_fields, {
      new: true,
    });
    if (update) {
      console.log(update);
      res.send(update);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit-Card/:userID/:cardID", async (req, res) => {
  try {
    const updated_fields = req.body;
    console.log(req.params);
    const user = await User.findById(req.params.userID);
    console.log(user.Cards);
    const card = user.Cards.find(
      (card) => card._id.toString() === req.params.cardID
    );
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }
    // Update the card
    Object.assign(card, updated_fields);
    await user.save();
    res.send(card);
  } catch (error) {
    console.log(error);
  }
});

router.post("/add-card/:userID", async (req, res) => {
  const userID = req.params.userID;
  const newCard = req.body;
  // try {
    const user = await User.findById(userID);
    console.log(user)
    if (!user) {
      res.json({ message: "User not Found" });
    }
    
    user.Cards.push(newCard);
    await user.save();
    res.json({ success: true, message: "Card added successfully", "card":newCard });
  // } catch (error) {
  //   res.json({ message: "add card fail ", reason: error });
  // }
});

router.post("/login", async (req, res) => {
  const { Username, Password } = req.body;
  console.log(Username, Password);
  try {
    const user = await User.findOne({
      "Authentication.Username": Username,
      "Authentication.Password": Password,
    });
    console.log(user);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res
      .status(200)
      .json({ message: "Login successful", status: 200, User_details: user });
  } catch (error) {
    // res.send("error falios")
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
