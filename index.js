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
    // let [date, hour] = dateStamp.split(' ')

    // employee.timeInEvents.push({
    //     type: "TimeIn",
    //     hour: parseInt(hour, 10),
    //     date,
    // })

    // return employee
    console.log(dateStamp)
}