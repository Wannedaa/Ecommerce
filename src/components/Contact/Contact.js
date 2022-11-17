import React from "react";
import "./UserForms.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
function Contact() {
  const formik = useFormik({
    initialValues: {
      email: "",
      text: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <>
    <h2 className="titl">Contactanos!</h2>
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email@ejemplo.com"
            onChange={formik.handleChange}
            
            value={formik.values.email}
          />
        </div>
        <div className="col-auto">
          <textarea
            class="form-control"
            id="text"
            rows="3"
            placeholder="Escribenos..."
            onChange={formik.handleChange}
            value={formik.values.text}
          ></textarea>
        </div>
        <div className="col-auto" id="boton">
          <button type="submit" className="btn btn-primary mb-3">
            Enviar
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
export default Contact;
