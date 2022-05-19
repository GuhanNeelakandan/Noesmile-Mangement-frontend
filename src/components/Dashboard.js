import axios from "axios";
import React, { useEffect, useState } from "react";
function Dashboard() {
    const [dashboard, setDashboard] = useState([])
    const [total,setTotal]=useState([])
    const [statusData,setStatusData]=useState([])
    const [processData,setProcessData]=useState([])
    let getdata = async () => {
        const { data } = await axios.get("https://neosmile-crud.herokuapp.com/getPatients", {
            headers: {
                Authorization: window.localStorage.getItem('myapptoken'),
            },
        });
        let TotalAmount = data.map(item => item.amount).reduce((acc, amount) => amount + acc)
        setDashboard(TotalAmount);
        var TotalPatients = Object.keys(data).length;
        setTotal(TotalPatients)
        let status=0;
        let process=0;
        let completed=data.map((item)=>{
            if(item.status==="completed"){
                status=status+1
            }if(item.status==="inprogress"){
                process=process+1
            }
        })
        setStatusData(status)
        setProcessData(process)
    }

    useEffect(() => {
        getdata();
    }, [])
    return (
        <>
            {/* title */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div class="row">
                <div class="col-xl-3 col-md-6 mb-4">
                    {/* card left colour if condition */}
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    {/* font colour */}
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Amount</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                                        Rs. {dashboard}
                                        {/* progress design in if condition */}
                                    </div>
                                </div>
                                {/* icon design (if condition)*/}
                                <div class="col-auto">
                                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div class="col-xl-3 col-md-6 mb-4">
                    {/* card left colour if condition */}
                    <div className="card border-left-info shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    {/* font colour */}
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Patients</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                                         {total}
                                        {/* progress design in if condition */}
                                    </div>
                                </div>
                                {/* icon design (if condition)*/}
                                <div class="col-auto">
                                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div class="col-xl-3 col-md-6 mb-4">
                    {/* card left colour if condition */}
                    <div className="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    {/* font colour */}
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">treatment Completed</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                                         {statusData}
                                        {/* progress design in if condition */}
                                    </div>
                                </div>
                                {/* icon design (if condition)*/}
                                <div class="col-auto">
                                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div class="col-xl-3 col-md-6 mb-4">
                    {/* card left colour if condition */}
                    <div className="card border-left-danger shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    {/* font colour */}
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">treatment inprogress</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                                         {processData}
                                        {/* progress design in if condition */}
                                    </div>
                                </div>
                                {/* icon design (if condition)*/}
                                <div class="col-auto">
                                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}
export default Dashboard;