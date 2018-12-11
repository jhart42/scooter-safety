

let choco_map = L.map('choco_map').setView([28.597, -81.854], 6.2);

L.tileLayer('https://api.mapbox.com/styles/v1/jhart42/cjp387ybj2aie2slbiozdq2tv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamhhcnQ0MiIsImEiOiJjanAzODI0cTYwOTF2M3BzYTB1Y3FxdDhtIn0.pfvZW_8Dz-cnaVMJ4zKVEQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(choco_map);


for ( let i = 0; i < places.length; i++ ) {
//  L.marker( [ places[i].latitude, places[i].longitude ] )
//  .bindPopup( '<h3>' + places[i].placeName = '</h3>' + '<p>' + places[i].descrip + '</p>' )
//  .addTo( choco_map );
};
