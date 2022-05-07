import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post('https://neosmile-crud.herokuapp.com/login', values);
        window.localStorage.setItem('myapptoken', loginData.data.token);
        navigate('/patients');
      } catch (error) {
        console.log(error);
        alert('Something went wrong');
      }
    },
  });
  return (
    <div className="container ">
      <form onSubmit={formik.handleSubmit}>
        <div className="mx-auto flex-column row">
          <div className="col-6">
            <label>Email</label>
            <input
              type={'email'}
              className="form-control"
              name="username"
              id="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </div>
          <div className="col-6">
            <label>Password</label>
            <input
              type={'password'}
              className="form-control"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="d-flex col mt-4">
            <div className="mr-5">
              <input
                type={'submit'}
                className="btn btn-primary"
                value={'Login'} />
            </div>
            <div>
              <Link to={'/register'} className="btn btn-primary">SignUp</Link>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}

export default Login;