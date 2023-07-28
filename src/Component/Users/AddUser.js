import React, { useState, useRef } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age.',
      })
      return
    }
    // force conversion of string to number
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Age entered should be greater than 0',
      })
      return
    }
    props.onAddUser(enteredName, enteredUserAge)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* htmlFor important for screen readers */}
          <label htmlFor="username">Username</label>
          {/* Uncontrolled components as we're using useRef, because their value is not controlled by React */}
          {/* if we use State to manage the value of these input fields then it's a controlled component */}
          <input type="text" id="username" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input type="text" id="age" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser
