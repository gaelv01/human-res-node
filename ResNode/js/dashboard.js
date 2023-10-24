window.onload = init;

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
        document.querySelector(".btn-edit").addEventListener('click', function (){
            window.location.href = "edit.html";
        })
        document.querySelector(".btn-search").addEventListener('click', function(){
            window.location.href = "search.html";
        })
    }
    else {
        window.location.href = 'index.html';
    }
}

function logout (){
    token = localStorage.clear();
    window.location.href = 'index.html';
}
