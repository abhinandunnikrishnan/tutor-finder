import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addBookingApi } from '../services/bookingService'
import { toast } from 'react-toastify'

function BookingForm() {
    const navigate=useNavigate()
    const[tutorDetails,setTutorDetails]=useState({
        name:"",subject:"",grade:"",date:"",time:"",requirements:""
    })

    const handleCancelBooking=()=>[
        setTutorDetails({
        name:"",subject:"",grade:"",date:"",time:"",requirements:""
    })
    ]

    const handleAddBooking=async(e)=>{
        e.preventDefault()
        const {name,subject,grade,date,time,requirements}=tutorDetails
        if(name&&subject&&grade&&date&&time&&requirements){
            const response=await addBookingApi(tutorDetails)
            if(response.status==201){
                toast.success("tutor booked")
                setTimeout(()=>{
                    navigate('/my-bookings')
                },2500)
            }
        }else{
            toast.info("please fill the form completely")
        }
    }

  return (

    <div
      className="min-vh-100 py-5"
      style={{
        backgroundColor: "#F5F7F2"
      }}
    >

      <div className="container">

        {/* Page Heading */}

        <div className="text-center mb-4">

          <span
            className="fw-semibold"
            style={{
              color: "#0F766E"
            }}
          >
            TUTOR FINDER
          </span>

          <h1
            className="fw-bold mt-2 mb-2"
            style={{
              color: "#134E4A"
            }}
          >
            Book a Tutor
          </h1>

          <p className="text-muted">
            Schedule a learning session with your preferred tutor
          </p>

        </div>


        {/* Booking Card */}

        <div className="row justify-content-center">

          <div className="col-lg-7 col-md-9">

            <div
              className="card border-0 shadow-lg rounded-4"
            >

              <div className="card-body p-4 p-md-5">


                {/* Student Name */}

                <div className="mb-4">

                  <label
                    className="form-label fw-semibold"
                    style={{
                      color: "#134E4A"
                    }}
                  >
                    Student Name
                  </label>

                  <input
                    value={tutorDetails.name}
                    onChange={e=>setTutorDetails({...tutorDetails,name:e.target.value})}
                    type="text"
                    className="form-control form-control-lg border-0"
                    style={{
                      backgroundColor: "#F0FDFA"
                    }}
                    placeholder="Enter your name"
                    required
                  />

                </div>


                {/* Subject */}

                <div className="mb-4">

                  <label
                    className="form-label fw-semibold"
                    style={{
                      color: "#134E4A"
                    }}
                  >
                    Subject
                  </label>

                  <select
                    className="form-select form-select-lg border-0"
                    value={tutorDetails.subject}
                    onChange={e=>setTutorDetails({...tutorDetails,subject:e.target.value})}
                    style={{
                      backgroundColor: "#F0FDFA"
                    }}
                  >

                    <option value="">
                      Select Subject
                    </option>

                    <option>
                      Mathematics
                    </option>

                    <option>
                      Physics
                    </option>

                    <option>
                      Chemistry
                    </option>

                    <option>
                      Computer Science
                    </option>

                    <option>
                      English
                    </option>

                  </select>

                </div>


                {/* Grade */}

                <div className="mb-4">

                  <label
                    className="form-label fw-semibold"
                    style={{
                      color: "#134E4A"
                    }}
                  >
                    Class / Grade
                  </label>

                  <input
                    value={tutorDetails.grade}
                    onChange={e=>setTutorDetails({...tutorDetails,grade:e.target.value})}
                    type="text"
                    className="form-control form-control-lg border-0"
                    style={{
                      backgroundColor: "#F0FDFA"
                    }}
                    placeholder="Enter your class"
                    required
                  />

                </div>


                {/* Date & Time */}

                <div className="row g-3">


                  {/* Date */}

                  <div className="col-md-6">

                    <label
                      className="form-label fw-semibold"
                      style={{
                        color: "#134E4A"
                      }}
                    >
                      Preferred Date
                    </label>

                    <input
                      type="date"
                      className="form-control form-control-lg border-0"
                      style={{
                        backgroundColor: "#F0FDFA"
                      }}
                      required
                      value={tutorDetails.date}
                      onChange={e=>setTutorDetails({...tutorDetails,date:e.target.value})}
                    />

                  </div>


                  {/* Time */}

                  <div className="col-md-6">

                    <label
                      className="form-label fw-semibold"
                      style={{
                        color: "#134E4A"
                      }}
                    >
                      Preferred Time
                    </label>

                    <input
                      type="time"
                      className="form-control form-control-lg border-0"
                      style={{
                        backgroundColor: "#F0FDFA"
                      }}
                      required
                      value={tutorDetails.time}
                      onChange={e=>setTutorDetails({...tutorDetails,time:e.target.value})}
                    />

                  </div>

                </div>


                {/* Requirements */}

                <div className="mb-4 mt-4">

                  <label
                    className="form-label fw-semibold"
                    style={{
                      color: "#134E4A"
                    }}
                  >
                    Learning Requirements
                  </label>

                  <textarea
                    value={tutorDetails.requirements}
                    onChange={e=>setTutorDetails({...tutorDetails,requirements:e.target.value})}
                    className="form-control border-0"
                    style={{
                      backgroundColor: "#F0FDFA"
                    }}
                    rows="4"
                    placeholder="Tell us what you need help with..."
                  ></textarea>

                </div>


                {/* Buttons */}

                <div className="d-flex flex-column flex-md-row gap-3 mt-4">

                  <button
                    onClick={handleAddBooking}
                    type="submit"
                    className="btn w-100 py-2 fw-semibold rounded-3 text-white"
                    style={{
                      backgroundColor: "#0F766E"
                    }}
                  >
                    ✓ Book Tutor
                  </button>


                  <button
                    onClick={handleCancelBooking}
                    type="submit"
                    className="btn w-100 py-2 fw-semibold rounded-3"
                    style={{
                      color: "#0F766E",
                      border: "2px solid #0F766E",
                      backgroundColor: "#FFFFFF"
                    }}
                  >
                    Cancel
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default BookingForm