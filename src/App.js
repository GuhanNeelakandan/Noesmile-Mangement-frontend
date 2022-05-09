import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Patients from './components/Patients';
import CreatePatients from './components/CreatePatients';
import EditPatients from './components/EditPatients';
import ViewPatients from './components/ViewPatients';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';


function App() {
  const loginHandler = () => {
    alert();
  };
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar login={loginHandler} />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <div class="container-fluid mt-5">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/create-patients" element={<CreatePatients />} />
                <Route path="/edit-patients/:id" element={<EditPatients />} />
                <Route path="/view-patients/:id" element={<ViewPatients />} />
                <Route path="/user" element={<User/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
