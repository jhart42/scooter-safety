$(document).ready(() => {


  function hideAll() {
    $('#gloves_text').hide();
    $('#boots_text').hide();
    $('#helmet_text').hide();
  }

    hideAll();

$('#helmet_icon').on('click', () => {
  $('#helmet_text').toggle();

});

$('#gloves_icon').on('click', () => {
  $('#gloves_text').toggle();
});

$('#boots_icon').on('click', () => {
  $('#boots_text').toggle();
});

});


let scoot_map = L.map('scoot_map').setView([29.648, -82.324], 11.45);
L.tileLayer('https://api.mapbox.com/styles/v1/jhart42/cjp387ybj2aie2slbiozdq2tv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamhhcnQ0MiIsImEiOiJjanAzODI0cTYwOTF2M3BzYTB1Y3FxdDhtIn0.pfvZW_8Dz-cnaVMJ4zKVEQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(scoot_map);

let harley = L.marker([29.692656,	-82.450589]).addTo(scoot_map);
harley.bindPopup("<b>Gainesville Harley-Davidson</b>").openPopup();

let ns4l = L.marker([29.657741,	-82.339177]).addTo(scoot_map);
ns4l.bindPopup("<b>New Scooters 4 Less</b>");

let solano = L.marker([29.641613, -82.32616]).addTo(scoot_map);
solano.bindPopup("<b>Solano Cycle of Gainesville</b>");

let south = L.marker([29.694248,	-82.339344]).addTo(scoot_map);
south.bindPopup("<b>Southern Scooters and Atvs Inc.</b>");

let walmart = L.marker([29.664485,	-82.300654]).addTo(scoot_map);
walmart.bindPopup("<b>Walmart Supercenter</b>");
