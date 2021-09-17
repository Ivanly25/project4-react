import React, { Component } from 'react'
import { indexProject } from '../../api/projects'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
// import logo from '../pictures/NavBarLogo.png'
import Card from 'react-bootstrap/Card'

class IndexProject extends Component {
  constructor (props) {
    super(props)

    this.state = {
      project: [],
      loading: false
    }
  }

  // - lifecycle method (right away when this component renders, make a request for all the list & put em in state)
  componentDidMount = () => {
    const { user } = this.props
    indexProject(user)
      .then((res) => {
        this.setState({
          project: res.data.project
        })
      })
      .catch(console.error)
  }

  // render
  render () {
    const { project } = this.state
    const { user } = this.props

    // let projectJsx
    // filter through project and return projects where owner matches user id
    const filteredProject = project.filter((project) => user._id === project.owner)
    const projectJsx = filteredProject.map((project) => (
      <h3 className='p-3' key={project._id}>
        <Link to={`/projects/${project._id}`}>{project.name}</Link>
        <p style={{ fontSize: '15px', color: 'DarkGray' }}>
        </p>
      </h3>
    ))

    return (
      <div className='text-center'>
        {/* <Link className='link-warning' variant='outline-dark' to={'/create-list'}>
        <Button className='grad' variant='outline-dark' style={{ margin: '20px 0' }}>Create List</Button>
        {listJsx}
    </Link> */}

        <Card className='card-grad m-0'style={{
          width: '100%',
          height: '80vh',
          color: 'white'
        }}>
          <Card.Header className='dark-bg text white'>
            <div className='d-flex justify-content-end'>
              <p
                className='text-center'
                style={{ margin: 'auto', paddingLeft: '6rem' }}>Lists:</p>
              <Link
                className='link-warning'
                variant='outline-dark'
                to={'/create-project'}>
                <Button className='grad' variant='outline-dark'>Create List</Button>
              </Link>
            </div>
          </Card.Header>
          <Card.Body className='dark-bg d-flex justify-content-start justify-content-md-center flex-wrap'>
            {projectJsx}
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default IndexProject
