import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { allStudentApi } from '../services/studentService'
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
function Login() {

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const loginUser = async (e) => {
        e.preventDefault()

        const { email, password } = loginData

        if (!email || !password) {
            toast.warning("Please enter email and password")
            return
        }

        const response = await allStudentApi()

        if (response.status === 200) {

            const students = response.data

            const user = students.find(
                student =>
                    student.email === email &&
                    student.password === password
            )

            if (user) {

                console.log("Logged in user:", user)

                localStorage.setItem("studentId", user.id)

                toast.success("Login successful")

                setTimeout(() => {
                    navigate('/home')
                }, 2500)

            } else {
                toast.error("Invalid email or password")
            }
        }
    }

    return (

        <div
            className="min-vh-100 d-flex align-items-center justify-content-center py-5"
            style={{
                background: "#F5F7F2"
            }}
        >

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">

                        <div className="card border-0 shadow-lg rounded-4">

                            <div className="card-body p-4 p-md-5">


                                {/* Logo */}
                                <div className="text-center mb-4">

                                    <div
                                        className=" text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            fontSize: "30px",
                                            backgroundColor: "#0F766E"
                                        }}
                                    >
                                        <FaUserGraduate />
                                    </div>

                                    <h2 className="fw-bold mb-1"
                                    style={{ color: "#134E4A" }}>
                                        Tutor Finder
                                    </h2>

                                    <p className="text-muted mb-0">
                                        Welcome back!
                                    </p>

                                </div>


                                {/* Heading */}
                                <div className="mb-4">

                                    <h4 className="fw-semibold">
                                        Login to your account
                                    </h4>

                                    <p className="text-muted small">
                                        Find and book your perfect tutor
                                    </p>

                                </div>


                                <form onSubmit={loginUser}>


                                    {/* Email */}
                                    <div className="mb-3">

                                        <label className="form-label fw-semibold">
                                            Email Address
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text border-end-0" 
                                            style={{
                                                backgroundColor: "#F0FDFA"
                                             }}>
                                                <MdEmail />
                                            </span>

                                            <input
                                                type="email"
                                                className="form-control bg-light border-start-0"
                                                placeholder="Enter your email"
                                                value={loginData.email}
                                                onChange={(e) =>
                                                    setLoginData({
                                                        ...loginData,
                                                        email: e.target.value
                                                    })
                                                }
                                            />

                                        </div>

                                    </div>


                                    {/* Password */}
                                    <div className="mb-4">

                                        <label className="form-label fw-semibold">
                                            Password
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text border-end-0"
                                            style={{
                                                backgroundColor: "#F0FDFA"
                                            }}>
                                                <CiLock />
                                            </span>

                                            <input
                                                type="password"
                                                className="form-control bg-light border-start-0"
                                                placeholder="Enter your password"
                                                value={loginData.password}
                                                onChange={(e) =>
                                                    setLoginData({
                                                        ...loginData,
                                                        password: e.target.value
                                                    })
                                                }
                                            />

                                        </div>

                                    </div>


                                    {/* Login Button */}
                                    <button
                                        type="submit"
                                        className="btn  w-100 py-2 fw-semibold rounded-3 shadow-sm"
                                        style={{
                                            backgroundColor: "#0F766E",
                                            border: "none"
                                        }}
                                    >
                                        Login
                                        <span className="ms-2">
                                            →
                                        </span>
                                    </button>


                                </form>


                                {/* Divider */}
                                <div className="d-flex align-items-center my-4">

                                    <hr className="flex-grow-1" />

                                    <span className="px-3 text-muted small">
                                        OR
                                    </span>

                                    <hr className="flex-grow-1" />

                                </div>


                                {/* Register */}
                                <div className="text-center">

                                    <p className="text-muted mb-1">
                                        New student?
                                    </p>

                                    <Link
                                        to="/register"
                                        className=" fw-semibold text-decoration-none"
                                        style={{ color: "#0F766E" }}
                                    >
                                        Create an account
                                    </Link>

                                </div>

                            </div>

                        </div>


                        {/* Bottom text */}
                        <p className="text-center text-muted small mt-3">
                            © 2026 Tutor Finder
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login