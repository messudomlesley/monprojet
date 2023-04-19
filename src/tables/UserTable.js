import React from 'react'


const UserTable = (props) =>(
    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Nom utilisateurs</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length>0? (
                props.users.map((user) =>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button onClick ={() =>{props.editRow(user)}}
                            className="button muted-button">Edit</button>
                            <button onClick={()=>props.deleteUser(user.id)}
                            className="button muted-button">Delete</button>
                        </td>
                    </tr>
                ))
            ):(
            <tr>
              <td colspan={3}>Pas d'utilisateur</td>
            </tr>
            )}
        </tbody>
    </table>

)

export default UserTable