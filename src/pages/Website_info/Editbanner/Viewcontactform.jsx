import React, { useRef, useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import JoditEditor from "jodit-react";
import { Field, Form, Formik } from "formik";
import img3 from "../../../assets/selectbanner.webp";
import { useGetSingleBannerQuery, usePatchBannerMutation } from "../../../store/api/bannerapi";
import { useContactsingleQuery } from "../../../store/api/webinfoapi";
const Editbannerform = ({ id }) => {
  const { data, isLoading } = useContactsingleQuery(id);

  const [apiresponse, setapiresponse] = useState({});
  const imageInputRef = useRef(null);
  const nvg = useNavigate();


  const config = {
    height: "300px",
  };

  // create category api start here
  const [patchbanner] = usePatchBannerMutation();

  // create category api end here
  return isLoading == true ? (
    ""
  ) : (
    <div className="container-fuild pb-4 pt-3 px-2 bg-white">
      <Formik
        initialValues={{
          firstname: data.data.firstname,
          lastname: data.data.lastname,
          email: data.data.email,
          mobile: data.data.mobile,
          message:data.data.Message
        }}
       
      >
        {({ values, errors, handleSubmit, touched, setFieldValue }) => (
          <Form autoComplete="off" onSubmit={handleSubmit}>
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
                    <input
                      type="text"
                      name="banner_name"
                      className="form-control"
                      readOnly
                      placeholder="Banner Name"
                      value={values.firstname}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.banner_name && touched.banner_name ? (
                      <p style={{ color: "red" }}>{errors.firstname}</p>
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
                    <input
                      name="banner_alt"
                      type="text"
                      readOnly
                      className="form-control"
                      placeholder="Banner Alt"
                      value={values.lastname}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">

                    {errors.banner_alt && touched.banner_alt ? (
                      <p style={{ color: "red" }}>{errors.banner_alt}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Email <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      name="banner_name"
readOnly
                      className="form-control"
                      placeholder="Banner Name"
                      value={values.email}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">
                    {errors.banner_name && touched.banner_name ? (
                      <p style={{ color: "red" }}>{errors.banner_name}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                    Mobile <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      name="banner_alt"
                      type="text"
                      className="form-control"
                      placeholder="Banner Alt"
                      readOnly
                      value={values.mobile}
                    />
                  </div>
                  <div className="offset-lg-4 col-lg-8">

                    {errors.banner_alt && touched.banner_alt ? (
                      <p style={{ color: "red" }}>{errors.banner_alt}</p>
                    ) : null}
                  </div>
                </div>
              </div>

           

              <div className="col-md-12 px-2 pt-4">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label">
                      Message <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-lg-12">
                  <textarea name="" className="form-control" style={{height:'170px'}} readOnly value={values.message} id=""></textarea>
                  </div>
                  <div className="offset-lg-4 col-lg-8">

                    {errors.banner_link && touched.banner_link ? (
                      <p style={{ color: "red" }}>{errors.banner_link}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* <div className="col-12 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label ">
                      Image <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <div className="border d-flex justify-content-center">
                      <button
                        type="button"
                        style={{
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <input
                          type="file"
                          name="banner"
                          style={{ display: "none" }}
                          ref={imageInputRef}
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "banner",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <img
                          src={
                            values.banner == data.data.banner
                              ? `http://localhost:8000/uploads/images/${data.data.banner}`
                              : URL.createObjectURL(values.banner)
                          }
                          alt="zxcvbnm"
                          width="100%"
                          height="200px"
                          onClick={() => {
                            imageInputRef.current.click();
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {errors.banner && touched.banner ? (
                      <p style={{ color: "red" }}>{errors.banner}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-12 px-2 pt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label ">
                      Banner Description{" "}
                      <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <JoditEditor
                      config={config}
                      value={values.description}
                      onChange={(content) => setFieldValue("description", content)}
                    />
                  </div>
                  <div className="col-lg-12">
                    {errors.description && touched.description ? (
                      <p style={{ color: "red" }}>{errors.description}</p>
                    ) : null}
                  </div>
                </div>
              </div> */}

              {/* <div
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
              </div> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Editbannerform;
