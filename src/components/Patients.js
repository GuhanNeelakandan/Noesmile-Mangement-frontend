import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert'

function Patients() {
    let params = useParams();
    let navigate = useNavigate();
    let handleLogout = () => {
        window.localStorage.removeItem('myapptoken');
        navigate('/login');
      };

    const [patientsData,setPatients]=useState([])
    
    useEffect(()=>{
         axios.get('https://neosmile-crud.herokuapp.com/getPatients',{
          headers: {
            Authorization: window.localStorage.getItem('myapptoken'),
          },
        }).then((res)=>{
            setPatients(res.data)
        })
    },[])

    const deletePatients = (id) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this Patient Details!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              axios.delete(`https://neosmile-crud.herokuapp.com/deletePatients/${id}`,{
                headers: {
                  Authorization: window.localStorage.getItem('myapptoken'),
                },
              })
                .then(() => {
                  getData();
                })
              swal("Sucessfully deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
      };

      const getData=()=>{
        axios
          .get(`https://neosmile-crud.herokuapp.com/getPatients`,{
            headers: {
              Authorization: window.localStorage.getItem('myapptoken'),
            },
          })
          .then((getData) => {
            setPatients(getData.data);
          });
      };
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Patients Data</h1>
                <Link to={"/create-patients"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    Create New <i class="fa fa-plus" aria-hidden="true"></i></Link>
            </div>
            <div className="logout"><button onClick={handleLogout}  class="btn btn-danger" >Logout</button>  </div>
            
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Patients details</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Serial.No</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Mobile</th>
                                    <th>Doctor name</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Serial.No</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Mobile</th>
                                    <th>Doctor name</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    patientsData.map((user)=>{
                                        return <tr>
                                        <td>{user.serialNo}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.doctorName}</td>
                                        <td>{user.amount}</td>
                                        <td>{user.status}</td>
                                        <td>
                                            <Link to={`/view-patients/${user._id}`} class="mx-2 btn btn-outline-warning btn-sm" data-toggle="tooltip" data-placement="bottom" title="view"><i class="fa fa-eye" aria-hidden="true"></i></Link>
                                            <Link to={`/edit-patients/${user._id}`} class="mx-2 btn btn-outline-primary btn-sm" data-toggle="tooltip" data-placement="bottom" title="edit"><i class="fa as fa-edit"></i></Link>
                                            <button onClick={() => deletePatients(user._id)}class="mx-2 btn btn-outline-danger btn-sm" data-toggle="tooltip" data-placement="bottom" title="delete"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                                    </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Patients