const { AuthRepository } = require("../database/repository/auth-repository");

class AuthService {
  constructor() {
    this.repository = new AuthRepository();
  }

  async SignUp(userInputs) {
    const { email, password } = userInputs;

    try {
      const newUser = await this.repository.registerUser({
        email,
        password,
      });

      return newUser;
    } catch (err) {
      //   throw new APIError("Data Not found", err);
      console.log(err);
    }
  }
}
