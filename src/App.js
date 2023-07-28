import React, { useState } from 'react'
import AddUser from './Component/Users/AddUser'
import UserList from './Component/Users/UserList'
import { HashRouter, Routes, Route } from 'react-router-dom'

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
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            // react fragment, your project set-up needs to support it
            // Another option is use <React.Fragment></React.Fragment>
            <>
              <AddUser onAddUser={addUserHandler} />
              <UserList users={userList} />
            </>
          }
        />
      </Routes>
    </HashRouter>
  )
}

export default App
