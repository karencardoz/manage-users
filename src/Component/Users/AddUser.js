import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import UserList from './UserList'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUsername.trim() === '' && enteredAge.trim() === '') {
      return
    }
    // force conversion of string to number
    if (+enteredAge < 1) {
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }
  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <div>
      <ErrorModal title="An error occurred" message={'Something wrong'} />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* htmlFor important for screen readers */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="text"
            value={enteredAge}
            id="age"
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
