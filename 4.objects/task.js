

function Student(name, gender, age) {

	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];

	Student.prototype.setSubject = function(subjectName) {
		this.subject = subjectName;
	};

	Student.prototype.addMarks = function(...marks) {
		if (!this.marks) {
			console.log("Error: Student has been expiled.");
			return;
		}
		this.marks = [...this.marks, ...marks]
	};

	Student.prototype.getAverage = function() {
		if (!this.marks || !this.marks.length) {
			return 0;
		}
		const sum = this.marks.reduce((acc, curr) => acc + curr);
		return sum / this.marks.length;
	};

	Student.prototype.exclude = function(reason) {
		delete this.subject;
		delete this.marks;
		this.excluded = reason;
	};
}