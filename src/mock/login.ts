export default {
  loginByUsername() {
    return {
      code: 20000,
      data: {
        token: "admin"
      }
    };
  },
  logout: () => {
    return {
      code: 20000,
      data: "success"
    };
  },
  getUserInfo() {
    return {
      code: 20000,
      data: {
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        name: "admin",
        roles: ["admin"],
      }
    };
  }
}
