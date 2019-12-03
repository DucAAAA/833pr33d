import BaseApi from "./base-api"

class Template extends BaseApi {
  getTemplate = templateId => this.client.get(`/templates/${templateId}`)
}

export const TemplateApi = new Template()
