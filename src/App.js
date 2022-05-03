import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Patients from './components/Patients';
import CreatePatients from './components/CreatePatients';
import EditPatients from './components/EditPatients';
import ViewPatients from './components/ViewPatients';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/create-patients" element={<CreatePatients />} />
                <Route path="/edit-patients/:id" element={<EditPatients />} />
                <Route path="/view-patients/:id" element={<ViewPatients />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
