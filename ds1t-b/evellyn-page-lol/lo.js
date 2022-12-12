
const iconEzreal = document.querySelector('.icon4');
const iconSyndra  = document.querySelector('.icon3');
const iconSoraka = document.querySelector('.icon2');
const iconMissFortune = document.querySelector('.icon1');
const iconAhri = document.querySelector('.icon0');

function onEzreal () {

    const container = document.getElementById('Ezreal')
    const containerAhri = document.getElementById('Ahri')
    const containerMissFortune =document.getElementById('MissFortune')
    const containerSyndra = document.getElementById('Syndra')
    const containerSoraka = document.getElementById('Soraka')

    containerAhri.classList.remove('on')
    containerMissFortune.classList.remove('on')
    containerSyndra.classList.remove('on')
    containerSoraka.classList.remove('on')
    container.classList.add ('on')
}
function onSyndra () {

    const container = document.getElementById('Syndra')
    const containerAhri = document.getElementById('Ahri')
    const containerMissFortune =document.getElementById('MissFortune')
    const containerEzreal = document.getElementById('Ezreal')
    const containerSoraka = document.getElementById('Soraka')

    containerEzreal.classList.remove('on')
    containerSoraka.classList.remove('on')
    containerMissFortune.classList.remove('on')
    containerAhri.classList.remove('on')
    container.classList.add ('on')
}
function onSoraka () {

    const container = document.getElementById('Soraka')
    const containerAhri = document.getElementById('Ahri')
    const containerMissFortune =document.getElementById('MissFortune')
    const containerSyndra = document.getElementById('Syndra')
    const containerEzreal = document.getElementById('Ezreal')

    containerAhri.classList.remove('on')
    containerMissFortune.classList.remove('on')
    containerSyndra.classList.remove('on')
    containerEzreal.classList.remove('on')
    container.classList.add ('on')
   
}
function onMissFortune () {

    const container = document.getElementById('MissFortune')
    const containerAhri = document.getElementById('Ahri')
    const containerSoraka = document.getElementById('Soraka')
    const containerSyndra = document.getElementById('Syndra')
    const containerEzreal = document.getElementById('Ezreal')

    containerAhri.classList.remove('on')
    containerSoraka.classList.remove('on')
    containerSyndra.classList.remove('on')
    containerEzreal.classList.remove('on')
    container.classList.add ('on')
   
}
function onAhri () {

    const container = document.getElementById('Ahri')
    const containerMissFortune = document.getElementById('MissFortune')
    const containerSoraka = document.getElementById('Soraka')
    const containerSyndra = document.getElementById('Syndra')
    const containerEzreal = document.getElementById('Ezreal')

    containerMissFortune.classList.remove('on')
    containerSoraka.classList.remove('on')
    containerSyndra.classList.remove('on')
    containerEzreal.classList.remove('on')
    container.classList.add ('on')
   
}

iconEzreal.addEventListener('click', onEzreal)
iconSyndra.addEventListener('click', onSyndra)
iconSoraka.addEventListener('click', onSoraka)
iconMissFortune.addEventListener('click', onMissFortune)
iconAhri.addEventListener('click', onAhri)