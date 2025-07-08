import axios from 'axios'
/* const baseUrl = 'http://localhost:3001/notes' */ // the original url before part 3.b
const baseUrl = 'http://localhost:3001/api/notes'

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data)

  // error practicing purpose
/*   const request = axios.get(baseUrl)
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting)) */

}

const create = newObject => {
  return axios.post(baseUrl, newObject).then(response => response.data)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)
}

export default { getAll, create, update}

// export default { 
//   getAll: getAll, 
//   create: create, 
//   update: update 
// }