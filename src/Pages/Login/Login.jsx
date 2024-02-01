import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { login, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();

    const handelLogin = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)

        login(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate(location?.state ? location.state : "/");

            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2500
                })
            })
    }

    const handelGoogle = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2500
                });
            });
    }

    return (
        <div className="login" style={{backgroundColor: '#508bfc'}}>
            <section className="" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <form onSubmit={handelLogin}> 
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="typeEmailX-2">Email</label>
              <input type="email" id="typeEmailX-2" name='email' className="form-control form-control-lg" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="typePasswordX-2">Password</label>
              <input type="password" id="typePasswordX-2" name='password' className="form-control form-control-lg" />
            </div>
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            </form>

            <hr className="my-4"/>

            <button onClick={handelGoogle} className="btn btn-lg btn-block btn-primary" style={{backgroundColor: '#dd4b39'}}
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
              <p className='mt-2'>Don&#39;t have any account, please  <Link to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Login;