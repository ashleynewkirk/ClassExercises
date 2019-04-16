function Course(professor,courseName,courseCost,level) {
    this.professor = professor; 
    this.courseName = courseName; 
    this.courseCost = courseCost;
    this.level = level;
};
var course = new Course('Jimmy', 'Javascript', 2000, 'Advanced');
var course2 = new Course('Pasha','Java', 5000,'Intermediate');
console.log(course);
console.log(course2);

