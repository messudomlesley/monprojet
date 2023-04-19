import React from 'react'
import UserTable from './tables/UserTable'
import { useState } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'


const App=()=>{
  const usersData=[
    {id:1,name:'Marius',username:'theNothing'},
    {id:2,name:'Niemet',username:'brokeDev'},
  ]
  const[users,setUsers]=useState(usersData)

  const addUser=(user) =>{
    user.id=users.length + 1
    setUsers([...users, user])
  }

  const deleteUser=(id)=>{
    setUsers(users.filter((user)=>user.id !== id))
  }

  const [editing, setEditing]=useState(false)

const initialFormState={id:null, name:'',username:''}

const[currentUser, setCurrentUser]=useState(initialFormState)

const editRow=(user)=>{
    setEditing(true)

    setCurrentUser({id:user.id, name:user.name, username:user.username})
}

const updateUser=(id,updateUser)=>{
  setEditing(false)

  setUsers(users.map((user)=>(user.id === id ? updateUser:user)))
}
  

  return(
    <div className="container">
      <h1>CRUD Application avec les Hooks</h1>
      <div className="flex-rox">
 {editing ? (
      <div className="flex-large">
          <h2>Modifier utilisateur</h2>
          <EditUserForm 
          setEditing={setEditing}
          currentUser={currentUser}
          updateUser={updateUser}
          />
        </div>

 ):(
        <div className="flex-large">
          <h2>Nouvel utilisateur</h2>
          <AddUserForm addUser={addUser}/>
        </div>

 )}
        <div className="flex-large">
          <h2>liste des utilisateurs</h2>
         {<UserTable  users={users} editRow={editRow} deleteUser={deleteUser}/>}
        </div>
      </div>
    </div>
  )

}

export default App;

