
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createProject } from '../../api/projects'

class CreateProject extends Component {
  constructor (props) {
    super(props)
    this.state = {
    // project: {
      projectName: '',
      shortDescription: '',
      toolsUsed: '',
      laborTime: '',
      done: false,
      payer: '',
      owner: ''
      // }
    }
  }

  handleChange = (event) => {
    // the event.target of this event will be an input element
    // which will have a `name` attribute (key in the state) & a 'value' (what the user typed)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user, msgAlert, history } = this.props

    createProject(this.state, user)
      .then((res) => history.push('/projects/')) // + res.data.project._id
      .then(() =>
        msgAlert({
          heading: 'Project created Successfully',
          message: 'nice work go check out your Project',
          variant: 'success'
        })
      )
      .catch((err) => {
        msgAlert({
          heading: 'Project creation failed',
          message: 'something went wrong ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <>
        <Form onSubmit={this.handleSubmit} className='text-center'>
          <h3 className='text-dark'>Create New Project Log</h3>
          <Form.Group controlId='projectName'>
            <Form.Label className='text-dark'>Project name</Form.Label>
            <Form.Control
              required
              // name='name'
              // value={list.name}
              // placeholder='List Name'
              onChange={this.handleChange}
              name='Project Name'
              defaultValue={this.state.projectName}
              placeholder='Project Name'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className='text-dark'>Short Description</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              name='Short Description'
              defaultValue={this.state.shortDescription}
              placeholder=''
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className='text-dark'>Tools Used</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              name='Tools Used'
              defaultValue={this.state.toolsUsed}
              placeholder=''
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className='text-dark'>Labor Time</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              name='Labor Time'
              defaultValue={this.state.laborTime}
              placeholder='Labor Time in Hours'
            />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label className='text-dark'>Complete</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              name='Complete'
              defaultValue={this.state.done}
              placeholder='true or false'
            />
          </Form.Group> */}

          <Form.Group>
            <Form.Label className='text-dark'>Payer</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              name='Payer'
              defaultValue={this.state.payer}
              placeholder=''
            />
          </Form.Group>
          <Button
            type='submit'
            variant='outline-dark'
            className='grad my-3'
            style={{ width: '100%' }}>Submit</Button>
        </Form>
      </>
    )
  }
}

export default withRouter(CreateProject)
