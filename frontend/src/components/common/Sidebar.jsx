import React from 'react'
import { AuthContext } from '../backend/context/Auth';
import { useContext } from 'react';
const Sidebar = () => {
    const {logout} = useContext(AuthContext);
  return (
    <>
    <div
            className="bg-dark text-white p-4"
            style={{ width: '250px', minHeight: '100vh' }}
          >
            <h4 className="mb-4 fw-bold text-uppercase">Admin Panel</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link text-white d-flex align-items-center gap-2" href="/admin/dashboard">
                  <i className="bi bi-speedometer2"></i> Dashboard
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link text-white d-flex align-items-center gap-2" href="/admin/profile">
                  <i className="bi bi-person-circle"></i> Profile
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link text-white d-flex align-items-center gap-2" href="/admin/settings">
                  <i className="bi bi-gear-fill"></i> Settings
                </a>
              </li>
              <li className="nav-item mt-3">
                  <button onClick={logout} className='btn btn-primary'>
                    <i className="bi bi-box-arrow-right"></i> Logout    
                    </button>
              </li>
            </ul>
          </div>
    </>
  )
}

export default Sidebar