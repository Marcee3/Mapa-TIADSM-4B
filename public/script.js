// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes
// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Crear un ícono personalizado
var icon1 = L.icon({
    iconUrl: 'https://img.icons8.com/?size=100&id=107436&format=png&color=000000', // URL de la imagen del ícono
    iconSize: [25, 41], // Tamaño del ícono
    iconAnchor: [12, 41], // Punto del ícono que corresponde a la ubicación del marcador
    popupAnchor: [1, -34] // Punto del pop-up que corresponde al ícono
});
var icon2 = L.icon({
    iconUrl: 'https://img.icons8.com/?size=100&id=p8u5DVmPEnOL&format=png&color=000000', // URL de la imagen del ícono
    iconSize: [25, 41], // Tamaño del ícono
    iconAnchor: [12, 41], // Punto del ícono que corresponde a la ubicación del marcador
    popupAnchor: [1, -34] // Punto del pop-up que corresponde al ícono
});
var icon3 = L.icon({
    iconUrl: 'https://img.icons8.com/?size=100&id=svF8ZHwtgbpX&format=png&color=000000', // URL de la imagen del ícono
    iconSize: [25, 41], // Tamaño del ícono
    iconAnchor: [12, 41], // Punto del ícono que corresponde a la ubicación del marcador
    popupAnchor: [1, -34] // Punto del pop-up que corresponde al ícono
});
// Añadir un marcador en Aguascalientes capital con el ícono personalizado
var marker = L.marker([21.88234, -102.28259], { icon: icon1 }).addTo(map);
// Añadir un pop-up al marcador
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Marcador en la Plaza de la Patria
var plazaPatria = L.marker([21.88187, -102.29495], { icon: icon2 }).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

// Marcador en el Museo Nacional de la Muerte
var museoMuerte = L.marker([21.88417, -102.28878], { icon: icon3 }).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = 
L.circle([21.87888, -102.29727], {
    color: '#117a65',
    fillColor: '#5d9a8e',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
], {
    color: '#ff6400',
    fillColor: '#f0965b',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};
var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
};
L.control.layers(baseMaps, overlayMaps).addTo(map);