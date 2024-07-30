Employees=[]
//Add new Employees
function addEmployees(id,name,position,department){
    let employee={
        id: id,
        name:name,
        position: position,
        department:department,
    }
    Employees.push(employee)
}
addEmployees(1, "Hallelujah", "Manager", "IT")
addEmployees(2, "Sarah", "Manager", "Sales")
addEmployees(3, "Ashley", "Manager", "HR")
addEmployees(4, "John", "Manager", "Marketing")
addEmployees(5, "Jane", "Manager", "Accounting")
addEmployees(6, "Jeremiah", "Manager", "Business")


// List all Employees
function listEmployees(){
    console.log(Employees)
}
listEmployees()


//Find an employee by ID
function findEmployee(id){
    console.log(Employees.filter(function(employee) {return employee.id===id}))
}
findEmployee(1)

//Update an employees Info
function updateEmployee(id,newName,newPosition,newDepartment){
    for (let i=0; i< Employees.length; i++) {
        if (Employees[i].id === id) {
          
                Employees[i].name= newName,
                Employees[i].position =newPosition,
                Employees[i].department= newDepartment
            }
        }
    }


updateEmployee(2, "Alex","Manager","Marketing")
listEmployees()
 
//Delete Employee
function deleteEmployee(id) {
    for (i=0;i<Employees.length;i++) {
        if( Employees[i].id ===id) {
            Employees.splice(i,1)
        }
    }
}
deleteEmployee(5)
