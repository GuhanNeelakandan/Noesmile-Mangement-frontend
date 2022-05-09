import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

function User() {
    const [user,setUser]=useState([])
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://neosmile-crud.herokuapp.com/getUser',{
            headers: {
              Authorization: window.localStorage.getItem('myapptoken'),
            },
          }).then((res)=>{
           setUser(res.data)
       })
   },[])

   const deleteUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Doctor Details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`https://neosmile-crud.herokuapp.com/deleteUser/${id}`,{
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
      .get(`https://neosmile-crud.herokuapp.com/getUser`,{
        headers: {
          Authorization: window.localStorage.getItem('myapptoken'),
        },
      })
      .then((getData) => {
        setUser(getData.data);
      });
  };
  let handleLogout = () => {
    window.localStorage.removeItem('myapptoken');
    navigate('/login');
  };

  return (
   <>
   <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Doctor access</h1>
            </div>
            <div className="logout"><button onClick={handleLogout}  class="btn btn-danger" >Logout</button>  </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Doctor details</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Doctor name</th>
                                    <th>User mail</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((users)=>{
                                        return <tr>
                                            <td>Dr. {users.name}</td>
                                            <td>{users.email}</td>
                                            <td><button onClick={() => deleteUser(users._id)} class="mx-2 btn btn-outline-danger btn-sm" data-toggle="tooltip" data-placement="bottom" title="Delete"><i class="fa as fa-trash"></i></button></td>
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

export default User