// radio

    function showInput() {
        document.getElementById('display').innerHTML = 
        document.getElementById("user_input").value;
        }

    onload = function check() {
        document.getElementById("radionull").checked = true;
        }


        function Submit() {
            var pickedOne = false;
            var inputs = document.getElementsByClassName('sound');
            for(var i = 0, l = inputs.length; i < l; ++i) {
              if(inputs[i].checked) {
                pickedOne = true;
                alert('You picked ' + inputs[i].className);
                break;
              }
            }
            if(!pickedOne) {
              alert('none');
            }
          }

    function mostrar(dato) {
        if (dato == "1") {
            document.getElementById("Bariloche").style.display = "block";
            document.getElementById("LagoPuelo").style.display = "none";
            document.getElementById("ElBolson").style.display = "none";
            document.getElementById("ElijaDestino").style.display = "none";
            document.getElementById("destinoSidebar").innerHTML = "Bariloche";
            }
        if (dato == "2") {
            document.getElementById("Bariloche").style.display = "none";
            document.getElementById("LagoPuelo").style.display = "block";
            document.getElementById("ElBolson").style.display = "none";
            document.getElementById("ElijaDestino").style.display = "none";
            document.getElementById("destinoSidebar").innerHTML = "Lago Puelo"
            }
        if (dato == "3") {
            document.getElementById("Bariloche").style.display = "none";
            document.getElementById("LagoPuelo").style.display = "none";
            document.getElementById("ElBolson").style.display = "block";
            document.getElementById("ElijaDestino").style.display = "none";
            document.getElementById("destinoSidebar").innerHTML = "El Bolsón"
            }
        }

// transporte

    function transporte() {
        document.getElementById("trans").style.display = "block";
        var x = document.getElementById("tren").value;

        if (x == "Micro") {
            document.getElementById("aviones").style.display = "none";
            document.getElementById("micros").style.display = "block";
        }

        if (x == "Avion") {            
            document.getElementById("aviones").style.display = "block";
            document.getElementById("micros").style.display = "none";
        }
    } 

    function transporte2() {
        var x = document.getElementById("tren").value;
        if (x == "Micro") {
            var y = document.getElementById("micros").value
        }

        if (x == "Avion") {            
            var y = document.getElementById("aviones").value
        }

        document.getElementById("transporteSidebar").innerHTML =  x + ". Empresa: " + y
    }

// login 

    function changeTab(evt, category) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(category).style.display = "block";
        document.getElementById(evt).className += " active";
    }

    function show() {
        document.getElementById("t11").click();
    }

// actividades

function checkActividades(x, y) {
    // Get the checkbox
    var checkBox = document.getElementById(""+y+x);
    var value = document.getElementById(""+y+x).value
    // Get the output text
    var text = document.getElementById("actividadesSidebar"+x);
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        text.innerHTML = value
    } else {
        text.style.display = "none";
    }
  }

