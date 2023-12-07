const { AuthModel } = require("../models");

class AuthRepository {
  async registerUser({ email, password }) {
    try {
      const user = new AuthModel({
        email,
        password,
      });
      const userResult = await user.save();
      return userResult;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = AuthRepository;
