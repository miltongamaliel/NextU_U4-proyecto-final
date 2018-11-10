
var Calculadora = (function (){
  window.onload = function(){
    var grupoTeclas = document.getElementsByClassName("tecla");
    for (var i=0; i<grupoTeclas.length; i++){
        console.log(grupoTeclas[i]);
        document.getElementById(grupoTeclas[i].id).onmousedown = activaTecla;
        document.getElementById(grupoTeclas[i].id).onmouseup = desactivaTecla;
      }
      document.getElementById("mas").onmousedown = activaTecla;
      document.getElementById("mas").onmouseup = desactivaTecla;
    }
  var teclaMas = document.getElementById("mas");
  var teclaMenos = document.getElementById("menos");
  var teclaIgual = document.getElementById("igual");
  var teclaOn = document.getElementById("on");
  var operador1="", resultado="", operacion="", signo="";
  var displayDeCalculadora = document.getElementById("display");

    function activaTecla(){
      var teclaPresionada = this.id;
      document.getElementById(teclaPresionada).style.padding = "1px";
      if(teclaPresionada=="on"){
          displayDeCalculadora.innerHTML="0";
          operador1="";
      }else if (parseInt(teclaPresionada)>=0 && parseInt(teclaPresionada)<=9) {
        if(displayDeCalculadora.innerHTML=="0" && teclaPresionada!="0"){
          displayDeCalculadora.innerHTML="";
          displayCalculadora(teclaPresionada);
        }else if(displayDeCalculadora.innerHTML!="0"){
          teclaPresionada=displayDeCalculadora.innerHTML+teclaPresionada;
          displayCalculadora(teclaPresionada);
        }
      }else if (teclaPresionada=="mas" ||teclaPresionada=="menos" ||teclaPresionada=="por" ||teclaPresionada=="dividido") {
        operacion=teclaPresionada;
        if(operador1==""){
          operador1=displayDeCalculadora.innerHTML;
          displayCalculadora("0");
        }
      }else if (teclaPresionada=="igual") {
        if(operador1!=""){
            switch (operacion) {
              case "mas":
                  resultado = ( parseInt(operador1)+parseInt(displayDeCalculadora.innerHTML)).toString();
                  operacion="";
                  operador1="";
                  displayCalculadora(resultado);
                break;
                case "menos":
                    resultado = ( parseInt(operador1)-parseInt(displayDeCalculadora.innerHTML)).toString();
                    operacion="";
                    operador1="";
                    displayCalculadora(resultado);
                  break;
                  case "por":
                      resultado = ( parseInt(operador1)*parseInt(displayDeCalculadora.innerHTML)).toString();
                      operacion="";
                      operador1="";
                      displayCalculadora(resultado);
                    break;
                    case "dividido":
                        resultado = ( parseInt(operador1)/parseInt(displayDeCalculadora.innerHTML)).toString();
                        operacion="";
                        operador1="";
                        displayCalculadora(resultado);
                      break;
              default:
            }
        }
      }else if(teclaPresionada=="sign"){
        displayDeCalculadora.innerHTML= signo + displayDeCalculadora.innerHTML;
        if(signo==""){
          displayDeCalculadora.innerHTML.signo="-"
        }else if(signo=="-"){
          displayDeCalculadora.innerHTML.signo="";
        }

      }
    }
    function desactivaTecla(){
      var teclaPresionada = this.id;
      document.getElementById(teclaPresionada).style.padding = "0px";
    }

    function displayCalculadora (valorDeEntrada){
      var cadena8Caracteres="", i=0, caracteresMaxPermitidos= 8;
      if (valorDeEntrada.length<8){
          caracteresMaxPermitidos=valorDeEntrada.length;
      }
      for(i=0; i<caracteresMaxPermitidos ; i++){
        cadena8Caracteres = cadena8Caracteres + valorDeEntrada.charAt(i);
      }
      console.log("el tamano del string a mostrar es de: ");
      displayDeCalculadora.innerHTML =cadena8Caracteres;
    }
})();
