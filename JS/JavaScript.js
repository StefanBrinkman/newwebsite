// Homepage
var vm1 = new Vue({
    el: '.leftheader',
     data: {
        Image: 'IMAGES/Header_Img.jpg'
     }
});
  
var vm2 = new Vue({
    el: '#platforminfo',
    data: {
        informatie: [{
            "Platforms": [
                "PC",
                "XBOX ONE",
                "Playstation 4",
                "Nitendo Switch"
            ]
        }]
    },
});

var vm3 = new Vue({
    el: '#gameinfo',
    data: {
        informatie: [{
            "Games": [
                "Minimale specificaties",
                "Aanbevolen specificaties",
                "Game genre",
                "Informatie over de game",
                "Trailer over de game"
            ]
        }]
    },
});

var vm4 = new Vue({
    el: '#siteinfo',
    data: {
        informatie: [{
            "Games": [
                "Bestaande games.",
                "Games die released worden.",
                "Handige informatie over de game."
            ]
        }]
    },
});


// Footer
var vm5 = new Vue({
    el: '#footertext',
     data: {
        FooterText: 'Gemaakt door Stefan Brinkman 97049027. © Alle rechten voorbehouden.'
     }
});

// Functions
function rel () {
    var infotabel = "<div class='geplrelea'>";
    var lengte = geplande_releases.length;
    var tabel = "<table id='gepltabel'><tr><td><p class='gtextinfo'>Geplande releases:</p></td></tr>";
    for(var i = 0; i < lengte; i++) {
        tabel += "<tr><td><img class='imgshow' src='IMAGES/" + geplande_releases[i].Image + "' alt='FOUTE_IMG'></td></tr>";
        tabel += "<tr><td><strong>Game:</strong> " + geplande_releases[i].GameNaam + "</td></tr>";
        tabel += "<tr><td><strong>Genre:</strong> " + geplande_releases[i].Genre + "</td></tr>";
        tabel += "<tr><td><strong>Platform:</strong> " + geplande_releases[i].Platform + "</td></tr>";
        tabel += "<tr><td><strong>Release datum:</strong> " + geplande_releases[i].Release_Date + "</td></tr>";
        tabel += "<tr><td><strong>Korte omschrijving:</strong> " + geplande_releases[i].Omschrijving.substring(0,50) + "...</td></tr>";
        tabel += "<tr><td><strong>Lees <a href='showinfo.html' onclick='getGameData(geplande_releases," + i + ")'>hier</a> meer</strong></td></tr>";
        tabel += "<tr class='empty'><td>&nbsp;</td></tr>";
    }
    infotabel += tabel;
    infotabel += "</div>";
    document.getElementById("geplrelea").innerHTML = infotabel;
}

function planned () {
    var infotabel = "<div class='geplrelea'>";
    var lengte = bestaande_games.length;
    var tabel = "<table id='gepltabel'><tr><td><p class='gtextinfo'>Bestaande Games:</p></td></tr>";
    for(var i = 0; i < lengte; i++) {
        tabel += "<tr><td><img class='imgshow' src='IMAGES/" + bestaande_games[i].Image + "' alt='FOUTE_IMG'></td></tr>";
        tabel += "<tr><td><strong>Game:</strong> " + bestaande_games[i].GameNaam + "</td></tr>";
        tabel += "<tr><td><strong>Genre:</strong> " + bestaande_games[i].Genre + "</td></tr>";
        tabel += "<tr><td><strong>Platform:</strong> " + bestaande_games[i].Platform + "</td></tr>";
        tabel += "<tr><td><strong>Korte omschrijving:</strong> " + bestaande_games[i].Omschrijving.substring(0,60) + "...</td></tr>";
        tabel += "<tr><td><strong>Lees <a href='showinfo.html' onclick='getGameData(bestaande_games," + i + ")'>hier</a> meer</strong></td></tr>";
        tabel += "<tr class='empty'><td>&nbsp;</td></tr>";
    }
    infotabel += tabel;
    infotabel += "</div>";
    document.getElementById("geplrelea").innerHTML = infotabel;
}

function setGameData() {
    var passed_info = localStorage.getItem('info');
    var array = passed_info.split(',');
    console.log(array);
    var stringlength = passed_info.length;
    var car = stringlength - 4;
    console.log(car);
    var num = passed_info.charAt(car);
    console.log(num);
    console.log("____");
    var gametabel = "<table id='game1table'>";
    if(passed_info.includes('geplande_releases')) {
        gametabel += "<tr><td><img class='imgvid' src='IMAGES/" + geplande_releases[num].Image + "'></td></tr>";
        gametabel += "<tr><td><strong>Naam:</strong> " + geplande_releases[num].GameNaam + "</td></tr>";
        gametabel += "<tr><td><strong>Platform:</strong> " + geplande_releases[num].Platform + "</td></tr>";
        gametabel += "<tr><td><strong>Game-genre:</strong> " + geplande_releases[num].Genre + "</td></tr>";
        gametabel += "<tr><td><strong>Over game:</strong> " + geplande_releases[num].Omschrijving + "</td></tr>";
        gametabel += "<tr><td><strong>Minimale specificaties:</strong> " + geplande_releases[num].Minimale_specificaties + "</td></tr>";
        gametabel += "<tr><td><strong>Aanbevolen specificaties:</strong> " + geplande_releases[num].Aanbevolen_specificaties + "</td></tr>";
        gametabel += "<tr><td><iframe class='imgvid' src='" + geplande_releases[num].Trailer_Link + "'></iframe></td></tr>";
        gametabel += "</table>";
        document.getElementById("showgameinfo").innerHTML = gametabel;
    } else {
        gametabel += "<tr><td><img class='imgvid' src='IMAGES/" + bestaande_games[num].Image + "'></td></tr>";
        gametabel += "<tr><td><strong>Naam:</strong> " + bestaande_games[num].GameNaam + "</td></tr>";
        gametabel += "<tr><td><strong>Platform:</strong> " + bestaande_games[num].Platform + "</td></tr>";
        gametabel += "<tr><td><strong>Game-genre:</strong> " + bestaande_games[num].Genre + "</td></tr>";
        gametabel += "<tr><td><strong>Over game:</strong> " + bestaande_games[num].Omschrijving + "</td></tr>";
        gametabel += "<tr><td><strong>Minimale specificaties:</strong> " + bestaande_games[num].Minimale_specificaties + "</td></tr>";
        gametabel += "<tr><td><strong>Aanbevolen specificaties:</strong> " + bestaande_games[num].Aanbevolen_specificaties + "</td></tr>";
        gametabel += "<tr><td><iframe class='imgvid' fullscreen src='" + bestaande_games[num].Trailer_Link + "'></iframe></td></tr>";
        gametabel += "</table>";
        document.getElementById("showgameinfo").innerHTML = gametabel;

    }
}

// Get correct data
function getGameData(array, id) {
    var test = arguments.callee.caller.toString();
    test = test.slice(test.length - 25);
    localStorage.setItem("info", test);
}