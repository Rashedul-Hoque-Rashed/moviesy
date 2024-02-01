import { Link, useNavigate } from "react-router-dom";
import './Register.css'
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const Navigate = useNavigate();

    const handelCreateUser = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;

        if (!/^(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/.test(password)
        ) {
            Swal.fire({
                icon: 'error',
                title: "Password must be 6 characters, one uppercase and one spacial characters",
                showConfirmButton: false,
                timer: 2500
            });
            return;
        }

        createUser(email, password, name)
            .then(res => {
                updateProfile(auth.currentUser, {
                    displayName: `${name}`
                })
                console.log(res.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate('/')
                
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

    return (
        <div className="register" style={{backgroundColor: '#508bfc'}}>
            <section className="" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign up</h3>

            <form onSubmit={handelCreateUser}> 
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="typeName-2">Name</label>
              <input type="name" id="typeName-2" name='name' className="form-control form-control-lg" />
            </div>

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

            <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>

            </form>

              <p className='mt-2'>Already have any account, please  <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Register;