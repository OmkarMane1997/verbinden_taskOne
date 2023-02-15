import React from "react";

function Profile() {
  const readValue = (e) => {
    // const { name, value } = e.target;
    // setLoginUser({ ...loginUser, [name]: value });
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="">
          <div className="card">
            <div className="card-body">
              Edit Profile
              <div className="row">
                <div className="">
                  <form autoComplete="off">
                    {/* row one */}
                    <div className="row">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 my-3">
                        <label for="exampleInputEmail1" class="form-label">
                          COMPANY (DISABLE)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          class="form-control"
                          placeholder="Enter Company"
                          value={"Creative Code info"}
                          disabled
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 my-3">
                        <label for="exampleInputEmail1" class="form-label">
                          USERNAME
                        </label>
                        <input
                          type="text"
                          id="user"
                          name="user"
                          class="form-control"
                          placeholder="UserName"
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 my-3">
                        <label for="exampleInputEmail1" class="form-label">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    {/* row two */}
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-3">
                        <label for="exampleInputEmail1" class="form-label">
                          FIRST NAME
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          class="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-3">
                        <label for="exampleInputEmail1" class="form-label">
                          LAST NAME
                        </label>
                        <input
                          type="text"
                          id="user"
                          name="user"
                          class="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    {/* row three */}
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3">
                        <label htmlFor="" class="form-label">
                          ADDRESS
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          class="form-control"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    {/* row four */}
                    <div className="row">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 my-3">
                        <label for="exampleInputEmail1" class="form-label">
                          CITY
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          class="form-control"
                          placeholder="City"
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 my-3">
                        <label for="exampleInputEmail1" class="form-label">
                          COUNTRY
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          class="form-control"
                          placeholder="Country"
                        />
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 my-3">
                        <label for="exampleInputEmail1" class="form-label">
                          POSTAL CODE
                        </label>
                        <input
                          type="number"
                          id="postalCode"
                          name="postalCode"
                          class="form-control"
                          placeholder="Postal Code"
                        />
                      </div>
                    </div>
                    {/* row five */}
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3">
                        <label htmlFor="" class="form-label">
                          ABOUT ME
                        </label>
                        <textarea
                          type="text"
                          id="about"
                          name="about"
                          class="form-control"
                          placeholder="Here Can Be Your Description"
                          cols={5}
                          rows={5}
                        ></textarea>
                      </div>
                    </div>
                    {/* row six */}
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-primary">
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
