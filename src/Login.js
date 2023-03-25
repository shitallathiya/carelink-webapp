import { Link } from 'react-router-dom';
import './Login.css'
function Login () {
    return (
            <div>
                <div class="background">
                    <div class="shape"></div>
                    <div class="shape"></div>
                </div>
                <form>
                    <h3>Login Here</h3>

                    <label for="username">Username</label>
                    <input type="text" placeholder="Email or Phone" id="username"/>

                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password"/>

                    <button>Log In</button>
                    <div>
                        <Link to={{pathname: "/Signup"}}>New user? Sign up here</Link>
                    </div>
                </form>
            </div>
    )
}

export default Login;