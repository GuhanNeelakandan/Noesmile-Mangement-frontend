import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ViewPatients() {
    const params= useParams()
    const navigate = useNavigate()
    const [user, setUserData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          let user = await axios.get(`https://neosmile-crud.herokuapp.com/getPatient/${params.id}`,
          {
            headers: {
              Authorization: window.localStorage.getItem('myapptoken'),
            },
          });
          setUserData(user.data);
        }
        fetchData();
      }, []);
      console.log(user.data)
    return (
        <div class="card w-50">
            <div class="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3 class="card-title">Patients Details</h3>
                            <p class="card-text">Serial.NO:{user.serialNo}</p>
                            <p class="card-text">Name:{user.name}</p>
                            <p class="card-text">Age:{user.age} </p>
                            <p class="card-text">Gender:{user.gender}</p>
                            <p class="card-text">Mobile:{user.doctorName}</p>
                            <p class="card-text">Amount:{user.amount}</p>
                            <p class="card-text">Status:{user.status}</p>
                            <div className="col-lg-6 mt-3">
                                <input
                                    type={"submit"}
                                    value="Close"
                                    onClick={() => navigate("/patients", { replace: true })}
                                    className="btn btn-primary"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewPatients