function Student (name, id, average){
    this.name = name;
    this.id = id;
    this.average = average;
}

const students = [
    new Student("A", 1, 95),
    new Student("B", 2, 82),
    new Student("C", 3, 90),
    new Student("D", 4, 77),
    new Student("E", 5, 100),
    new Student("F", 6, 88),
    new Student("G", 7, 93),
    new Student("H", 8, 60),
    new Student("I", 9, 97),
    new Student("J", 10, 85)
];

const excellentStudents = students.filter((student) => student.average > 90);

console.log("Excellent students:", excellentStudents);
