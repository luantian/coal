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

  static async getInfo() {
    return await this.get({
      url: '/getInfo'
    })
  }

}

export default User
