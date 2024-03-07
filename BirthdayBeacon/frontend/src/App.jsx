import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateBirthday from './pages/CreateBirthday';
import ShowProfile from './pages/ShowProfile';
import EditProfile from './pages/EditProfile';
import DeleteBirthday from './pages/DeleteBirthday';



const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/birthdays/create' element={<CreateBirthday />} />
      <Route path='/birthdays/details/:id' element={<ShowProfile />} />
      <Route path='/birthdays/edit/:id' element={<EditProfile />} />
      <Route path='/birthdays/delete/:id' element={<DeleteBirthday />} />
    </Routes>
  )
}

export default App;