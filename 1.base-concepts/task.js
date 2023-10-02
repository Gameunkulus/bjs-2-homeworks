"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discr = b ** 2 - 4 * a * c;
	if (discr == 0) {
		arr[0] = -b / (2 * a);
	} else if (discr > 0) {
		arr[0] = (-b + Math.sqrt(discr)) / (2 * a);
		arr[1] = (-b - Math.sqrt(discr)) / (2 * a);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (Number.isNaN(percent) || Number.isNaN(contribution) || Number.isNaN(amount) || Number.isNaN(countMonths)) {
    return false;
    }
	let monthPercent = (percent / 12) / 100;
	let bodyCredit = amount - contribution;
	let payPerMonth = bodyCredit * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
	let result = (payPerMonth * countMonths);
	result = (result).toFixed(2)
	return +result;
}