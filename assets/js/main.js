/**
 * Created by Spil on 10.01.2016.
 */


var App = (function () {
    function laod () {

    }

    return {
        init: function () {

        },
        createFight: function () {
            App.ajaxRequest('start', function (resp) {
                document.getElementById('main').innerHTML = resp;
            })
        },
        ajaxRequest: function (url, callBack) {

            var type = 'html',
                path =  "/templates/" + url + ".html";

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    callBack(xhttp.responseText)
                }
            };
            xhttp.open("GET",path, true);
            xhttp.send();
        }
    }
})();