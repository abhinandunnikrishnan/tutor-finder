import React from 'react'
import { Link } from 'react-router-dom'
import { GiTeacher } from 'react-icons/gi'

function Footer() {
    return (

        <footer
            className="text-white pt-5 pb-3"
            style={{
                backgroundColor: "#134E4A"
            }}
        >

            <div className="container">

                <div className="row g-4">


                    {/* Brand */}
                    <div className="col-md-5">

                        <h4 className="fw-bold">

                            <GiTeacher
                                className="me-2"
                                size={28}
                            />

                            Tutor Finder

                        </h4>

                        <p
                            className="mt-3 mb-0"
                            style={{
                                color: "#CCFBF1"
                            }}
                        >
                            Find the right tutor and make your
                            learning journey easier, smarter and better.
                        </p>

                    </div>


                    {/* Quick Links */}
                    <div className="col-md-3">

                        <h6 className="fw-bold mb-3">
                            Quick Links
                        </h6>

                        <div className="d-flex flex-column gap-2">

                            <Link
                                to="/"
                                className="text-decoration-none"
                                style={{
                                    color: "#CCFBF1"
                                }}
                            >
                                Home
                            </Link>

                            <Link
                                to="/tutors"
                                className="text-decoration-none"
                                style={{
                                    color: "#CCFBF1"
                                }}
                            >
                                Tutors
                            </Link>

                            <Link
                                to="/favorites"
                                className="text-decoration-none"
                                style={{
                                    color: "#CCFBF1"
                                }}
                            >
                                Favorites
                            </Link>

                            <Link
                                to="/my-bookings"
                                className="text-decoration-none"
                                style={{
                                    color: "#CCFBF1"
                                }}
                            >
                                My Bookings
                            </Link>

                        </div>

                    </div>


                    {/* Account */}
                    <div className="col-md-4">

                        <h6 className="fw-bold mb-3">
                            Account
                        </h6>

                        <Link
                            to="/profile"
                            className="text-decoration-none"
                            style={{
                                color: "#CCFBF1"
                            }}
                        >
                            My Profile
                        </Link>

                        <p
                            className="mt-3 small"
                            style={{
                                color: "#99F6E4"
                            }}
                        >
                            Learn from the best tutors,
                            anytime and anywhere.
                        </p>

                    </div>

                </div>


                <hr
                    className="my-4"
                    style={{
                        borderColor: "rgba(255,255,255,0.2)"
                    }}
                />


                <div className="text-center">

                    <p className="mb-0 small">
                        © 2026 Tutor Finder. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer