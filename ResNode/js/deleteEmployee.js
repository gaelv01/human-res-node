window.onload = init;

function init() {
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
    headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    document
      .querySelector(".btn-primary")
      .addEventListener("click", searchEmployee);
  } else {
    window.location.href = "index.html";
  }
}

function searchEmployee() {
  var searchTerm = document.getElementById("input-name").value.toUpperCase();
  axios
    .get("http://localhost:3000/employee/search", {
      params: {
        employee_name: searchTerm,
      },
      headers: headers,
    })
    .then(function (res) {
      console.log(res);
      if (res.data.code === 200) {
        displayEmployee(res.data.message);
      } else {
        alert("Employee not found");
        window.location.reload();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayEmployee(employees) {
  var selection = document.querySelector(".selection-table");
  selection.innerHTML = "<h3>Results:</h3>";
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    selection.innerHTML += `
            <tr><td>Employee Name:</td> <td>${employee.employee_name}</td></tr>
            <tr><td>Employee Last Name:</td><td> ${employee.employee_lastname}</td></tr>
            <tr><td>Employee Phone:</td><td> ${employee.employee_phone}</td></tr>
            <tr><td>Employee Email:</td><td> ${employee.employee_mail}</td></tr>
            <tr><td>Employee Address: </td><td>${employee.employee_dir}</td></tr>
            <tr><td colspan='2'><button class='btn btn-danger' onclick="deleteEmployee(${employee.employee_id})">Delete</button></td></tr>
            <br><hr>
        `;
  }
}

function deleteEmployee(id) {
  axios
    .delete(`http://localhost:3000/employee/delete/${id}`, {
      headers: headers,
    })
    .then(function (res) {
      alert("Employee deleted successfully.");
      window.location.reload();
    })
    .catch(function (err) {
      alert("An error occurred while deleting.");
      console.log(err);
    });
}
