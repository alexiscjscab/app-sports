import React from  'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Match from './components/Match/Match';
import History from './components/History/History';

const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </>
  )
}

export default App
