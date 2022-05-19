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
                            <p class="card-text">Serial.NO:<strong>{user.serialNo}</strong></p>
                            <p class="card-text">Date:<strong>{user.date}</strong></p>
                            <p class="card-text">Name:<strong>{user.name}</strong></p>
                            <p class="card-text">Age:<strong>{user.age} </strong></p>
                            <p class="card-text">Gender:<strong>{user.gender}</strong></p>
                            <p class="card-text">Mobile:<strong>{user.doctorName}</strong></p>
                            <p class="card-text">Amount:<strong>{user.amount}</strong></p>
                            <p class="card-text">Status:<strong>{user.status}</strong></p>
                            <p class="card-text">Description:<strong>{user.description}</strong></p>
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