'use strict';
function parseCount(value) {
	const result = parseFloat(value);
	if (isNaN(result)) {
		throw new Error("Невалидное значение");
	}
	return result;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (e) {
		return e;
	}
}

class Triangle {

	constructor(sideA, sideB, sideC) {
		if (sideA + sideB < sideC || sideC + sideA < sideB || sideB + sideC < sideA) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;
	}

	get perimeter() {

		return this.sideA + this.sideB + this.sideC;

	}

	get area() {
		let halfPer = this.perimeter / 2;
		let result = +Math.sqrt(halfPer * (halfPer - this.sideA) * (halfPer - this.sideB) * (halfPer - this.sideC)).toFixed(3);
		return result;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (e) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}