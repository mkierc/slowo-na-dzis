function getWord() {
    var word = wordmap[formatDate(new Date())];

    if (word == null) {
        word = "Poczekaj, słowo na dziś nie zostało jeszcze wylosowane."
        var element = document.createElement("div");
        element.setAttribute("id", "no-word");
        element.appendChild(document.createTextNode(word));
        document.getElementById("placeholder").appendChild(element);
    } else {
        var element = document.createElement("a");
        element.setAttribute("href", "http://sjp.pl/" + word);
        element.appendChild(document.createTextNode(word));
        document.getElementById("placeholder").appendChild(element);
    }

    for (var date in wordmap) {
        if (wordmap.hasOwnProperty(date)) {
            var linkwrapper = document.createElement("div");
            linkwrapper.setAttribute("id", "wrapping-div-" + date);
            linkwrapper.appendChild(document.createTextNode(date + ": "));
            document.getElementById("archiwum").appendChild(linkwrapper);
            
            var slowniklink = document.createElement("a");
            slowniklink.setAttribute("href", "http://sjp.pl/" + wordmap[date]);
            slowniklink.appendChild(document.createTextNode(wordmap[date]));
            document.getElementById("wrapping-div-" + date).appendChild(slowniklink);
        }
    };
}       

function formatDate(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + y + '.' + (m<=9 ? '0' + m : m) + '.' + (d <= 9 ? '0' + d : d);
}