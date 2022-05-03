// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function sees if you can guess what the computer will generate
 */
function button () {

	//declare constants
	const R_RATING = 18
	const PG_RATING = 13
	const G_RATING = 10
	
	// get user input
	let userAge = parseInt(document.getElementById('age').value)
	let display;

  // if the userage is greater or equal to 18 then display results	
  if (userAge >= R_RATING) {
    display = "You can go see a R movie by yourself!"
  }
  // if the userage is greater or equal to 13 then display results	
	else if (userAge >= PG_RATING) {
    display = "You can go see a PG 13 movie by yourself!"
  }
  // if the userage is greater or equal to 10 then display results	
	else if (userAge >= G_RATING) {
    display = "You can watch a G rated movie by yourself!"
  }
	else {
    display = "You can’t go to a movie by yourself"
	}
	// display results
	document.getElementById("display").innerHTML = display
}

