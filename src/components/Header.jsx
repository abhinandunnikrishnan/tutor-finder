import React from 'react'
import { Link } from "react-router-dom"
import { GiTeacher } from "react-icons/gi"

function Header() {
    return (

        <nav
            className="navbar navbar-expand-md sticky-top shadow-sm"
            style={{
                backgroundColor: "#134E4A"
            }}
        >

            <div className="container-fluid px-4">


                {/* Logo */}
                <Link
                    to="/home"
                    className="navbar-brand text-white fw-bold fs-4 d-flex align-items-center"
                >

                    <GiTeacher
                        className="me-2"
                        size={32}
                    />

                    Tutor Finder

                </Link>


                {/* Mobile button */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navLinks"
                    aria-controls="navLinks"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{
                        backgroundColor: "#0F766E"
                    }}
                >

                    <span className="navbar-toggler-icon"></span>

                </button>


                {/* Navigation */}
                <div
                    id="navLinks"
                    className="collapse navbar-collapse"
                >

                    <div className="navbar-nav ms-auto text-center">

                        <Link
                            to="/tutors"
                            className="nav-link text-white px-3 fw-semibold"
                        >
                            Tutors
                        </Link>

                        <Link
                            to="/favorites"
                            className="nav-link text-white px-3 fw-semibold"
                        >
                            Favorites
                        </Link>

                        <Link
                            to="/my-bookings"
                            className="nav-link text-white px-3 fw-semibold"
                        >
                            My Bookings
                        </Link>

                        <Link
                            to="/profile"
                            className="nav-link text-white px-3 fw-semibold"
                        >
                            Profile
                        </Link>

                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Header