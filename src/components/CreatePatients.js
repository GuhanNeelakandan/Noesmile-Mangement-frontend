import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreatePatients() {
    const navigate = useNavigate();
    const [patients, setPatients] = useState({
        serialNo: 0,
        name: "",
        age: 0,
        gender: "",
        mobile: 0,
        doctorName: "",
        amount: 0,
        status: ""
    })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setPatients((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleCreate = async () => {
        const createData = await axios.post('https://neosmile-crud.herokuapp.com/createPatients', patients,{
            headers: {
              Authorization: window.localStorage.getItem('myapptoken'),
            },
          }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        if (createData) {
            alert("data created !!")
        }
        navigate("/patients", { replace: true });
        console.log(patients)
    }
    return (
        <div className="container mx-auto mt-5">
            <div className="row">
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Serial.NO</label>
                    <input type="number" className="form-control" name="serialNo" value={patients.serialNo} onChange={handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={patients.name} onChange={handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Age</label>
                    <input type="number" className="form-control" name="age" value={patients.age} onChange={handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Gender</label>
                    <input type="text" className="form-control" name="gender" value={patients.gender} onChange={handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Mobile</label>
                    <input type="phone" className="form-control" name="mobile" value={patients.mobile} onChange={handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Doctor Name</label>
                    <input type="text" className="form-control" name="doctorName" value={patients.doctorName} onChange={handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Amount</label>
                    <input type="number" className="form-control" name="amount" value={patients.amount} onChange={handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Status</label>
                    <input type="text" className="form-control" name="status" value={patients.status} onChange={handleChange} />
                </div>
                <div className="col-2 mt-2">
            <input
              type={'submit'}
              className="btn btn-primary"
              value={'Create'}
              onClick={()=>handleCreate()}
            />
          </div>
            </div>
        </div>

    )
}

export default CreatePatients