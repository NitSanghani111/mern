const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userschema");
const login = require("../model/login")

router.get("/", (req, res) => {
    res.send("Hello world from router.js");
})

//user registration
router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ err: "plz fill the required field" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            res.status(422).json({ err: "email already exist" });
        } else if (password != cpassword) {
            res.status(422).json({ err: "password not matching" });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });
            //add password in hash before save

            await user.save();
            res.status(201).json({ message: "user register successfully" });
        }

    } catch (err) {
        console.log(err);
    }
    //console.log(req.body.name);
    //console.log(req.body.email);
    //res.json({message:req.body});
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill in all required fields" });
        }

        // Here you would perform actual authentication against your database
        // For demonstration, let's assume admin's credentials are hardcoded
        if (email || password ) {
            res.json({ success: true });
        } else {
            res.status(400).json({ error: "Invalid credentials" });
        }
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ error: "Failed to login" });
    }
});




module.exports = router;