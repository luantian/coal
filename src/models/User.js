import Base from "@/models/Base";

class User extends Base {
  constructor() {
    super()
  }

  static async toLogin(params) {
    return await this.get({
      url: '/login',
      data: params,
    })
  }

  static async getAll() {
    return await this.get({
      url: `/Knowledge/schema/edgelabels`,
      data: { page_size: -1 },
    })
  }

}

export default User
