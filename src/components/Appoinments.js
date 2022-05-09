import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert'

function Appoinments() {
    let navigate = useNavigate();
    const [appointment,setAppointmnet]=useState([])
    useEffect(()=>{
        axios.get('https://neosmile-crud.herokuapp.com/appointment',{
            headers: {
              Authorization: window.localStorage.getItem('myapptoken'),
            },
          }).then((res)=>{
            setAppointmnet(res.data)
       })
   },[])

   const deleteAppointment = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this appointment Details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`https://neosmile-crud.herokuapp.com/cancelAppointment/${id}`,{
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
      .get(`https://neosmile-crud.herokuapp.com/appointment`,{
        headers: {
          Authorization: window.localStorage.getItem('myapptoken'),
        },
      })
      .then((getData) => {
        setAppointmnet(getData.data);
      });
  };
  let handleLogout = () => {
    window.localStorage.removeItem('myapptoken');
    navigate('/login');
  };
  return (
    <>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                 <h1 class="h3 mb-0 text-gray-800">Appointments</h1>
             </div>
             <div className="logout"><button onClick={handleLogout} class="btn btn-danger" >Logout</button>  </div>
             <div class="card shadow mb-4">
                 <div class="card-header py-3">
                     <h6 class="m-0 font-weight-bold text-primary">Customer details</h6>
                 </div>
                 <div class="card-body">
                     <div class="table-responsive">
                         <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                             <thead>
                                 <tr>
                                     <th>Name</th>
                                     <th>Email</th>
                                     <th>Date</th>
                                     <th>Mobile</th>
                                     <th>Description</th>
                                     <th>Action</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {
                                     appointment.map((detail)=>{
                                         return <tr>
                                             <td>{detail.name}</td>
                                             <td>{detail.email}</td>
                                             <td>{detail.date}</td>
                                             <td>{detail.mobile}</td>
                                             <td>{detail.description}</td>
                                             <td>
                                             <button onClick={() => deleteAppointment(detail._id)}  class="mx-2 btn btn-outline-danger btn-sm" data-toggle="tooltip" data-placement="bottom" title="Delete"><i class="fa as fa-trash"></i></button>
                                             </td>
                                         </tr>
                                     })
                                 }
                             </tbody>
                         </table>
                     </div>
                     
                 </div>
             </div></>
  )
}

export default Appoinments