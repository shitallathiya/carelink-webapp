import './Login.css'

function Signup() {
    return (
        <div>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form>
                <h3>Register Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username"/>

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>

                <label for="password">Confirm password</label>
                <input type="password" placeholder="Confirm password" id="confirm_password"/>

                <button class="signupbtn">Sign Up</button>

            </form>
        </div>
    )
}

export default Signup;