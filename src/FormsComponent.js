import React from 'react';

const FormsComponent = (props) => {
	return(
		<main>
				<form>
					<p>First Name</p>
					<input 
					type="text" 
					name="firtsName" 
					value={ props.data.firtsName } 
					placeholder="Firts Name" 
					onChange={ props.handleChange } 	
					/>
					<br />
					<p>Last Name</p>
					<input 
						type="text" 
						name="lastName" 
						value={ props.data.lastName } 
						placeholder="Last Name" 
						onChange={ props.handleChange } 	
					/>
					<br />
					<p>Your Age</p>
					<input 
						type="text" 
						name="age" 
						value={ props.data.age } 
						placeholder="Age" 
						onChange={ props.handleChange } 	
					/>
					<br />
		      <label>
		        <input 
		            type="radio" 
		            name="gender"
		            value="male"
		            checked={ props.data.gender === "male" }
		            onChange={ props.handleChange }
		        /> Male
		      </label>
		      <br />
		      <label>
		        <input 
		            type="radio" 
		            name="gender"
		            value="female"
		            checked={ props.data.gender === "female" }
		            onChange={ props.handleChange }
		        /> Female
		 		  </label>	
		   		<br />
		   		<label>
            <input 
                type="checkbox" 
                name="isVegan"
                checked={props.data.isVegan}
                onChange={props.handleChange}
            /> Is vegetarian?
          </label>
          <br />
		   		<label>
            <input 
                type="checkbox" 
                name="isKosher"
                checked={ props.data.isKosher }
                onChange={props.handleChange}
            /> Is kosher?
          </label>
          <br />
		   		<label>
            <input 
                type="checkbox" 
                name="isLactoseFree"
                checked={ props.data.isLactoseFree }
                onChange={props.handleChange}
            /> Is Lactose Free?
          </label>
		        
		      <br />
		      <label>Destination:</label>
		        <select 
		            value={ props.data.destination }
		            onChange={ props.handleChange }
		            name="destination"
		        >
		        	<option>--Select A Destination--</option>
	            <option value="America">America</option>
	            <option value="Some Island">Some Island</option>
	            <option value="Moon">Moon</option>
	            <option value=">The Sun (Death Wish)">The Sun (Death Wish)</option>
		        </select>
	        <br/>
		      <button>Submit</button>
				</form>
	      <hr />
	      <h2>Entered information:</h2>
	      <p>Your name: { props.data.firtsName } { props.data.lastName }</p>
	      <p>Your age: { props.data.age }</p>
	      <p>Your gender: { props.data.gender }</p>
	      <p>Your destination: { props.data.destination }</p>
	      <p>
	          Your dietary restrictions: 
	          <p>Vegan: { props.data.isVegan ? "Yes" : "No" }</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No" }</p>
            <p>Lactose Free: { props.data.isLactoseFree ? "Yes" : "No" }</p>
	      </p>
    </main>
	)
}

export default FormsComponent;