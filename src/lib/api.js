import axios from 'axios'
const signUpUrl =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API-KEY]'

const signInUrl =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API-KEY]'

export const signUpRequest = async (data) => {
  const config = {
    url: signUpUrl,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }
  return await axios(config)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error.response.data
    })
}

export const signInRequest = async (data) => {
  const config = {
    url: signInUrl,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }
  return await axios(config)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error.response.data
    })
}
