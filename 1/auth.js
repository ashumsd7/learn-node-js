const register = (username) => {
  console.log(username, "user is ");
};

const login = (username, password) => {
  console.log("login is ", username, password);
};

module.exports = {
  login,
  register,
};
