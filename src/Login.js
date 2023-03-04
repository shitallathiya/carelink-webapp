import './Login.css'

function Login () {
    return (
        <div class="login-box">
			<h2>CareLink Health</h2>
			<form>
				<div class="user-box">
					<input type="text" name="username" required=""/>
					<label>Username</label>
				</div>
				<div class="user-box">
					<input type="password" name="password" required=""/>
					<label>Password</label>
				</div>
				<a href="#">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<input type="submit" value="Login"/>
				</a>
			</form>
		</div>
    )
}

export default Login;