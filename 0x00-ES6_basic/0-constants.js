/**
 * File: myModule.js
 * Description: This module contains functions related to task management.
 * Author: Kolapo Adedipe
 * Date: September 25, 2023
 */

export function taskFirst() {
	const task = 'I prefer const when I can.';
	return task;
}

export function getLast() {
	return ' is okay';
}

export function taskNext() {
	let combination = 'But sometimes let';
	combination += getLast();

	return combination;
}
