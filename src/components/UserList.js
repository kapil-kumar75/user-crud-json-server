import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UserList = () => {

    const [users,setUsers] = useState([])

    const [deleteData,setDeleteData] = useState(null)

    const deleteUser = async (id)=>{
        const result = await axios.delete(`http://localhost:8080/users/${id}`)
        if(result){
            setDeleteData(result)
        }
    }

    useEffect(()=>{
        const getData = async()=>{
            const {data} = await axios.get('http://localhost:8080/users')
            setUsers(data)
        }
        getData()
    },[deleteData])

  return (
    <div className='container mt-5'>
        <Link to='/create-user' type='btn'  className='btn btn-primary mb-4'>Add</Link>
<table class="table table-bordered"> 
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Sex</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
        {
            users && users.map((user,i)=>(
                <tr key={i}>
                <th scope="row">{user?.id}</th>
                <td>{user?.name}</td>
                <td>{user?.age}</td>
                <td>{user?.sex}</td>
                <td>
                    <Link to={`/update-user/${user?.id}`} className='btn btn-primary p-2' >Edit</Link>
                    <button onClick={()=>deleteUser(user?.id)} className='btn btn-danger p-2' style={{marginLeft:'5px'}} >Delete</button>
                </td>
                </tr>
            ))
        }
  </tbody>
</table>
    </div>
  )
}

export default UserList