import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBRadio,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import GrassImg from "../../images/about.png";

function Basic() {
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-start"
            >
              <p className="text-left h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              {/* Name */}
              <div className="d-flex mb-4 w-100">
                <label
                  htmlFor="name"
                  className="me-3"
                  style={{ width: "200px" }}
                >
                  Name:
                </label>
                <MDBInput id="name" type="text" />
              </div>

              {/* Phone Number */}
              <div className="d-flex mb-4 w-100">
                <label
                  htmlFor="phone"
                  className="me-3"
                  style={{ width: "200px" }}
                >
                  Phone Number:
                </label>
                <MDBInput id="phone" type="text" />
              </div>

              {/* Email */}
              <div className="d-flex mb-4 w-100">
                <label
                  htmlFor="email"
                  className="me-3"
                  style={{ width: "200px" }}
                >
                  Email:
                </label>
                <MDBInput id="email" type="email" />
              </div>

              {/* Password */}
              <div className="d-flex mb-4 w-100">
                <label
                  htmlFor="password"
                  className="me-3"
                  style={{ width: "200px" }}
                >
                  Password:
                </label>
                <MDBInput id="password" type="password" />
              </div>

              {/* Confirm Password */}
              <div className="d-flex mb-4 w-100">
                <label
                  htmlFor="confirmPassword"
                  className="me-3"
                  style={{ width: "200px" }}
                >
                  Confirm Password:
                </label>
                <MDBInput id="confirmPassword" type="password" />
              </div>

              {/* Aadhar Card */}
              <div className="d-flex mb-4 w-100">
                <label
                  htmlFor="aadhar"
                  className="me-3"
                  style={{ width: "200px" }}
                >
                  Aadhar Card:
                </label>
                <MDBInput id="aadhar" type="text" />
              </div>

              {/* Role (Farmer or Buyer) */}
              <div className="d-flex mb-4 w-100">
                <label className="me-3" style={{ width: "150px" }}>
                  Your Role:
                </label>
                <div className="d-flex">
                  <MDBRadio name="role" id="farmer" label="Farmer" />
                  <MDBRadio
                    name="role"
                    id="buyer"
                    label="Buyer"
                    className="ms-3"
                  />
                </div>
              </div>

              {/* Accept Terms */}
              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Accept Terms and Services"
                />
              </div>

              {/* Register Button */}
              <MDBBtn
                className="mb-4"
                size="lg"
                style={{ marginLeft: "150px" }}
              >
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src={GrassImg}
                fluid
                style={{ width: "600px", height: "500px" }}
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Basic;
