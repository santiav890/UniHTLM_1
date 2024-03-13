var contCentenario = 0;
var contMorgan = 0;
var ContZav = 0;
var contcalzon = 0;
var contfetu = 0;

function pepe() 
{
    var nodo = document.createElement('li');
    var pepe = document.getElementById('botellon').value = botellon.options[botellon.selectedIndex].value;
    if(pepe==1)
    {
        contCentenario=contCentenario+1;
        if(contCentenario<2)
        {
            nodo.appendChild(document.createTextNode ('Camiseta Seleccion Mexicana (retro) $550'));
            document.getElementById('productos').appendChild(nodo);


        }
       
        document.getElementById("cuentapepe").innerHTML = "Camiseta Seleccion Mexicana (retro) "+contCentenario;

    }

    if(pepe==2)
    {
        contMorgan=contMorgan+1;
        if(contMorgan<2)
        {
            nodo.appendChild(document.createTextNode ('Camiseta edicion especial Karim Benzema $2100'));           
            document.getElementById('productos').appendChild(nodo);
        }
        document.getElementById("cuentapepe2").innerHTML =  "Camiseta edicion especial Karim Benzema "+contMorgan;

    }

    if(pepe==3)
    {
        ContZav=ContZav+1;
        if(ContZav<2)
        {
            nodo.appendChild(document.createTextNode ('Camiseta River Plate (Local) $1200'));
            document.getElementById('productos').appendChild(nodo);
            
        }
        
        document.getElementById("cuentapepe3").innerHTML =  "Camiseta River Plate (Local) " + ContZav;

    }
    if(pepe==4)
    {
        contcalzon=contcalzon+1;
        if(contcalzon<2)
        {
            nodo.appendChild(document.createTextNode ('Tachones Mercurial (2022) $2100'));           
            document.getElementById('productos').appendChild(nodo);
        }
        document.getElementById("cuentapepe4").innerHTML =  "Tachones Mercurial (2022) "+contcalzon;

    }
    if(pepe==5)
    {
        contfetu=contfetu+1;
        if(contfetu<2)
        {
            nodo.appendChild(document.createTextNode ('Sudadera FC Barcelona (Retro) $1600'));           
            document.getElementById('productos').appendChild(nodo);
            
        }
        document.getElementById("cuentapepe5").innerHTML =  "Sudadera FC Barcelona (Retro) "+contfetu;

    }
    totalbotellas=contCentenario+contMorgan+ContZav
    total = (ContZav*1200) + (contMorgan * 2100) + (contCentenario * 550) +(contcalzon * 2100)+(contfetu * 1600)
    document.getElementById("Total").innerHTML =  "Tu total es $" + total;
       
}

function limpiar ()
{         

    contCentenario = 0;
    contMorgan = 0;
    ContZav = 0;
    contcalzon= 0;
    contfetu = 0;
    total = 0;
    document.getElementById("cuentapepe2").innerHTML =  "Taco al pastor "+contMorgan;
    document.getElementById("cuentapepe3").innerHTML =  "Taco al vapor " + ContZav;
    document.getElementById("cuentapepe").innerHTML = "Taco de birria "+contCentenario;
    document.getElementById("cuentapepe4").innerHTML = "Torta ahogada "+contcalzon;
    document.getElementById("cuentapepe5").innerHTML = "Quesadilla "+contfetu;



    document.getElementById("Total").innerHTML =  "Tu total es $" + total;

}


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')


const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    var nombre =  document.getElementById("Nombre").value
    alert(' Hola ' + nombre +' El total de tu cuenta fue de $'+ total +" Con un total de " 
    + totalbotellas + " productos ", 'success')
  })
}



var colorUrlMap = {
    "1" : "img/retromex.jpg",
    "2" : "img/benzcami.jpeg",
    "3" : "img/river.webp",
    "4" : "img/mercurial.jpg",
    "5" : "img/sudaderabarca.jpg",

};