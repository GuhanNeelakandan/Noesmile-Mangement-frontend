import axios from 'axios'
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function CreatePatients() {
    const navigate = useNavigate();
    let formik = useFormik({
        initialValues: {
            serialNo: 0,
            name: "",
            age: 0,
            gender: "",
            mobile: 0,
            doctorName: "",
            amount: 0,
            status: ""
        },
        validate: (values) => {
            const errors = {}
            if (!values.serialNo) {
                errors.serialNo = "Requried";
            }
            if (!values.name) {
                errors.name = "Requried";
            } else if (values.name.length > 15) {
                errors.name = "must be 15 characters or less"
            }if (!values.age) {
                errors.age = "Requried";
            }else if(values.age >=100){
                errors.age = "check the age properly"
            }
            if (!values.gender) {
                errors.gender = "male/female/transgender";
            }
            if (!values.mobile) {
                errors.mobile = "Required";
            } else if (values.mobile.length < 10) {
                errors.mobile = "must be 10 number"
            }if (!values.doctorName) {
                errors.doctorName = "Requried";
            }if (!values.amount) {
                errors.amount = "Requried";
            }
            if (!values.status) {
                errors.status = "completed/onprocess";
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                await axios.post('https://neosmile-crud.herokuapp.com/createPatients', values,{
                    headers: {
                        Authorization: window.localStorage.getItem('myapptoken'),
                    },
                });
                navigate('/patients');
                alert("Successfully created")
            } catch (error) {
                console.log(error);
                alert('Something went wrong');
            }
        },
    });
    return (
        <div className="container mx-auto mt-5">
            <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Serial.NO<span style={{ color: "red" }}>*{formik.errors.serialNo}</span></label>
                    <input type="number" className="form-control" name="serialNo" value={formik.values.serialNo} onChange={formik.handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Name<span style={{ color: "red" }}>*{formik.errors.name}</span></label>
                    <input type="text" className="form-control" name="name" value={formik.values.name} onChange={formik.handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Age<span style={{ color: "red" }}>*{formik.errors.age}</span></label>
                    <input type="number" className="form-control" name="age" value={formik.values.age} onChange={formik.handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Gender<span style={{ color: "red" }}>*{formik.errors.gender}</span></label>
                    <input type="text" className="form-control" name="gender" value={formik.values.gender} onChange={formik.handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Mobile<span style={{ color: "red" }}>*{formik.errors.mobile}</span></label>
                    <input type="phone" className="form-control" name="mobile" value={formik.values.mobile} onChange={formik.handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Doctor Name<span style={{ color: "red" }}>*{formik.errors.doctorName}</span></label>
                    <input type="text" className="form-control" name="doctorName" value={formik.values.doctorName} onChange={formik.handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Amount<span style={{ color: "red" }}>*{formik.errors.amount}</span></label>
                    <input type="number" className="form-control" name="amount" value={formik.values.amount} onChange={formik.handleChange} />
                </div>
                <div className="form-group col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
                    <label>Status<span style={{ color: "red" }}>*{formik.errors.status}</span></label>
                    <input type="text" className="form-control" name="status" value={formik.values.status} onChange={formik.handleChange} />
                </div>
                <div className="col-2 mt-2">
                    <input
                        type={'submit'}
                        className="btn btn-primary"
                        value={'Create'}
                        disabled={Object.keys(formik.errors).length !== 0}
                    />
                </div>
            </div>
            </form>
            
        </div>

    )
}

export default CreatePatients