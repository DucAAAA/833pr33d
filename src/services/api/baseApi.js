import axios, { AxiosRequestConfig } from 'axios'
import { notification as toast } from 'antd';

import config from '../../contants/config.json'
import history from "../history"

const entryPointByEnv = () => {
  let env = "development"
  if (process.env.FRAMGIA_STAGING) {
    env = "sunasterisk_staging"
  } else {
    env = process.env.RAILS_ENV || "staging"
  }
  return config[env].environmentConfig.entryPoint
}

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: entryPointByEnv,
  timeout: 30000,
  apiVersion: 'v1',
  headers: {'X-Skyrec-Access-Token': ''}
}

export default class API {
  constructor(config) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      config
    })

    this.client.interceptors.request.use(function(config){
      config.headers['X-Skyrec-Access-Token'] = localStorage.getItem('access_token')
      return config
    })

    this.client.interceptors.response.use( res => {
      return res
    }, function(err) {
      if(err.response.status === 401) {
        localStorage.removeItem('persist:root')
        toast.error({
          message: "System messages",
          description: "Unauthentication"
        });
        history.replace('/login')
      } else {
        throw err.response.data;
      }
    })
  }
}