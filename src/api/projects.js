import apiUrl from '../apiConfig'
import axios from 'axios'
// import { data } from 'autoprefixer'

// create projects request
export const createProject = (data, user) => {
  return axios({
    url: apiUrl + '/create-project',
    method: 'post',
    data: { project: data.project },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// index of all projects
export const indexProjects = (user, id) => {
  return axios({
    url: apiUrl + '/projects?user=' + user._id,
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// show one project
export const showProject = (id, user) => {
  return axios({
    url: apiUrl + '/projects/' + id,
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// delete a project
export const deleteProject = (id, user) => {
  return axios({
    url: apiUrl + '/projects/' + id,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// edit/update project
export const updateProject = (data, id, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/projects/${id}`,
    data: { project: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
