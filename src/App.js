import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList/>} />
        <Route path='/create-user' element={<CreateUser/>} />
        <Route path='/update-user/:id' element={<UpdateUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
