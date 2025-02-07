import React from "react";
import { Field, Form, Formik } from "formik";
import { formvalidation } from "../Validation/formvalidation";
import { usePostUserMutation } from "../../../store/api/userapi";
import { useNavigate } from "react-router-dom";
const Adduserform = () => {
  const nvg = useNavigate();
  const [postuser] = usePostUserMutation();

  const UserForm = async (data, setFieldError) => {
    try {
      const response = await postuser(data);

      if (response.data.status == "successfull") {
        nvg("/1");
      } else {
        if (response.data.errors.email) {
          setFieldError("email", response.data.errors.email);
        } else {
          setFieldError("mobile", response.data.errors.mobile);
        }
      }
    } catch (error) {
      console.log("error response", error.response.data);
    }
  };

  return (
    <div className="container-fuild pb-4 pt-3 px-2 bg-white">
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          mobile: "",
          address: "",
          country: "",
          state: "",
          city: "",
          pincode: "",
          status: "Active",
        }}
        validationSchema={formvalidation}
        onSubmit={(values, { setFieldError }) => {
          let data = {
            full_name: `${values.first_name} ${values.last_name}`,
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            mobile: values.mobile,
            address: values.address,
            country: values.country,
            state: values.state,
            city: values.city,
            pincode: values.pincode,
            status: values.status,
          };
          UserForm(data, setFieldError);
        }}
      >
        {({ values, errors, handleSubmit, touched, setFieldValue }) => (
          <Form autoComplete="off" onSubmit={handleSubmit}>
            {console.log("wertyu", errors, values)}
            <div
              className="row bg-white pb-4 round"
              style={{
                border: "1px solid #E0E0E0",
                margin: "10px 0px",
                borderRadius: "3px",
                position: "relative",
              }}
            >
              <div className="col-md-6 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      First Name <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      type="text"
                      name="first_name"
                      className="form-control"
                      placeholder="First Name"
                      value={values.first_name}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.first_name && touched.first_name ? (
                      <p style={{ color: "red" }}>{errors.first_name}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Last Name <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="last_name"
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      value={values.last_name}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.last_name && touched.last_name ? (
                      <p style={{ color: "red" }}>{errors.last_name}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Email ID <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Email ID"
                      value={values.email}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.email && touched.email ? (
                      <p style={{ color: "red" }}>{errors.email}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Mobile .No <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="mobile"
                      type="number"
                      className="form-control"
                      placeholder="Mobile. No"
                      value={values.mobile}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.mobile && touched.mobile ? (
                      <p style={{ color: "red" }}>{errors.mobile}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      Address <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="address"
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      value={values.address}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.address && touched.address ? (
                      <p style={{ color: "red" }}>{errors.address}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      Country <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="country"
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      value={values.country}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.country && touched.country ? (
                      <p style={{ color: "red" }}>{errors.country}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      State <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="state"
                      type="text"
                      className="form-control"
                      placeholder="State"
                      value={values.state}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.state && touched.state ? (
                      <p style={{ color: "red" }}>{errors.state}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      City <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="city"
                      type="text"
                      className="form-control"
                      placeholder="City"
                      value={values.city}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.city && touched.city ? (
                      <p style={{ color: "red" }}>{errors.city}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label ">
                      Pincode <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field
                      name="pincode"
                      type="number"
                      className="form-control"
                      placeholder="Pincode"
                      value={values.pincode}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.pincode && touched.pincode ? (
                      <p style={{ color: "red" }}>{errors.pincode}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      User Status <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <Field as="select" name="status" className="form-select">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </Field>
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.status && touched.status ? (
                      <p style={{ color: "red" }}>{errors.status}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div
                className="col-12 py-5 px-4 d-flex justify-content-end"
                style={{ gap: "4px" }}
              >
                <button className="btn4">Cancel</button>
                <button
                  type="submit"
                  className="btn5"
                  style={{ background: "#0e5da9" }}
                >
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Adduserform;
