// Take an array of employee objects, where each object contains properties such as epmid, empname, empcompany, empsalary and empaddress where empaddress is further having two more properties of object such as empcity and emparea.
// Print these properties in the form of a table on the ui by using JavaScript.

let empDetails = [
  {
    empId: 101,
    empName: "Subhapreet Patro",
    empCompany: "Amazon",
    empSalary: 500000,
    empAddress: {
      empArea: "Narsingi",
      empCity: "Hyderabad",
    },
  },
  {
    empId: 102,
    empName: "Divyansh Jain",
    empCompany: "Meta",
    empSalary: 700000,
    empAddress: {
      empArea: "Dundigal",
      empCity: "Hyderabad",
    },
  },
  {
    empId: 103,
    empName: "Subham Patnaik",
    empCompany: "Salesforce",
    empSalary: 800000,
    empAddress: {
      empArea: "GandiMaisamma",
      empCity: "Hyderabad",
    },
  },
];

let empTable = document.getElementById("emp");
empDetails.map((emp) => {
  empTable.innerHTML += `<tr>
    <td>${emp.empId}</td>
    <td>${emp.empName}</td>
    <td>${emp.empCompany}</td>
    <td>${emp.empSalary}</td>
    <td>${emp.empAddress.empArea}</td>
    <td>${emp.empAddress.empCity}</td>
  </tr>`;
});

document.body.appendChild(empTable);
