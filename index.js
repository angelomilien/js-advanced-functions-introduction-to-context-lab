// Your code here

function createEmployeeRecord(row) {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

function createTimeInEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: Number(hour),
        date: date
    })
    return employee
}

function createTimeOutEvent(employee, dateStamp){
    const [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: Number(hour),
        date: date
    })
    return employee
}

  
function hoursWorkedOnDate(employee, dateStamp){
    return (employee.timeOutEvents[0].hour - employee.timeInEvents[0].hour)/100
}


// {
//     firstName: 'Julius',
//     familyName: 'Caesar',
//     title: 'General',
//     payPerHour: 1000,
//     timeInEvents: [ { type: 'TimeIn', hour: 900, date: '0044-03-15' } ],
//     timeOutEvents: [ { type: 'TimeOut', hour: 1100, date: '0044-03-15' } ]
//   }

function wagesEarnedOnDate(employee, dateStamp){
    
    const hour = hoursWorkedOnDate(employee, dateStamp)
     const salaryOwned = hour * employee.payPerHour
    return salaryOwned
}


function allWagesFor(employee){

}

function findEmployeeByFirstName(srcArray, firstName){

}

function calculatePayrolls(employees){

}

// function allWagesFor(employee){

// }

// function allWagesFor(employee){

// }
