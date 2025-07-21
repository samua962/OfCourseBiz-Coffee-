import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ status: 'fail', message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Optional: create token for automatic login
    const token = jwt.sign({ id: newUser._id, name: newUser.name, email: newUser.email }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      user: { id: newUser._id, name: newUser.name, email: newUser.email, token },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'fail', message: 'Server error' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ status: 'fail', message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ status: 'fail', message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({
      status: 'success',
      user: { id: user._id, name: user.name, email: user.email, token },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'fail', message: 'Server error' });
  }
};
