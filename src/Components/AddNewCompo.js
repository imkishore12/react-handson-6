import React, { useContext } from 'react';


import { useNavigate } from 'react-router-dom'
import StoreContexts from './StoreCompo';

function AddNewCompo() {

    let Navigatestu = useNavigate();

    const contextData=useContext(StoreContexts);
    let newObj = {
        studentName: "",
        studentAge: "",
        studentCourse: "",
        studentBatch: "",
    }
    const handleChange = (e) => {
        newObj[e.target.name] = e.target.value;
    }
    const submitHandler = (e) => {
        e.preventDefault();
        contextData.studata.push(newObj);
        Navigatestu('/student');
    }
   
    return (
        <section>
            <form className='flex'>

                <div className="feilds">
                    <label>Name:</label>
                    <input type="text" name='studentName'  placeholder='Enter Name' onChange={handleChange} />
                    <label>Age:</label>
                    <input type="number" name='studentAge' placeholder='Enter Age' onChange={handleChange} />
                </div>

                
                <div className="feilds">
                    <label>Course:</label>
                    <input type="text" name='studentCourse'  placeholder="Enter the  Course" onChange={handleChange}/>
                    <label>Batch:</label>
                    <input type="text" name='studentBatch'  placeholder="Enter the Batch" onChange={handleChange}/>
                </div>

                

                <div className="feilds">
                    <button onClick={() => Navigatestu('/student')} type='button'>Cancel</button>
                    <button onClick={submitHandler} >Submit</button>
                </div>

            </form>

        </section>
    )
}

export default AddNewCompo