/*Travel form
22 APRIL 2016 on Static Websites, Level 3, Exercise
You just started your own airline, and you need to create a form to collect data about your passengers' upcoming travel plans so they can book their flight.

You should collect the following information from the user:

First name (text input)
Last name (text input)
Age (number input)
Gender (radio buttons with 2 or more options)
Location they're traveling to (select box with at least 3 options. 
You're an airline that doesn't fly to many places...)
Whether they have any dietary restrictions 
(check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
Each element of the form should be given a name attribute so you can access the data 
in JavaScript and do stuff with it.
There should also be a button at the end of the form to submit it. 
Upon pressing the button, an alert should pop with the following info:
First Name: ***
Last Name: ***
Age: ***
Location: ***
Dietry restrictions:***
*/

import React, { Component } from 'react';
import FormsComponent from './FormsComponent';

class FormInfo extends Component {
	constructor() {
		super();
		this.state = {
			firtsName: "",
			lastName: "",
			age: "",
			gender: "",
			isVegan: false,
			isKosher: false,
			isLactoseFree: false,
			destination: ""
		}
		this.handleChange = this.handleChange.bind(this)
	}

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
  	
	render() {
		return(
			<FormsComponent 
			data={ this.state }
			handleChange={ this.handleChange} />
		)}
	}

export default FormInfo;