import apiUrl from '../apiConfig'
import axios from 'axios'
// import { data } from 'autoprefixer'

// create projects request
export const createProject = (data, user) => {
  return axios({
    url: apiUrl + '/create-project',
    method: 'post',
    data: data,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// index of all projects
export const indexProjects = (user) => {
  return axios({
    url: apiUrl + '/projects',
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// show one projects
export const showProject = (id, user) => {
  return axios({
    url: apiUrl + '/projects/' + id,
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// delete a projects
export const deleteProject = (id, user) => {
  return axios({
    url: apiUrl + '/projects/' + id,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// edit/update projects
export const updateProject = (projectsData, id, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/projects/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { projects: projectsData }
  })
}
