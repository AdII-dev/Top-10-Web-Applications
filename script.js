let webAppsData = [
    {"name": "Google Search", "users": "2 Billion"},
    {"name": "YouTube", "users": "1.9 Billion"},
    {"name": "Facebook", "users": "2.8 Billion"},
    {"name": "Gmail", "users": "1.5 Billion"},
    {"name": "WhatsApp Web", "users": "2 Billion"},
    {"name": "Amazon", "users": "300 Million"},
    {"name": "Twitter", "users": "330 Million"},
    {"name": "Zoom", "users": "300 Million"},
    {"name": "LinkedIn", "users": "740 Million"},
    {"name": "Google Drive", "users": "1 Billion"}
];
//Adat konvertálása számmá billion, million
function convert(usersString){
    let users = parseFloat(usersString)
    if (usersString.includes('Billion')){
        users *=1000;
    }
    return users;
}

//Táblázatba az adatok beolvasása
function buildTable(data){
    //táblázat elemeinek eltárolása
    let table = document.getElementById("webAppsTable");
    console.log(table);
    //ha vannak sorok, törölje le!
    while(table.rows.length > 1){
        table.deleteRow(1);
    }
    
    for (let i = 0; i < data.length; i++) {
        //Szükséges html elemek létrehozása  
        let row = document.createElement('tr');
        //name app neve
        let nameCell = document.createElement('td');
        nameCell.textContent = data[i].name;
        row.appendChild(nameCell)
        //userek száma
        let usersCell = document.createElement('td');
        usersCell.textContent = data[i].users;
        row.appendChild(usersCell)

        // az új sorokat hozzá fűzzük a táblázathoz
        table.appendChild(row)
    }

}
//ablak betöltésekor adatok megjelenítése
window.onload = function() {
    buildTable(webAppsData);

    //sortMost
    document.getElementById("sortMost").addEventListener('click', function(){webAppsData.sort(function(a,b){
        return convert(b.users) - convert(a.users);
    })
    buildTable(webAppsData);
});
    //sortFewest
    document.getElementById("sortFewest").addEventListener('click', function(){webAppsData.sort(function(a,b){
        return convert(b.users) - convert(a.users);
    })
    buildTable(webAppsData);
})

}
