import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const Dashboard = () => {
  return (
    <>
    <Header/>
    <main className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-5">
            <div className="card login-card shadow-sm rounded-4 overflow-hidden">
              <div className="top-bar"></div>
              <div className="card-body p-4">
                <h3 className="text-center mb-4">Dashboard</h3>
                <p>Welcome to the dashboard!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Dashboard