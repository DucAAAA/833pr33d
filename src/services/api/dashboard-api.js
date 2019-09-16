import BaseApi from "./base-api"

class Dashboard extends BaseApi {
  getDashboard = params => this.client.get("/dashboard", { params })
}

export const DashboardApi = new Dashboard()
