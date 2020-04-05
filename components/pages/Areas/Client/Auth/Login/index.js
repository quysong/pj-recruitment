import React from 'react';
import PropTypes from 'prop-types';

const Login = props => {
  return (
    <>
      {/* login section start */}
      <section className="login-wrapper">
        <div className="container">
          <div className="col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2">
            <form>
              <img className="img-responsive" alt="logo" src="img/logo.png" />
              <input type="text" className="form-control input-lg" placeholder="User Name" />
              <input type="password" className="form-control input-lg" placeholder="Password" />
              <label><a href>Forget Password?</a></label>
              <button type="submit" className="btn btn-primary">Login</button>
              <p>Have't Any Account <a href>Create An Account</a></p>
            </form>
          </div>
        </div>
      </section>
      {/* login section End */}
    </>
  );
};

Login.propTypes = {

};

export default Login;