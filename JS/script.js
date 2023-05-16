
function logout(){
    var x = document.getElementById("main");
    var y = document.getElementById("mbtn");

    x.style.display = "block";
    y.style.display = "none";
}

function cancel() {
    var x = document.getElementById("main");
    var y = document.getElementById("mbtn");

    x.style.display = "none";
    y.style.display = "block";
}