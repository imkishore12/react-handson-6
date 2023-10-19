import { useContext } from 'react'
import { Link } from 'react-router-dom'
import StoreContexts from './StoreCompo'
import React from 'react';
function Student(props) {
  const contextData = useContext(StoreContexts);
  let handleDel = (itemIndex) => {
    delete contextData.studata[itemIndex];
    contextData.studata = [...contextData.studata];
    contextData.setstudata(contextData.studata);
  }
  return (
       <>
       <div className="flex">
        <h1>Student Details</h1>
        <Link to="/student-desc" className='addNew'>Add New Student</Link>
      </div>
      <hr></hr>
      <table id="customers">
        <thead>
            
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
            
          </tr>
          
          
          
        </thead>
        
        <tbody>
          {
              contextData.studata.map((details,index) => {
                return <>
                <tr key={index} >
                  {details ? <td>{details.studentName}</td> : null}
                  {details ? <td>{details.studentAge}</td>: null}
                  {details ? <td>{details.studentCourse}</td>: null}
                  {details ? <td>{details.studentBatch}</td>: null}
                  {details ? <td><Link to={`/student-desc/${index}`}  className='editDetailsBtn'>Edit</Link></td>: null}
                  {details ? <td><i className="fa-solid fa-trash DeleteButton" onClick={() => handleDel(index)}></i></td> : null}
                </tr>
                
                </>
                
              })
            }
        </tbody>
      </table>
      </>
    
   
  )
}



export default Student;