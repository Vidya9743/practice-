//class name is student
class Student{
//variable
studentname="vidya";
//function or method
student_Details()
{
console.log("name of the student:" + this.studentname)
}
//ststic variable
static studentAddress="Bangalore";
}
//object creation of the class
const stu1=new Student()
stu1.student_Details();
console.log(Student.studentAddress);
