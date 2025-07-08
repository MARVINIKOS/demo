import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/User'; // ✅ adjust if your path is different!

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, termsAccepted } = req.body;

    // 1️⃣ Validate input
    if (!name || !email || !password || termsAccepted !== true) {
      res.status(400).json({
        message: "Name, email, password, and accepting terms are required."
      });
      return;
    }

    // 2️⃣ Check for duplicate email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: "Email already registered." });
      return;
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      termsAccepted: true,
    });

    // 5️⃣ Respond without password
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt
      }
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// OPTIONAL: If you need a placeholder login to prevent errors
export const login = (req: Request, res: Response): void => {
  res.status(200).json({ message: "Login not implemented yet." });
};
