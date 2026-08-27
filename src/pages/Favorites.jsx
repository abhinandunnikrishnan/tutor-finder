import React, { useEffect, useState } from 'react'
import { allFavoriteApi, removeFavoriteApi } from '../services/FavouriteService'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


function Favorites() {

    const[allFavorite,setAllFavorite]=useState([])

    useEffect(()=>{
        getAllFavorites()
    },[])

    const getAllFavorites=async()=>{
        const response=await allFavoriteApi()
        if(response.status==200){
            setAllFavorite(response.data)
        }
    }

    const DeleteFavorite=async(id)=>{
        const response =await removeFavoriteApi(id)
        if(response.status==200){
            getAllFavorites()
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


        {/* ================= PAGE HEADING ================= */}

        <div className="text-center mb-5">

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
            ❤️ Favorite Tutors
          </h1>

          <p className="text-muted">
            Your saved tutors are all in one place
          </p>

        </div>


        {/* ================= FAVORITE CARDS ================= */}

        {
          allFavorite.length>0?

          <div className="row g-4">

            {allFavorite.map(favorite=>(

              <div
                key={favorite.id}
                className="col-12 col-md-6 col-lg-4"
              >

                <div
                  className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden"
                >

                  <div className="card-body p-4">


                    {/* Name + Favorite Button */}

                    <div
                      className="d-flex justify-content-between align-items-center"
                    >

                      <h5
                        className="fw-bold mb-0"
                        style={{
                          color: "#134E4A"
                        }}
                      >
                        {favorite.name}
                      </h5>


                      <button
                        onClick={()=>DeleteFavorite(favorite?.id)}
                        className="btn rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "42px",
                          height: "42px",
                          backgroundColor: "#FDECEC",
                          color: "#DC3545",
                          border: "none"
                        }}
                      >
                        ❤️
                      </button>

                    </div>


                    <hr />


                    {/* Subject */}

                    <div className="mb-3">

                      <small
                        className="fw-semibold"
                        style={{
                          color: "#0F766E"
                        }}
                      >
                        SUBJECT
                      </small>

                      <div className="mt-1">

                        <span
                          className="badge rounded-pill px-3 py-2"
                          style={{
                            backgroundColor: "#CCFBF1",
                            color: "#0F766E"
                          }}
                        >
                          {favorite.subject}
                        </span>

                      </div>

                    </div>


                    {/* Experience */}

                    <div className="mb-3">

                      <small
                        className="fw-semibold"
                        style={{
                          color: "#0F766E"
                        }}
                      >
                        EXPERIENCE
                      </small>

                      <p className="mb-0 mt-1 fw-semibold">
                        {favorite.experience}
                      </p>

                    </div>


                    {/* Rating */}

                    <div className="mb-4">

                      <small
                        className="fw-semibold"
                        style={{
                          color: "#0F766E"
                        }}
                      >
                        RATING
                      </small>

                      <p className="mb-0 mt-1 fw-semibold">
                        ⭐ {favorite.rating}
                      </p>

                    </div>


                    {/* Book Button */}

                    <Link
                      to={'/booking/:tutorId'}
                      className="btn w-100 py-2 rounded-3 text-white fw-semibold text-decoration-none text-center"
                      style={{
                        backgroundColor: "#0F766E"
                      }}
                    >
                      Book Tutor →
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>


          :


          /* ================= EMPTY STATE ================= */

          <div className="text-center py-5">

            <div
              className="card border-0 shadow-sm rounded-4 mx-auto"
              style={{
                maxWidth: "500px"
              }}
            >

              <div className="card-body p-5">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "75px",
                    height: "75px",
                    backgroundColor: "#CCFBF1",
                    fontSize: "30px"
                  }}
                >
                  ❤️
                </div>

                <h4
                  className="fw-bold"
                  style={{
                    color: "#134E4A"
                  }}
                >
                  No Favorite Tutors
                </h4>

                <p className="text-muted mb-4">
                  You haven't added any tutors to your favorites yet.
                </p>

                <Link
                  to="/tutors"
                  className="btn text-white px-4 py-2 rounded-3 fw-semibold"
                  style={{
                    backgroundColor: "#0F766E"
                  }}
                >
                  Explore Tutors →
                </Link>

              </div>

            </div>

          </div>

        }

      </div>

    </div>
  )
}

export default Favorites