const AuthService = require("../services/auth-service");

module.exports = (app) => {
  const service = new AuthService();
  app.post("/customer/signup", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const { data } = await service.SignUp({ email, password });
      return res.json(data);
    } catch (err) {
      //   next(err);
      console.log(err);
    }
  });
};
