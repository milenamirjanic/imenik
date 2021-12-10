var osobe = [];

function napraviOsobu(ime, telefon){
    var obj = {};
    obj.ime = ime;
    obj.telefon=  telefon;
    obj.prikaziSe = function(i){
        var str = '<div class="person"><i class="fas fa-user"></i><p>'+this.ime+'</p><p><b>'+this.telefon+'</b> </p><i data-index="'+i+'" onclick="izbrisi(this)" class="fas fa-user-times"></i></div>';
        return str;
    }
    return obj;
}


function prikaziOsobe(){
    var spisak = document.getElementById("contacts");
    spisak.innerHTML = "";
    for(var i = 0; i < osobe.length; i++){
        spisak.innerHTML += osobe[i].prikaziSe(i);
    }
}

function dodajOsobu(){
    var ime = document.getElementById("nameInput").value;
    var broj = document.getElementById("numberInput").value;

    if(ime.trim() == "" || broj.trim()=="") {return;}

    var novaOsoba = napraviOsobu(ime, broj);
    osobe.push(novaOsoba);
    prikaziOsobe();

    document.getElementById("nameInput").value = "";
    document.getElementById("numberInput").value ="";
}

function izbrisi(el) {
    var element = el;
    x = element.getAttribute("data-index");
    x= parseInt(x);
    osobe.splice(x, 1);
    prikaziOsobe();
}