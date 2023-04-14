const seccionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
const seccionReiniciar=document.getElementById("reiniciar")
const botonSeleccionarMascota=document.getElementById("boton-seleccionar-heroe")
const botonGolpe=document.getElementById("boton-golpe")
const botonEspada=document.getElementById("boton-espada")
const botonMagia=document.getElementById("boton-magia")
const botonEscudo=document.getElementById("boton-escudo")
const botonReiniciar=document.getElementById("boton-reiniciar")

const seccionSeleccionarHeroe=document.getElementById("seleccionar-heroe")
const inputAcke=document.getElementById("Acke")
const inputAleksanteri=document.getElementById("Aleksanteri")
const inputBendt=document.getElementById("Bendt")
const inputBorg=document.getElementById("Borg")
const spanMascotaJugador=document.getElementById("heroe-seleccionado")

const spanMascotaEnemigo=document.getElementById("heroe-enemigo")

const spanVidaJugador=document.getElementById("vida-jugador")
const spanVidaEnemigo=document.getElementById("vida-enemigo")

const sectionMensajes=document.getElementById("resultado")
const ataquesDelJugador=document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo=document.getElementById("ataque-del-enemigo")

let heroes=[]
let ataqueJugador
let ataqueEnemigo
let vidaJugador=5
let vidaEnemigo=5

class Heroes{
    constructor(nombre, foto, vida){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques= []
    }
}

let Acke=new Heroes("Acke", "./imagen/6e0776d54698d264a3c39656fb723ac9.png", 5)
let Aleksanteri=new Heroes("Aleksanteri", "./imagen/b9ba9e5d6f9a67ea508d1788e62afbd0.png", 5)
let Bendt=new Heroes("Bendt", "./imagen/cda720d6869bbed053b9d580e8a00a44.png", 5)
let Borg=new Heroes("Borg", "./imagen/dwarf-5712059_960_720.png", 5)

Acke.ataques.push(
    {nombre:'👊',id:'boton-golpe'},
    {nombre:'👊',id:'boton-golpe'},
    {nombre:'👊',id:'boton-golpe'},
    {nombre:'⚔️',id:'boton-espada'},
    {nombre:'🛡️',id:'boton-escudo'},
)

Aleksanteri.ataques.push(
    {nombre:"👊",id:"boton-golpe"},
    {nombre:"👊",id:"boton-golpe"},
    {nombre:"🧙‍♂️",id:"boton-magia"},
    {nombre:"⚔️",id:"boton-espada"},
    {nombre:"🛡️",id:"boton-escudo"},
)

Bendt.ataques.push(
    {nombre:"👊",id:"boton-golpe"},
    {nombre:"👊",id:"boton-golpe"},
    {nombre:"👊",id:"boton-golpe"},
    {nombre:"⚔️",id:"boton-espada"},
    {nombre:"🛡️",id:"boton-escudo"},
)

Borg.ataques.push(
    {nombre:"👊",id:"boton-golpe"},
    {nombre:"👊",id:"boton-golpe"},
    {nombre:"👊",id:"boton-golpe"},
    {nombre:"⚔️",id:"boton-espada"},
    {nombre:"🛡️",id:"boton-escudo"},
)

function iniciarJuego(){
    
    seccionSeleccionarAtaque.style.display="none"
    seccionReiniciar.style.display="none"
    
    botonSeleccionarMascota.addEventListener("click", seleccionarHeroe)
    botonGolpe.addEventListener("click", ataqueGolpe)
    botonEspada.addEventListener("click", ataqueEspada)
    botonMagia.addEventListener("click", ataqueMagia)
    botonEscudo.addEventListener("click", ataqueEscudo)
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}
function seleccionarHeroe(){
    seccionSeleccionarHeroe.style.display="none"
    seccionSeleccionarAtaque.style.display="flex"
    
    if (inputAcke.checked){
        spanMascotaJugador.innerHTML="Acke"
    }else if (inputAleksanteri.checked){
        spanMascotaJugador.innerHTML="Aleksanteri"
    }else if (inputBendt.checked){
        spanMascotaJugador.innerHTML="Bendt"
    }else if (inputBorg.checked){
        spanMascotaJugador.innerHTML="Borg"
    }
    else
        alert("¡¡No has seleccionado ningun heroe!!")
    seleccionarMascotaDelEnemigo()        
}
function seleccionarMascotaDelEnemigo(){
    let mascotaAleatoria=aleatorio(1,4)

    if (mascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML="Acke"    
    }else if (mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML="Aleksanteri"
    }else if (mascotaAleatoria==3){
        spanMascotaEnemigo.innerHTML="Bendt"
    }else if (mascotaAleatoria==4){
        spanMascotaEnemigo.innerHTML="Borg"
    }
}
function ataqueEspada(){
    ataqueJugador="ESPADA"
    ataqueAleatorioEnemigo()
}
function ataqueEscudo(){
    ataqueJugador="ESCUDO"
    ataqueAleatorioEnemigo()
}
function ataqueGolpe(){
    ataqueJugador="GOLPE"
    ataqueAleatorioEnemigo()
}
function ataqueMagia(){
    ataqueJugador="MAGIA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(1,4)

    if (ataqueAleatorio==1){
        ataqueEnemigo="ESPADA"
    }else if (ataqueAleatorio==2){
        ataqueEnemigo="ESCUDO"
    }else if (ataqueAleatorio==3){
        ataqueEnemigo="GOLPE"
    }else if (ataqueAleatorio==4){
        ataqueEnemigo="MAGIA"
    }
    batalla()
}
function batalla(){
    if(ataqueJugador==ataqueEnemigo){
        crearMensaje("EMPATE")
    } else if(ataqueJugador=="ESPADA" && ataqueEnemigo=="GOLPE"){
        crearMensaje("¡HAS GANADO!")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML=vidaEnemigo
    } else if(ataqueJugador=="ESCUDO" && ataqueEnemigo=="ESPADA"){
        crearMensaje("¡HAS GANADO!")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML=vidaEnemigo
    } else if(ataqueJugador=="GOLPE" && ataqueEnemigo=="ESCUDO"){
        crearMensaje("¡HAS GANADO!")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML=vidaEnemigo
    }else if (ataqueJugador=="MAGIA" && ataqueEnemigo=="GOLPE"){
        crearMensaje("¡HAS GANADO!")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML=vidaEnemigo
    }else if (ataqueJugador=="MAGIA" && ataqueEnemigo=="ESPADA"){
        crearMensaje("¡HAS GANADO!")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML=vidaEnemigo
    }else{
        crearMensaje("PERDISTE")
        vidaJugador--
        spanVidaJugador.innerHTML=vidaJugador
    }   
    revisarVidas()
}
function revisarVidas(){
    if(vidaJugador==0){
        crearMensajeFinal("HAS PERDIDO")
    }else if(vidaEnemigo==0){
        crearMensajeFinal("HAS GANADO")
    }
}
function crearMensaje(resultado){
    let nuevoAtaqueDelJugador=document.createElement('p')
    let nuevoAtaqueDelEnemigo=document.createElement('p')

    sectionMensajes.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML=ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML=ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML=resultado=resultadoFinal
    
    botonGolpe.disabled=true
    botonEspada.disabled=true
    botonMagia.disabled=true
    botonEscudo.disabled=true
    
    seccionReiniciar.style.display="block"
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener("load", iniciarJuego)