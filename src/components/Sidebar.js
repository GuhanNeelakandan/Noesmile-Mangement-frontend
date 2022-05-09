import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <Link to={"/login"} class="sidebar-brand d-flex align-items-center justify-content-center">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Neo Smile</div>
            </Link>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider my-0" />
            <li class="nav-item">
                <Link class="nav-link" to={"/login"}>
                <i class="fa fa-sign-in" aria-hidden="true"></i>
                    <span>Login</span></Link>
            </li>

            {/* <!-- Nav Item - Dashboard --> */}
            <li class="nav-item">
                <Link class="nav-link" to={"/dashboard"}>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>





            {/* <!-- Divider --> */}
            <hr class="sidebar-divider" />

            {/* <!-- Nav Item - Charts --> */}
            <li class="nav-item">
                <Link class="nav-link" to={"/patients"}>
                    <i class="fas fa-fw fa-table"></i>
                    <span>Patients</span></Link>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li class="nav-item">
                <Link class="nav-link" to={"/user"}>
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Doctors</span></Link>

            </li>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider d-none d-md-block" />

            {/* <!-- Sidebar Toggler (Sidebar) --> */}

        </ul>
    )
}

export default Sidebar