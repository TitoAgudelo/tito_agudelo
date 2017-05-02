export default () => {
	return `
  	<app-header></app-header>
		<div class="wrapper-login card-panel center-align">
			<div class="login-head">
				<h5 class="">Login</h5>
			</div>
			<div class="login-body">
		  	<div class="input-field">
			    <input id="email" type="text">
			    <label for="email" class="">Email</label>
		  	</div>
		  	<div class="input-field">
			    <input id="password" type="text">
			    <label for="password" class="">Password</label>
		  	</div>
		  	<div class="terms">
		  		<p class="">By singnig up or clicking continue, I confirm that I have read and agree to the <a>Terms</a> to the <a>Privacy Policy</a></p>
		  	</div>
		  	<div class="login-btn">
		  		<button class="btn-large"><a href="profile.html">Login</a></button>
		  	</div>
		  </div>
		</div>
	`
}
