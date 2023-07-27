import React, { useState } from 'react'
import AddUser from './Component/Users/AddUser'
import UserList from './Component/Users/UserList'

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  )
}

export default App
