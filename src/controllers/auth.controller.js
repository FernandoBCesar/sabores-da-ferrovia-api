const CryptoJS = require("crypto-js");
const { AppDataSource } = require("../database/data-source");
const userRepo = AppDataSource.getRepository("User");

module.exports = {
  register: async (request, response) => {
    const { name, email, password } = request.body;

    try {
      const encrypted = CryptoJS.SHA256(password).toString();
      const user = userRepo.create({ name, email, password: encrypted });
      await userRepo.save(user);

      response
        .status(201)
        .json({ userId: user.userId, name: user.name, email: user.email });
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  login: async (request, response) => {
    const { email, password } = request.body;

    const encrypted = CryptoJS.SHA256(password).toString();

    const user = await userRepo.findOneBy({ email, password: encrypted });

    if (!user)
      return response.status(401).json({ message: "Invalid credentials" });

    response.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  },
};