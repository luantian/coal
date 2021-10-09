import Base from "@/models/Base";

class User extends Base {
  constructor() {
    super()
  }

  static async toLogin(data) {
    return await this.post({
      url: '/login',
      data,
    })
  }

  static async toLogout() {
    return await this.post({
      url: '/logout'
    })
  }

  static async getInfo() {
    return await this.get({
      url: '/getInfo'
    })
  }

}

export default User
