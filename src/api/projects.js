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
export const updateProject = (projectsData, id, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/projects/${id}/`,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { project: projectsData }
  })
}
