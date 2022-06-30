let repetir = true


while(repetir){
let numero = parseInt(prompt("¿Cantidad de provincias en la Argentina?"))
  if(numero===23){
    repetir= false
    alert("has acertado")
}  else if(isNaN(numero)){
    alert("solo puedes ingresar numeros")
}
    else{
        alert("sigue intentando")
    }

}