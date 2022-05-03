import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditPatients() {
    const navigate = useNavigate();
    let params = useParams();
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

    useEffect(() => {
        async function fetchData() {
            try {
                let editdata = await axios.get(`https://neosmile-crud.herokuapp.com/getPatient/${params.id}`)
                setPatients({
                    serialNo: editdata.data.serialNo,
                    name: editdata.data.name,
                    age: editdata.data.age,
                    gender: editdata.data.gender,
                    mobile: editdata.data.mobile,
                    doctorName: editdata.data.doctorName,
                    amount: editdata.data.amount,
                    status: editdata.data.status
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    const handleUpdate = async () => {
        const updateData = await axios.put(`https://neosmile-crud.herokuapp.com/updatePatients/${params.id}`, patients).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        if (updateData) {
            alert("data created !!")
        }
        navigate("/patients", { replace: true });
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
                <button className="btn-btn-primary"  onClick={()=>handleUpdate()}>Update</button>
            </div>
        </div>
    )
}

export default EditPatients