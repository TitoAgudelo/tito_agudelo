export default ({ user }) => {
	return `	  
		<app-header></app-header>
	  <div class="wrapper-dashboard">
	  	<div class="dashboard-profile">
	  		<div class="come-back">
		  		<button class="btn"><a href="index.html">Log Out</a></button>
		  	</div>
		  	<div class="dashboard-info">
		  		<div class="info-image">
		  			<div class="bg-image"></div>
		  		</div>
		  		<div class="info-detail">
		  			<div class="info-name">
		  				<h5>${user.name}</h5>
		  			</div>
		  			<div class="info-location"><i class="ion-ios-location-outline"></i>${user.location}</div>
		  			<div class="info-phone"><i class="ion-ios-telephone-outline"></i>${user.phone}</div>
		  		</div>
		  		<div class="info-upload">
		  			<button class="btn-large"><i class="ion-ios-camera"></i> Upload Cover Image</button>
		  		</div>
		  		<div class="info-stars">
		  			<i class="ion-android-star"></i>
		  			<i class="ion-android-star"></i>
		  			<i class="ion-android-star"></i>
		  			<i class="ion-android-star"></i>
		  			<i class="ion-ios-star-outline"></i>
		  			<p>6 Reviews</p>
		  		</div>
		  	</div>
	  	</div>
	  	<div class="dashboard-tabs">
	      <ul class="tabs">
	        <li class="tab"><a class="active" href="#test1">About</a></li>
	        <li class="tab"><a href="#test2">Settings</a></li>
	        <li class="tab"><a href="#test3">Option 1</a></li>
	        <li class="tab"><a href="#test4">Option 2</a></li>
	        <li class="tab"><a href="#test5">Option 3</a></li>
	      </ul>
	      <span class="follow"><i class="ion-ios-plus"></i> 15 Followers</span>
		  </div>
	  	<div class="dashboard-detail">
	  		<div id="test1" class="col s12">
	  			<h5>Profile info</h5>
	  			<div class="detail-content">
	  				<div class="detail-item">
	  					<div class="item name">${user.name}</div>
	  					<div class="item-edit"><i class="ion-edit"></i></div>
	  					<div class="dropdown-detail">
	  						<h5>Name</h5>
	  						<div class="input-field">
							    <input id="email" type="text" name="name" value="${user.name}">
						  	</div>
						  	<div class="drop-action">
						  		<button class="btn save">Save</button>
						  		<button class="btn cancel">Cancel</button>
						  	</div>
	  					</div>
  					</div>
	  				<div class="detail-item">
	  					<div class="item"><span class="ion-earth"></span> ${user.page}</div>
	  					<div class="item-edit"><i class="ion-edit"></i></div>
	  					<div class="dropdown-detail">
	  						<h5>Web Page</h5>
	  						<div class="input-field">
							    <input id="email" type="text" name="page" value="${user.page}">
						  	</div>
						  	<div class="drop-action">
						  		<button class="btn save">Save</button>
						  		<button class="btn cancel">Cancel</button>
						  	</div>
	  					</div>
  					</div>
	  				<div class="detail-item">
	  					<div class="item"><span class="ion-ios-telephone-outline"></span> ${user.phone}</div>
	  					<div class="item-edit"><i class="ion-edit"></i></div>
	  					<div class="dropdown-detail">
	  						<h5>Phone Number</h5>
	  						<div class="input-field">
							    <input id="email" type="text" name="phone" value="${user.phone}">
						  	</div>
						  	<div class="drop-action">
						  		<button class="btn save">Save</button>
						  		<button class="btn cancel">Cancel</button>
						  	</div>
	  					</div>
  					</div>
	  				<div class="detail-item">
	  					<div class="item"><span class="ion-ios-home-outline"></span> ${user.location}</div>
	  					<div class="item-edit"><i class="ion-edit"></i></div>
	  					<div class="dropdown-detail">
	  						<h5>City, State & Zip</h5>
	  						<div class="input-field">
							    <input id="email" type="text" name="location" value="${user.location}">
						  	</div>
						  	<div class="drop-action">
						  		<button class="btn save">Save</button>
						  		<button class="btn cancel">Cancel</button>
						  	</div>
	  					</div>
  					</div>
	  			</div>
	  		</div>
	  	</div>
	  </div>
	`
}
