
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
      project: {
        projectName: '',
        shortDescription: '',
        toolsUsed: '',
        laborTime: '',
        done: 'false',
        payer: ''
      }
    }
  }

  handleChange = (event) => {
    // the event.target of this event will be an input element
    // which will have a `name` attribute (key in the state) & a 'value' (what the user typed)
    const updatedField = { [event.target.name]: event.target.value }
    this.setState((currentState) => {
      return {
        project:
       { ...currentState.project, ...updatedField }
      }
    })
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
              name='projectName'
              defaultValue={this.state.project.projectName}
              placeholder='Project Name'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className='text-dark'>Short Description</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              name='shortDescription'
              defaultValue={this.state.project.shortDescription}
              placeholder='Something short'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className='text-dark'>Tools Used</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              name='toolsUsed'
              defaultValue={this.state.project.toolsUsed}
              placeholder='ex: html,css, javaScript, etc'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className='text-dark'>Labor Time</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              name='laborTime'
              defaultValue={this.state.project.laborTime}
              placeholder='Labor Time in Hours'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className='text-dark'>Complete</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              name='complete'
              defaultValue={this.state.project.done}
              placeholder='true or false'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className='text-dark'>Payer</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              name='payer'
              defaultValue={this.state.project.payer}
              placeholder='who payed you?'
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
