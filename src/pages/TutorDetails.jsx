import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getTutorDetailsApi } from '../services/tutorService';
import { addFavoriteApi, removeFavoriteApi } from '../services/FavouriteService';
import { toast } from 'react-toastify';
import Header from '../components/Header';

function TutorDetails() {

    const { id } = useParams();

    const [tutorsDetails,setTutorsDetails]=useState([])

    useEffect(()=>{
        getTutorDetails()
    },[id])

    const getTutorDetails=async()=>{
        const response=await getTutorDetailsApi(id)
        if(response.status==200){
            setTutorsDetails(response.data)
        }
    }

    const handleFavorite = async () => {
        try {
            const response = await addFavoriteApi(tutorsDetails);
            toast.success("Tutor added to favorites");
        } catch (error) {
            console.log(error);
        }
    }

  return (

    <div
      className="min-vh-100 "
      style={{
        backgroundColor: "#F5F7F2"
      }}
    >
        <Header/>

      <div className="container py-5">

        {/* Page Heading */}

        <div className="text-center mb-4">

          <span
            className="fw-semibold"
            style={{
              color: "#0F766E"
            }}
          >
            TUTOR PROFILE
          </span>

          <h1
            className="fw-bold mt-2"
            style={{
              color: "#134E4A"
            }}
          >
            Tutor Details
          </h1>

          <p className="text-muted">
            Get to know your tutor before booking a session
          </p>

        </div>


        <div className="row justify-content-center">

          <div className="col-md-10 col-lg-9">


            {/* Main Card */}

            <div
              className="card border-0 shadow-lg rounded-4 overflow-hidden"
            >

              {/* Tutor Image */}

              <img
                src={tutorsDetails?.image}
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover"
                }}
                alt="Tutor"
              />


              <div className="card-body p-4 p-md-5">


                {/* Name & Subject */}

                <div className="text-center mb-4">

                  <h2
                    className="fw-bold mb-3"
                    style={{
                      color: "#134E4A"
                    }}
                  >
                    {tutorsDetails?.name}
                  </h2>

                  <span
                    className="badge rounded-pill px-4 py-2"
                    style={{
                      backgroundColor: "#CCFBF1",
                      color: "#0F766E",
                      fontSize: "14px"
                    }}
                  >
                    {tutorsDetails?.subject}
                  </span>

                </div>


                <hr />


                {/* Details */}

                <h5
                  className="fw-bold mb-4"
                  style={{
                    color: "#134E4A"
                  }}
                >
                  Tutor Information
                </h5>


                <div className="row g-4">


                  {/* Education Level */}

                  <div className="col-md-6">

                    <div
                      className="p-3 rounded-3 h-100"
                      style={{
                        backgroundColor: "#F0FDFA"
                      }}
                    >

                      <small
                        className="fw-semibold"
                        style={{
                          color: "#0F766E"
                        }}
                      >
                        EDUCATION LEVEL
                      </small>

                      <p className="mb-0 mt-1 fw-semibold">
                        {tutorsDetails?.educationLevel}
                      </p>

                    </div>

                  </div>


                  {/* Experience */}

                  <div className="col-md-6">

                    <div
                      className="p-3 rounded-3 h-100"
                      style={{
                        backgroundColor: "#F0FDFA"
                      }}
                    >

                      <small
                        className="fw-semibold"
                        style={{
                          color: "#0F766E"
                        }}
                      >
                        EXPERIENCE
                      </small>

                      <p className="mb-0 mt-1 fw-semibold">
                        {tutorsDetails?.experience}
                      </p>

                    </div>

                  </div>


                  {/* Rating */}

                  <div className="col-md-6">

                    <div
                      className="p-3 rounded-3 h-100"
                      style={{
                        backgroundColor: "#F0FDFA"
                      }}
                    >

                      <small
                        className="fw-semibold"
                        style={{
                          color: "#0F766E"
                        }}
                      >
                        RATING
                      </small>

                      <p className="mb-0 mt-1 fw-semibold">
                        ⭐ {tutorsDetails?.rating}
                      </p>

                    </div>

                  </div>


                  {/* Price */}

                  <div className="col-md-6">

                    <div
                      className="p-3 rounded-3 h-100"
                      style={{
                        backgroundColor: "#F0FDFA"
                      }}
                    >

                      <small
                        className="fw-semibold"
                        style={{
                          color: "#0F766E"
                        }}
                      >
                        PRICE
                      </small>

                      <p className="mb-0 mt-1 fw-semibold">
                        ₹ {tutorsDetails?.price}
                      </p>

                    </div>

                  </div>


                  {/* Location */}

                  <div className="col-md-6">

                    <div
                      className="p-3 rounded-3 h-100"
                      style={{
                        backgroundColor: "#F0FDFA"
                      }}
                    >

                      <small
                        className="fw-semibold"
                        style={{
                          color: "#0F766E"
                        }}
                      >
                        LOCATION
                      </small>

                      <p className="mb-0 mt-1 fw-semibold">
                        {tutorsDetails?.location}
                      </p>

                    </div>

                  </div>


                  {/* Qualification */}

                  <div className="col-md-6">

                    <div
                      className="p-3 rounded-3 h-100"
                      style={{
                        backgroundColor: "#F0FDFA"
                      }}
                    >

                      <small
                        className="fw-semibold"
                        style={{
                          color: "#0F766E"
                        }}
                      >
                        QUALIFICATION
                      </small>

                      <p className="mb-0 mt-1 fw-semibold">
                        {tutorsDetails?.qualification}
                      </p>

                    </div>

                  </div>

                </div>


                <hr className="my-4" />


                {/* Bio */}

                <div>

                  <h5
                    className="fw-bold mb-3"
                    style={{
                      color: "#134E4A"
                    }}
                  >
                    About Tutor
                  </h5>

                  <p
                    className="text-muted lh-lg mb-0"
                    style={{
                      textAlign: "justify"
                    }}
                  >
                    {tutorsDetails?.bio}
                  </p>

                </div>


                <hr className="my-4" />


                {/* Buttons */}

                <div className="d-flex flex-column flex-md-row gap-3 mt-4">

                  <button
                    onClick={handleFavorite}
                    className="btn w-100 py-2 fw-semibold rounded-3"
                    style={{
                      color: "#0F766E",
                      border: "2px solid #0F766E",
                      backgroundColor: "#FFFFFF"
                    }}
                  >
                    ❤️ Add to Favorites
                  </button>


                  <Link
                    to={'/booking/:tutorId'}
                    className="btn w-100 py-2 fw-semibold rounded-3 text-white text-decoration-none text-center"
                    style={{
                      backgroundColor: "#0F766E"
                    }}
                  >
                    Book Tutor →
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default TutorDetails