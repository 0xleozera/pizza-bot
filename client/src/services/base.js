import axios from 'axios'

class BaseService {
  static BASE_URL = process.env.REACT_APP_API_URL

  wrapConfig = () => {
    const headers = {
      'Accept': 'application/json',
    }

    return { headers }
  }

  post = async (url, params) => {
    let response
    let success

    try {
      response = await axios.post(BaseService.BASE_URL + url, params, this.wrapConfig())
      success = true
    } catch (e) {
      response = e.response
      success = false
    }

    const fatal = !response || response.status >= 500
    const data = fatal ? null : response.data
    const headers = fatal ? null : response.headers
    const errors = !!response && !!response.data ? response.data : []

    return this.serviceResponse({
      fatal,
      data,
      headers,
      success,
      errors,
    })
  }

  serviceResponse = (response) => {
    if (response.success) {
      return this.success({ data: response.data, headers: response.headers })
    }

    if (response.fatal) {
      return this.fatal()
    }

    return this.error({
      data: response.data,
      errors: response.errors,
    })
  }

  success = ({ data, headers }) => {
    return {
      data,
      headers,
      success: true,
      fatal: false,
    }
  }

  error = ({ data, errors }) => {
    return {
      errors,
      data,
      success: false,
      fatal: false,
    }
  }

  fatal = () => {
    return {
      success: false,
      fatal: true,
      data: {},
    }
  }
}

export default BaseService
