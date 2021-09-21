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
      project: {
        projectName: '',
        shortDescription: '',
        toolsUsed: '',
        laborTime: '',
        done: false,
        payer: ''
      }
    }
  }

  componentDidMount () {
    // console.log('test')
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
    console.log('adam')
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

  render () {
    // if (this.state.project === null) {
    //   console.log('this is in show projects')
    //   return 'Loading...'
    // }
    const { projectName, shortDescription, toolsUsed, laborTime, done, payer, owner } = this.state.project
    const { match, user } = this.props
    // console.log(user._id, owner)
    const updateButton = user._id === owner
      ? (
        <>
          <Link to={`/projects/${match.params.id}/update`}>
            <Button variant='warning' style={{ width: '100%', display: 'grid', textDecoration: 'none' }}>-Update-
            </Button>
          </Link>
          <Button
            onClick={this.handleDelete}
            variant='dark'
            style={{ width: '100%', display: 'grid', paddingTop: '15px' }}>-Delete-
          </Button>
        </>
      )
      : null
    return (
      <>
        <Card
          className='card-grad m-2'
          style={{
            width: 'auto',
            height: 'auto',
            color: 'grey'
          }}>
          {updateButton}
          <Card.Header className='dark-bg text dark'>
            <div className='d-flex justify-content-end'>
              <p
                className='text-center'
                style={{ margin: 'auto' }}>
                {`${user.email}'s project:`}
              </p>
            </div>
          </Card.Header>
          <Card.Body className='dark-bg d-flex justify-content-start justify-content-md-center flex-wrap'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Project: {projectName}</li>
              <br></br>
              <li className='list-group-item'>Short Description: {shortDescription}
              </li>
              <br></br>
              <li className='list-group-item'>Tools Used: {toolsUsed}</li>
              <br></br>
              <li className='list-group-item'>Labor Time: {laborTime}</li>
              <br></br>
              <li className='list-group-item'>Complete: {done}</li>
              <li className='list-group-item'>Who payed: {payer}</li>
            </ul>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default withRouter(ShowProject)
