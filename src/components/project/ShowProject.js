import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
// API request
import { deleteProject, showProject } from '../../api/projects'
import Button from 'react-bootstrap/Button'

class ShowProject extends Component {
  constructor (props) {
    super(props)

    this.state = {
      project: null
    }
  }

  ComponentDidMount () {
    const { match, user, msgAlert } = this.props
    showProject(match.params.id, user)
      .then(res => this.setState({ project: res.data.project }))
      .then(() => msgAlert({
        heading: 'show project success',
        message: 'check out the project',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Show project failed',
        message: 'something went wrong' + err.message,
        variant: 'danger'
      }))
  }

  handleDelete = (event) => {
    const { match, user, msgAlert, history } = this.props
    deleteProject(match.params.id, user)
    // redirect to projects
      .then(() => history.push('/projects'))
      // .then(() => history.push(match.url))
      .then(() =>
        msgAlert({
          heading: 'Project Deleted Successfully',
          message: 'Your Project no longer exists',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Failed to Delete Your Project',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

  // deleteProject = (projectId) => {
  //   const { user, msgAlert, history, match } = this.props
  //   deleteProject(match.params.id, user, projectId)
  //   // redirect to projects
  //     .then(() => history.push('/projects'))
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
  //         heading: 'Failed to Delete Your Project',
  //         message: 'Something went wrong: ' + err.message,
  //         variant: 'danger'
  //       })
  //     )
  // }

  render () {
    if (this.state.project === null) {
      console.log('this is in show projects')
      return 'Loading...'
    }
    const { id, projectName, shortDescription, toolsUsed, laborTime, done, payer } = this.state.project
    const { match } = this.props

    return (
      <>
        <Card
          key={id}
          className='card-grad m-2'
          style={{
            width: '18rem',
            height: '20rem',
            color: 'grey'
          }}>
          <Card.Header className='dark-bg text dark'>
            <div className='d-flex justify-content-end'>
              <p
                className='text-center'
                style={{ margin: 'auto', paddingLeft: '6rem' }}>Your project:
              </p>
            </div>
          </Card.Header>
          <Card.Body className='dark-bg d-flex justify-content-start justify-content-md-center flex-wrap'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Project {projectName}</li>
              <br></br>
              <li className='list-group-item'>Short Description {shortDescription}</li>
              <br></br>
              <li className='list-group-item'>Tools Used {toolsUsed}</li>
              <br></br>
              <li className='list-group-item'>Labor Time {laborTime}</li>
              <br></br>
              <li className='list-group-item'>Complete {done}</li>
              <li className='list-group-item'>Who payed {payer}</li>
            </ul>
            <Link to={`/projects/${match.params.id}/`}>
              <Button variant='dark' style={{ width: '50%' }}>Update
              </Button>
            </Link>
            <Button
              onClick={() => this.handleDelete}
              variant='dark'
              style={{ width: '50%' }}>Delete
            </Button>

            <Button
              variant='warning'
              onClick={this.state.done}
              style={{ width: '100%', marginTop: '1rem' }}>
              {done ? 'Completed' : 'Uncompleted'}
            </Button>
          </Card.Body>
        </Card>

      </>
    )
  }
}

export default withRouter(ShowProject)
