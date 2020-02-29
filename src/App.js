import React, { useState } from 'react'
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import 'antd/dist/antd.css';

const App = () => {
	// default user list
	const usersData = [
		{ id: 1, name: 'Karan', username:'imkaran@gmail.com' },
		{ id: 2, name: 'Deep', 	username: 'deep@yhoo.com' },
		{ id: 3, name: 'Kumar', username: 'mymail@ymail.com' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// updating state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// add,delete,update operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
			<div>
				<header style={{textAlign:"center",backgroundColor:"#a3a375",borderRadius:"5px"}}>
					<h2 style={{color:"white",fontFamily:"cursive",fontSize:"50px"}}>Todo App</h2>
				</header>
				<div>
					{editing ? (
						<div>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</div>
					) : (
						<div>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
							  Create User
							</button>
							<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							  <div class="modal-dialog" role="document">
							    <div class="modal-content">
							      <div class="modal-header">
							        <h5 class="modal-title" id="exampleModalLabel">Add New User</h5>
							      </div>
							      <div class="modal-body">
							      	<AddUserForm addUser={addUser} />
							      </div>
							      <div class="modal-footer">
							        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							      </div>
							    </div>
							  </div>
							</div>
						</div>
					)}
				</div>
				<div style={{display:"flex"}}>
					<h3 style={{marginTop:"51px",marginLeft:"30px",fontFamily:"Ariel",fontWeight:"bold"}}>Users</h3>
					<h3 style={{paddingLeft:"490px",fontFamily:"Ariel",fontWeight:"bold"}}>Todo</h3>
				</div><hr/>
				<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
			</div>
		)
	}

export default App
