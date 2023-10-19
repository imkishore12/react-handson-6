
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import StoreContexts from './Components/StoreCompo';
import Student from './Components/Student';
import AddNewCompo from './Components/AddNewCompo';
import EditCompo from './Components/EditCompo';
import Contact from './Components/Contact';
import { useState } from 'react';
import Home from './Components/Home';





  //   <div className="App">
  //     <StoreCompo>
  //     <BrowserRouter>
  //     <Navbar />
  //     </BrowserRouter>
     
  //     </StoreCompo>

     
      
  //   </div>
  // );


  function App() {

    const [studata, setstudata] = useState([{
      studentName: "saikishore",
      studentAge: 22,
      studentCourse: 'MERN',
      studentBatch: "March",
    },
    {
      studentName: "manasa",
      studentAge: 23,
      studentCourse: 'Fullstack',
      studentBatch: "March",
    },
    {
      studentName: "prasad",
      studentAge: 22,
      studentCourse: 'MERN',
      studentBatch: "June",
    },
    {
      studentName: "teja",
      studentAge: 22,
      studentCourse: 'editor',
      studentBatch: "June",
    },
    {
      studentName: "rahul",
      studentAge: 22,
      studentCourse: 'python Dev',
      studentBatch: "May",
    },
    ]);
  
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
  
          <Route path='/student' element={<StoreContexts.Provider value={{ studata, setstudata }}>
            <Student />
          </StoreContexts.Provider>} />
  
          <Route path='/student-desc' element={<StoreContexts.Provider value={{ studata, setstudata }}>
            <AddNewCompo />
          </StoreContexts.Provider>} />
  
          <Route path='/student-desc/:ID' element={<StoreContexts.Provider value={{ studata, setstudata }}>
            <EditCompo />
          </StoreContexts.Provider>} />
  
  
      
  
          <Route path='/contact' element={<Contact />} />
        </Routes>
        </BrowserRouter>
  
      </div>
    );
  }


export default App;
