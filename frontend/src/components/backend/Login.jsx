import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      console.log(result);

      if (result.status === false || result.status === "false") {
        toast.error(result.message || "Login failed");
      } else {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        toast.success("Login successful!");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <main className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-5">
              <div className="card login-card shadow-sm rounded-4 overflow-hidden">
                <div className="top-bar"></div>
                <div className="card-body p-4">
                  <h3 className="text-center mb-4">Login</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        {...register('email', {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        {...register('password', { required: "Password is required" })}
                      />
                      {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                  </form>
                  <div className="text-center mt-3 small">
                    <p className="mb-1">Don't have an account? <a href="/register">Register</a></p>
                    <p className="mb-1"><a href="/forgot-password">Forgot Password?</a></p>
                    <p><a href="/">Back to Home</a></p>
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

export default Login;
