import React, { useState, useEffect } from 'react'
import RactDOM from 'react-dom'
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const AddUserForm = props => {

	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)
	const [loading, setLoading] = useState(false)


	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	 function btnLoading(){
			setLoading(true)
			setTimeout(()=>{  setLoading(false); return  handleSubmit()},2000)

	}	

	 function handleSubmit(){
			
			if  (!user.name || !user.username) return  
					  props.addUser(user)
					  setUser(initialFormState)
			}

	return (
		<form>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Email</label>
			<input type="email" name="username" value={user.username} onChange={handleInputChange} />
			<Button type="primary" loading={loading} onClick={btnLoading}>Add</Button>
		</form>
	)
}

export default AddUserForm;
