window.onload = init;
var headers = {};
var url = 'http://localhost:3000';

function init(){
    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token")
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector(".btn-add").addEventListener('click', function(){
            window.location.href = "add.html";
        });
        document.querySelector(".btn-del").addEventListener('click', function(){
            window.location.href = "delete.html";
        });
    }
    else {
        window.location.href = 'index.html';
    }
}
