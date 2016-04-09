var xmlhttp = new XMLHttpRequest();
var url = "https://v1-api.visioncloudapi.com/info/api?api_id=ID&api_secret=SECRET";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "<table>";

    for(i = 0; i < arr.length; i++) {
        out += "<tr><td>" +
        arr[i].age +
        "</td><td>" +
        arr[i].gender +
        "</td><td>" +
        arr[i].attrative +
        "</td></tr>"+
        arr[i].eyeglass +
        "</td></tr>"+
        arr[i].sunglass +
        "</td></tr>"+
        arr[i].smile +
        "</td></tr>";
    }
    out += "</table>";
    document.getElementById("id01").innerHTML = out;
}
