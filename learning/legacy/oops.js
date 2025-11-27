class Emp1{
 static name;
static salary;
static originalsalary;
static employee1_details(name, salary){
Emp1.name=name;
Emp1.salary=salary;
Emp1.originalsalary=salary;
}
static employee1_getting_salary(){//Setter method

console.log("original salary:"+Emp1.originalsalary)
}
static employee1_increment_salary(amount){//Getter method
Emp1.salary+=amount;
console.log("Updated salary:" +Emp1.salary)
}}
 Emp1.employee1_details("vidya", 25000);
Emp1.employee1_getting_salary();
Emp1.employee1_increment_salary(5000)


