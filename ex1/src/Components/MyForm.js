import React from 'react';
import { Formik } from 'formik';

const MyForm = (props) => (
  <div>
    <Formik
      initialValues={props.initValues }
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if(!values.password){
          errors.password = 'Required'
        }else if(values.password.length < 6){
          errors.password = "passwod too short"
        }

        if(!values.fname){
          errors.fname = 'Required'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className='field'>
           <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder = " "
          />
          <label htmlFor='email'>email</label>
          <p className='error'>{errors.email && touched.email && errors.email}</p>
          </div>
          <div className='field'>
          <input
            type="text"
            name="fname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fname}
            placeholder = " "
          />
          <label htmlFor='fname'>name</label>
          <p className='error'>{errors.fname && touched.fname && errors.fname}</p>
          </div>
          <div className='field'>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder = " "
          />
          <label htmlFor='password'>passwod</label>
          <p className='error'>{errors.password && touched.password && errors.password}</p>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default MyForm;