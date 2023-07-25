import React from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault()
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* htmlFor important for screen readers */}
        <label htmlFor="username">Username</label>
        <input type="text" id="username"></input>
        <label htmlFor="age">Age (Years)</label>
        <input type="text" id="age"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
