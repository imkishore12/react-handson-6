import { useNavigate, useParams } from 'react-router-dom'
import StoreContexts from './StoreCompo';
import { useContext, useState } from 'react';

function EditCompo() {

 const  contextData = useContext(StoreContexts);


  let Navigatestu = useNavigate();
  let param = useParams();

  let updatedObj = {
    studentName: contextData.studata[param.ID].studentName,
    studentAge: contextData.studata[param.ID].studentAge,
    studentCourse: contextData.studata[param.ID].studentCourse,
    studentBatch: contextData.studata[param.ID].studentBatch,
  }
  let changeHandler = (e) => {
    updatedObj[e.target.name] = e.target.value;
  }
  // let filterData = (data)=>{
  //   if (Number(data.stuID) === Number(param.ID)) {
  //     return data;

  //   }
  // }
  // let updateHandler = (e) => {
  //   e.preventDefault()
  //  contextData.studata[param.ID] = updatedObj;
  //  NavigateToStudent('/student');
  // }
// var currentData = contextData.stuDetails.filter(filterData)

// let changeHandler = (e)=>{
//     contextData.stuDetails.studentName=this.name;
//     contextData.stuDetails.studentAge=this.Age;
//     contextData.stuDetails.studentCourse=this.course;
//     contextData.stuDetails.studentBatch=this.batch;



    
    
    
  
// }
  let updateHandler = (e) => {
    // changeHandler();
    // NavigateToStudent('/student')
    // console.log(contextData.stuDetails.studentName)

    e.preventDefault()
    contextData.studata[param.ID] = updatedObj;
   Navigatestu('/student');

  }
  return (
    <section>
      <form className='flex'>

        <div className="feilds">
        <label>Name:</label>
          <input type="text" name='studentName' placeholder={contextData.studata[param.ID].studentName} onChange={changeHandler}   />
        </div>

        <div className="feilds">
        <label>Age:</label>
          <input type="number" name='studentAge' placeholder={contextData.studata[param.ID].studentAge} onChange={changeHandler}   />
        </div>

        <div className="feilds">
        <label>Course:</label>
          <input type="text" name='studentCourse' placeholder={contextData.studata[param.ID].studentCourse} onChange={changeHandler}  />
        </div>

        <div className="feilds">
            <label>Batch:</label>
          <input type="text" name='studentBatch' placeholder={contextData.studata[param.ID].studentBatch} onChange={changeHandler}   />
        </div>

        <div className="feilds">
          <button type="button" onClick={(e) => Navigatestu('/student')} >Cancel</button>
          <button className='updateButton commonButton' onClick={updateHandler}>Update</button>
        </div>

      </form>
    </section>
  )
}

export default EditCompo