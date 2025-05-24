import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="bg-light min-vh-100">
        <div className="d-flex">
          {/* Sidebar */}
          <Sidebar/>

          {/* Dashboard Content */}
          <div className="flex-grow-1 p-4">
            <div className="card border-0 shadow rounded-4">
              <div className="card-body">
                <h3 className="text-dark mb-3">Dashboard</h3>
                <p className="text-muted">Welcome to your admin dashboard. Here you can manage your content, settings, and profile.</p>

                {/* Example Stats Cards */}
                <div className="row mt-4">
                  <div className="col-md-4">
                    <div className="card bg-success text-white shadow-sm mb-3 rounded-3">
                      <div className="card-body">
                        <h5 className="card-title">Total Users</h5>
                        <p className="card-text fs-4">120</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card bg-warning text-dark shadow-sm mb-3 rounded-3">
                      <div className="card-body">
                        <h5 className="card-title">Pending Tasks</h5>
                        <p className="card-text fs-4">8</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card bg-info text-white shadow-sm mb-3 rounded-3">
                      <div className="card-body">
                        <h5 className="card-title">Notifications</h5>
                        <p className="card-text fs-4">3</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
