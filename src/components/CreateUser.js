import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {
    const navigate = useNavigate()
    const [name,setName]= useState("")
    const [age,setAge]= useState("")
    const [sex,setSex]= useState("")

    const handleSubmit =async(e)=>{
        e.preventDefault()
        if(age<18 || age > 110){
            alert("Age should be between 18 t0 110")
            return
        }
        try {
            const result = await axios.post(`http://localhost:8080/users`,{name,age,sex})
                if(result){
                    navigate('/')
                } 
        } catch (error) {
            console.log(error)
        }       
    }

  return (
    <div>
        <div className='container col-md-4 border mt-4 shadow p-3 mb-5 bg-white rounder '>
            <h4 className='text-center' >Create User</h4>
            <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label className='form-label'>Name</label>
                        <input className='form-control text-capitalize ' name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
                    </div>
                    <div className='mb-2'>
                        <label className='form-label'>Age</label>
                        <input className='form-control text-capitalize ' name='age' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter your age' />
                    </div>
                    <div className='mb-2'>
                        <label className='form-label' >Gender</label>
                    <select className='form-control mb-4' name="sex" onChange={(e)=>setSex(e.target.value)}>
                    <option value="" >Select your sex</option>
                        <option value="male" >Male</option>
                        <option value="female" >Female</option>
                    </select>
                    </div>
                    <button className='btn btn-primary' type='submit'>
                            Submit
                    </button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser