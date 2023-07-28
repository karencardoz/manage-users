import React, { useState } from 'react'
import AddUser from './Component/Users/AddUser'
import UserList from './Component/Users/UserList'

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]
    })
  }
  return (
    // react fragment, your project set-up needs to support it
    // Another option is use <React.Fragment></React.Fragment>
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  )
}

export default App
