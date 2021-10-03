import Base from "@/models/Base";

class LeaderOnDuty extends Base {
  constructor() {
    super()
  }

  // 大屏展示 领导值班表
  static async queryScreen(data) {
    return await this.get({
      url: '/leaderduty/duty/screen',
      data,
    })
  }


}

export default LeaderOnDuty
