import React, { Component } from 'react'
import { indexProjects } from '../../api/projects'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import logo from '../pictures/NavBarLogo.png'
import Card from 'react-bootstrap/Card'

class IndexProjects extends Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: [],
      loading: false
    }
  }

  // - lifecycle method (right away when this component renders, make a request for all the list & put em in state)
  componentDidMount = () => {
    // console.log(this.state)
    const { user } = this.props
    indexProjects(user)
      .then((res) => {
        console.log(res.data.projects)
        this.setState({ project: res.data.project.projects })
      })
      .catch(console.error)
  }

  // render
  render () {
    const { projects } = this.state
    const { user } = this.props
    // let projectsJsx
    // filter through project and return projects where owner matches user id
    const filteredProjects = projects.filter(project => user._id === project.owner)
    const projectsJsx = filteredProjects.map((project) => (
      <div key='project-cards' className='cards' style='width: 18rem;'>
        <div className='card-body'>
          <h1 className='card-title'>Project Name</h1>
          <p className='card-text'>A short description.</p>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Tools Used</li>
          <li className='list-group-item'>Time Taken</li>
          <li className='list-group-item'>Complete</li>
          <li className='list-group-item'>Who payed</li>
        </ul>
        <h3 className='p-3' key={project._id}>
          <Link to={`/projects/${project._id}`}>{project.name}</Link>
          <p style={{ fontSize: '20px', color: 'Dark' }}>
            {project.projectName}
          </p>
        </h3>
      </div>
    ))

    return (
      <div className='text-center'>

        <Card className='card-grad m-0'style={{
          width: '100%',
          height: '80vh',
          color: 'dark'
        }}>
          <Card.Header className='dark-bg text dark'>
            <div className='d-flex justify-content-end'>
              <p
                className='text-center'
                style={{ margin: 'auto', paddingLeft: '6rem' }}>Your projects:</p>
            </div>
          </Card.Header>
          <Card.Body className='dark-bg d-flex justify-content-start justify-content-md-center flex-wrap'>
            <>
              {projectsJsx}
            </>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default IndexProjects
