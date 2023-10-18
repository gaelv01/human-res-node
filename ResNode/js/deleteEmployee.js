window.onload = init;
var headers = {};

function init() {
    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token");
        headers = {
            'Authorization': "Bearer " + localStorage.getItem("token")
        };
        document.querySelector('.btn-primary').addEventListener('click', searchEmployee);
    } else {
        window.location.href = 'index.html';
    }
}

function searchEmployee() {
    var searchTerm = document.getElementById('input-name').value.toUpperCase();
    axios.get("http://localhost:3000/employee/search", {
        params: {
            employee_name: searchTerm
        },
        headers: headers
    })
    .then(function(res) {
        console.log(res);
        if (res.data.code === 200) {
            displayEmployee(res.data.message);
        }
        else {
            alert("Employee not found");
            window.location.reload();
        }
        
    })
    .catch(function (err) {
        console.log(err);
    });
}

function displayEmployee(employees) {
    var body = document.querySelector('body');
    for (var i = 0; i < employees.length; i++) {
        var employee = employees[i];
        body.innerHTML += `
            <h3>Employee Name: ${employee.employee_name}</h3>
            <p>Employee Last Name: ${employee.employee_lastname}</p>
            <p>Employee Phone: ${employee.employee_phone}</p>
            <p>Employee Email: ${employee.employee_mail}</p>
            <p>Employee Address: ${employee.employee_dir}</p>
            <button onclick="deleteEmployee(${employee.employee_id})">Delete</button>
            <hr>
        `;
    }
}

function deleteEmployee(id) {
    axios.delete(`http://localhost:3000/employee/delete/${id}`, {
        headers: headers
    })
    .then(function (res) {
        alert("Employee deleted successfully.");
        window.location.reload();
        console.log(res);
    })
    .catch(function (err) {
        alert("An error occurred while deleting.");
        console.log(err);
    });
}

