import BaseApi from "./base-api"

class Dashboard extends BaseApi {
  getDashboard = page => this.client.get("/dashboard", { params: { page: page } })
}

export const DashboardApi = new Dashboard()
