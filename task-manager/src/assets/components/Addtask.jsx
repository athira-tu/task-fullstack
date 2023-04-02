import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import axios from 'axios'


function Addtask() {

    const titleref = useRef()
    const descriptionref = useRef()

    async function handleaddtask() {

        let taskobj = {
            title: titleref.current.value,
            description: descriptionref.current.value


        }
        let res = await axios.post("http://localhost:7000/add-task", taskobj)
        console.log(res.data.data)




    }
    return (
        <div>
            <h1>Add Task</h1>
            <TextField id="standard-basic" label="taskname" variant="standard" inputRef={titleref} /><br />
            <TextField id="standard-basic" label="description" variant="standard" inputRef={descriptionref} /><br />
            <Button variant="contained" className='btn' onClick={handleaddtask}>Submit</Button>



        </div>
    )
}

export default Addtask