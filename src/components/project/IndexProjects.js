import { React, Component } from 'react'
import { indexProjects } from '../../api/projects'
import { Link } from 'react-router-dom'
// import { FALSE } from 'node-sass'
// import Button from 'react-bootstrap/Button'
// import logo from '../pictures/NavBarLogo.png'
// import Card from 'react-bootstrap/Card'

class IndexProjects extends Component {
  constructor (props) {
    super(props)

    this.state = {
      project: null,
      loading: false
    }
  }

  // - lifecycle method (right away when this component renders, make a request for all the list & put em in state)
  componentDidMount = () => {
    // console.log(this.state)
    const { user, msgAlert } = this.props
    indexProjects(user)
      .then((res) => {
        // console.log(res.data.project)
        this.setState({ project: res.data.project })
        // console.log(res.data.project)
      })

      .catch(err => msgAlert({ heading: 'INdex failed', message: 'Something went wrong' + err.message, variant: 'danger' }))
  }
  // updateProject = (projectId) => {
  //   const { match, user, msgAlert, history, id } = this.props
  //   updateProject(id, user)
  //     .then(() => history.push('/'))
  //     .then(() => history.push(match.url))
  //     .then(() =>
  //       msgAlert({
  //         heading: 'Project Updated Successfully',
  //         message: 'Nice work, go check out your Project.',
  //         variant: 'success'
  //       })
  //     )
  //     .catch((err) => {
  //       msgAlert({
  //         heading: 'Project update failed :(',
  //         message: 'Something went wrong: ' + err.message,
  //         variant: 'danger'
  //       })
  //     })
  // }

  // deleteProject = (projectId) => {
  //   const { match, user, msgAlert, history, id } = this.props
  //   deleteProject(id, user)
  //     // Redirect to the index of projects
  //     .then(() => history.push('/'))
  //     .then(() => history.push(match.url))
  //     .then(() =>
  //       msgAlert({
  //         heading: 'Project Deleted Successfully',
  //         message: 'Your Project no longer exists',
  //         variant: 'success'
  //       })
  //     )
  //     .catch((err) =>
  //       msgAlert({
  //         heading: 'Failed to Delete Project',
  //         message: 'Something went wrong: ' + err.message,
  //         variant: 'danger'
  //       })
  //     )
  // }

  // render
  // when idex all projects is clicked on show all projects that are available to that owner
  render () {
    const { project } = this.state
    if (project === null) {
      return 'Loading...'
    }
    // const { user } = this.props
    let projectsJsx
    if (project.length === 0) {
      projectsJsx = 'Got no projects, Go Create Some!'
    } else {
      projectsJsx = project.map(project => (
        <li key={project._id}>
          <Link to={`/projects/${project._id}`}>
            {project.projectName}
          </Link>
        </li>
      ))
    }

    // filter through project and return projects where owner matches user id
    // const filteredProjects = projects.filter(project => user._id === project.owner)
    // console.log(projects)
    return (
      <>
        <h3>All Your Personal Projects</h3>
        <br></br>
        {projectsJsx}
      </>
    )
  }
}
export default IndexProjects
