
$(document).ready(function () {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var data = {};

    arman = function () {
        showLoader();

        $.getJSON(url, data, function (data, status) {
            data.forEach(element => {
                $('#list').append("<li>" + element.id + "</li>");
                $('#list').append("<li>" + element.userId + "</li>");
                $('#list').append("<li>" + element.title + "</li>");
                $('#list').append("<li>" + element.body + "</li>");
                $('#list').append("<hr/>");
            });
            showPage();
        });
    }

    function showLoader() {
        document.getElementById("loader").style.display = "block";
        document.getElementById("myBox").style.display = "none";
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myBox").style.display = "block";
    }
});