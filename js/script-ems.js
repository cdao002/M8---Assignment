// CREATE AN ARRAY OF EMPLOYEES
let employees
const defaultList = [
    {empId: 1, name:'Sarah Johnson', extension: 1234, email:'sarah@vectacorp.com',department:'Administrative'},
    {empId: 2, name: 'Michael Davis',extension: 2345,email: 'mike@vectacorp.com', department: 'Engineering'},
    {empId: 3, name:'Emily Smith', extension: 3456, email: 'emily@vectacorp.com', department: 'Executive'},
    {empId: 4, name:'David Brown',extension: 4567, email:'davidy@vectacorp.com', department: 'Marketing'},
    {empId: 5, name:'Sophia Lee',extension: 5678, email:'sophia@vectacorp.com', department:'Quality Assurance'}
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
const storedData = localStorage.getItem('employees')
if (storedData === null) {
    employees = defaultList
} else {    
    employees = JSON.parse(storedData)
}
console.log(employees)

// GET DOM ELEMENTS
const $ = id => document.getElementById(id)
const form = $('addForm')
const empTable = $('empTable')


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
document.addEventListener('DOMContentLoaded', buildGrid)


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    const empId = parseInt($('empId').value)
    const name = $('name').value
    const extension = parseInt($('extension').value)
    const email = $('email').value
    const department = $('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = {empId,name,extension,email,department}

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('empId').focus()


});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.tagName === 'BUTTON'&& confirm('Are you sure to delete this employee?')) {
        // Get the row to delete (parentNode of the button's cell)
        const row4Delete = e.target.parentNode.parentNode
        
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        const rowIndex = Array.from(row4Delete.parentNode.children).indexOf(row4Delete)
        employees.splice(rowIndex,1)
        // employees = employees.filter(employee => employee.empId !== parseInt(empId))

        // BUILD THE GRID
        buildGrid()
    }
});

// BUILD THE EMPLOYEES GRID

function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const tbody = empTable.querySelector('tbody')
    empTable.removeChild(tbody)
   


    // REBUILD THE TBODY FROM SCRATCH
    const newTbody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    
    employees.forEach(employee => {
        const row = document.createElement('tr');
        ['empId', 'name', 'extension', 'email', 'department'].forEach(key => {
            const cell = document.createElement('td');
            cell.textContent = employee[key];
            row.appendChild(cell);
        })
            const cellDelete = document.createElement('td')
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.classList.add('btn', 'btn-danger')
            cellDelete.appendChild(deleteButton)
            row.appendChild(cellDelete)

            newTbody.appendChild(row)
        })

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(newTbody)

    // UPDATE EMPLOYEE COUNT
    updateEmpCount()

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees',JSON.stringify(employees))

    if (employees.length ===0){
        localStorage.clear()
    }
}

function updateEmpCount(){
    const count = $('empCount')
    count.textContent = employees.length
}