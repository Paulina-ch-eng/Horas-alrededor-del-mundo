function mostrarHora() {
    let d = new Date();
    let santiagoTime = d.getHours();

    //  Diferencias horarias
     let parisTime = (santiagoTime + 6) % 24; // 6 horas más
     let londresTime = (santiagoTime + 5) % 24;
     let nuevaYorkTime = santiagoTime; // Misma hora que Santiago
     let sanPetersburgoTime = (santiagoTime + 7) % 24;
     let beijingTime = (santiagoTime + 12) % 24;
     let seulTime = (santiagoTime + 13) % 24;


    //   Actualizar los relojes en cada ciudad

    document.getElementById("reloj-santiago").innerHTML = `${santiagoTime}:${d.getMinutes()}:${d.getSeconds()}`
    document.getElementById("reloj-paris").innerHTML = `${parisTime}:${d.getMinutes()}:${d.getSeconds()}`;
    document.getElementById("reloj-londres").innerHTML = `${londresTime}:${d.getMinutes()}:${d.getSeconds()}`;
    document.getElementById("reloj-nueva-york").innerHTML = `${nuevaYorkTime}:${d.getMinutes()}:${d.getSeconds()}`;
    document.getElementById("reloj-san-petersburgo").innerHTML = `${sanPetersburgoTime}:${d.getMinutes()}:${d.getSeconds()}`;
    document.getElementById("reloj-beijing").innerHTML = `${beijingTime}:${d.getMinutes()}:${d.getSeconds()}`;
    document.getElementById("reloj-seul").innerHTML = `${seulTime}:${d.getMinutes()}:${d.getSeconds()}`;
}
   setInterval(mostrarHora,1000)



   document.addEventListener('DOMContentLoaded', () => {
    const ciudades = [
        { id: 'reloj-santiago', delay: 0 },    // Santiago - Se muestra al cargar la página
        { id: 'reloj-paris', delay: 4000 },    // París - 4 segundos después
        { id: 'reloj-londres', delay: 8000 },  // Londres - 8 segundos después
        { id: 'reloj-nueva-york', delay: 12000 }, // Nueva York - 12 segundos después
        { id: 'reloj-san-petersburgo', delay: 16000 }, // San Petersburgo - 16 segundos después
        { id: 'reloj-beijing', delay: 20000 }, // Beijing - 20 segundos después
        { id: 'reloj-seul', delay: 24000 }    // Seúl - 24 segundos después
    ];

    // Oculta todos los relojes inicialmente
    ciudades.forEach(ciudad => {
        document.getElementById(ciudad.id).style.display = 'none';
    });

    // Muestra cada reloj en el momento adecuado
    ciudades.forEach(ciudad => {
        setTimeout(() => {
            document.getElementById(ciudad.id).style.display = 'block';
        }, ciudad.delay);
    });
});



