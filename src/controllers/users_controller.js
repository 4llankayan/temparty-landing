import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ where: { email: email }});

    if (oldUser != null) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    var encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;
    await user.save()

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const user = await User.findOne({ where: { email: email }});

    if (user && (await bcrypt.compare(password, user.password))) {

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;
      user.save();

      res.status(200).json(user);
    } else {
      res.status(400).send("Invalid Credentials");
    }

  } catch (err) {
    console.log(err);
  }
}

export default { register, login };
