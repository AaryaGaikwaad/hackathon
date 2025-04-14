import axios from 'axios'
import { config } from './config'

export async function registerUser(
  fullName,
  email,
  password,
  phone
) {
  try {
    // create url
    const url = `${config.serverUrl}/user/registration`

    // create the body
    const body = {
      fullName,
      email,
      password,
      phone,
    }

    // make the API call
    const response = await axios.post(url, body)

    // return response body
    return response.data
  } catch (ex) {
    console.error('exception: ', ex)
  }
}

export async function loginUser(email, password) {
  try {
    // create url
    const url = `${config.serverUrl}/user/login`

    // create the body
    const body = {
      email,
      password,
    }

    // make the API call
    const response = await axios.post(url, body)

    // return response body
    return response.data
  } catch (ex) {
    console.error('exception: ', ex)
  }
}
