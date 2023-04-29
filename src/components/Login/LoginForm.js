import React from 'react';
import {Formik, Form, Field, ErrorMessage, withFormik} from 'formik';
import classes from "./Login.module.css";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {isSubmissionError} from "redux-form/lib/SubmissionError";
const Basic = (props) => (

  <div>


    <Formik


      initialValues={{email: '', password: ''}}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}

      onSubmit={(values, {setSubmitting}) => {

         props.login(values.email,values.password,values.rememberMe)
        setSubmitting(false)


      }
      }

    >

      {({isSubmitting}) => (

        <Form className={classes.wrapperForm}>
          <Field className={classes.field} type="email" name="email"/>
          <ErrorMessage name="email" component="div"/>
          <Field className={classes.field} type="password" name="password"/>
          <ErrorMessage name="password" component="div"/>
          <div>
            <Field component={'input'} name={'rememberMe'} type={"checkbox"}/> remember me
          </div>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

const mapStateToProps = (state) =>({
  isAuth:state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Basic);