import api from '@/services/api'

// api() creates an Axios instance with baseURL: http://localhost:3000/
// .post (makes a POST request to:
// 'register', URL becomes: http://localhost:3000/register
// credentials, sends this object in the POST body
export default {
  register (credentials) {
    return api().post('register', credentials)
  }
}
