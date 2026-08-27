import React, { useState } from "react";
import { registerStudentApi } from "../services/studentService";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { MdOutlinePhoneAndroid } from "react-icons/md";

function Register() {
  const navigate = useNavigate();

  const [registerStudent, setRegisterStudent] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
    grade: "",
  });

  const addNewStudent = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, phoneNo, grade } =
      registerStudent;

    if (name && email && password && confirmPassword && phoneNo && grade) {
      if (password !== confirmPassword) {
        toast.warning("Passwords do not match");
        return;
      }

      const response = await registerStudentApi(registerStudent);

      if (response.status === 201) {
        toast.success("User registered successfully");

        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        toast.warning("Registration failed");
      }
    } else {
      toast.warning("Please fill the form completely");
    }
  };

  return (
    <div
      className="min-vh-100 py-5 d-flex align-items-center"
      style={{
        backgroundColor: "#F5F7F2",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            {/* Main Card */}
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              {/* Header */}
              <div
                className="text-white text-center py-4"
                style={{
                  background: "linear-gradient(135deg, #134E4A, #0F766E)",
                }}
              >
                <div
                  className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "28px",
                  }}
                >
                  <FaUserGraduate  className="text-dark"/>
                </div>

                <h2 className="fw-bold mb-1">Tutor Finder</h2>

                <p className="mb-0 opacity-75">Start your learning journey</p>
              </div>

              {/* Form Body */}
              <div className="card-body p-4 p-md-5">
                <div className="mb-4">
                  <h4
                    className="fw-bold"
                    style={{
                      color: "#134E4A",
                    }}
                  >
                    Create your account
                  </h4>

                  <p className="text-muted mb-0">
                    Register as a student and find the perfect tutor for you.
                  </p>
                </div>

                <form onSubmit={addNewStudent}>
                  <div className="row">
                    {/* Full Name */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>

                      <div className="input-group">
                        <span
                          className="input-group-text border-end-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                        >
                          <CgProfile />
                        </span>

                        <input
                          type="text"
                          className="form-control border-start-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                          placeholder="Enter your name"
                          onChange={(e) =>
                            setRegisterStudent({
                              ...registerStudent,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>

                      <div className="input-group">
                        <span
                          className="input-group-text border-end-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                        >
                          <MdEmail />
                        </span>

                        <input
                          type="email"
                          className="form-control border-start-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                          placeholder="Enter your email"
                          onChange={(e) =>
                            setRegisterStudent({
                              ...registerStudent,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Password</label>

                      <div className="input-group">
                        <span
                          className="input-group-text border-end-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                        >
                          <CiLock />
                        </span>

                        <input
                          type="password"
                          className="form-control border-start-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                          placeholder="Create a password"
                          onChange={(e) =>
                            setRegisterStudent({
                              ...registerStudent,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Confirm Password
                      </label>

                      <div className="input-group">
                        <span
                          className="input-group-text border-end-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                        >
                          <CiLock />
                        </span>

                        <input
                          type="password"
                          className="form-control border-start-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                          placeholder="Confirm password"
                          onChange={(e) =>
                            setRegisterStudent({
                              ...registerStudent,
                              confirmPassword: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>

                      <div className="input-group">
                        <span
                          className="input-group-text border-end-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                        >
                          <MdOutlinePhoneAndroid />
                        </span>

                        <input
                          type="text"
                          className="form-control border-start-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                          placeholder="Enter phone number"
                          onChange={(e) =>
                            setRegisterStudent({
                              ...registerStudent,
                              phoneNo: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Grade */}
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        Class / Grade
                      </label>

                      <select
                        className="form-select"
                        style={{
                          backgroundColor: "#F0FDFA",
                        }}
                        onChange={(e) =>
                          setRegisterStudent({
                            ...registerStudent,
                            grade: e.target.value,
                          })
                        }
                      >
                        <option value="">Select your class</option>

                        <option value="8th Grade">8th Grade</option>

                        <option value="9th Grade">9th Grade</option>

                        <option value="10th Grade">10th Grade</option>

                        <option value="11th Grade">11th Grade</option>

                        <option value="12th Grade">12th Grade</option>
                      </select>
                    </div>
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    className="btn w-100 py-2 fw-semibold rounded-3 text-white shadow-sm"
                    style={{
                      backgroundColor: "#0F766E",
                      border: "none",
                    }}
                  >
                    Create Account
                    <span className="ms-2">→</span>
                  </button>
                </form>

                {/* Divider */}
                <div className="d-flex align-items-center my-4">
                  <hr className="flex-grow-1" />

                  <span className="px-3 text-muted small">OR</span>

                  <hr className="flex-grow-1" />
                </div>

                {/* Login */}
                <div className="text-center">
                  <p className="text-muted mb-1">Already have an account?</p>

                  <Link
                    to="/"
                    className="fw-semibold text-decoration-none"
                    style={{
                      color: "#0F766E",
                    }}
                  >
                    Login to your account
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="text-center text-muted small mt-3">
              © 2026 Tutor Finder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
