var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_VLSsumbawabarat_1 = new ol.format.GeoJSON();
var features_VLSsumbawabarat_1 = format_VLSsumbawabarat_1.readFeatures(json_VLSsumbawabarat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VLSsumbawabarat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VLSsumbawabarat_1.addFeatures(features_VLSsumbawabarat_1);
var lyr_VLSsumbawabarat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VLSsumbawabarat_1, 
                style: style_VLSsumbawabarat_1,
                popuplayertitle: 'VLS sumbawabarat',
                interactive: true,
                title: '<img src="styles/legend/VLSsumbawabarat_1.png" /> VLS sumbawabarat'
            });
var format_vls_sumbawa_2 = new ol.format.GeoJSON();
var features_vls_sumbawa_2 = format_vls_sumbawa_2.readFeatures(json_vls_sumbawa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vls_sumbawa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vls_sumbawa_2.addFeatures(features_vls_sumbawa_2);
var lyr_vls_sumbawa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vls_sumbawa_2, 
                style: style_vls_sumbawa_2,
                popuplayertitle: 'vls_sumbawa',
                interactive: true,
                title: '<img src="styles/legend/vls_sumbawa_2.png" /> vls_sumbawa'
            });
var format_SURVEItitiksurvei_3 = new ol.format.GeoJSON();
var features_SURVEItitiksurvei_3 = format_SURVEItitiksurvei_3.readFeatures(json_SURVEItitiksurvei_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SURVEItitiksurvei_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SURVEItitiksurvei_3.addFeatures(features_SURVEItitiksurvei_3);
var lyr_SURVEItitiksurvei_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SURVEItitiksurvei_3, 
                style: style_SURVEItitiksurvei_3,
                popuplayertitle: 'SURVEI — titiksurvei',
                interactive: true,
                title: '<img src="styles/legend/SURVEItitiksurvei_3.png" /> SURVEI — titiksurvei'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_VLSsumbawabarat_1.setVisible(true);lyr_vls_sumbawa_2.setVisible(true);lyr_SURVEItitiksurvei_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_VLSsumbawabarat_1,lyr_vls_sumbawa_2,lyr_SURVEItitiksurvei_3];
lyr_VLSsumbawabarat_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'RIN_FP': 'RIN_FP', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'VLS_2026': 'VLS_2026', 'Luas_HA': 'Luas_HA', 'SD_2026': 'SD_2026', 'REMARK_2026': 'REMARK_2026', });
lyr_vls_sumbawa_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'RIN_FP': 'RIN_FP', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'VLS_2026': 'Verifikasi Lahan Sawah tahun 2026', 'Luas_HA': 'Luas_HA', 'SD_2026': 'Sumber Data Citra tahun 2026', 'REMARK_2026': 'Keterangan', });
lyr_SURVEItitiksurvei_3.set('fieldAliases', {'fid': 'fid', 'OBSERVASI': 'Nomor Sampel', 'PL_EKSIS': 'Penutup Lahan Eksisting', 'HISTORI': 'Historis 3 Tahun Terakhir', 'DATE': 'DATE', 'FOTO': 'FOTO', });
lyr_VLSsumbawabarat_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'RIN_FP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'VLS_2026': 'Range', 'Luas_HA': 'TextEdit', 'SD_2026': 'TextEdit', 'REMARK_2026': 'TextEdit', });
lyr_vls_sumbawa_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'RIN_FP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'VLS_2026': 'ValueMap', 'Luas_HA': 'TextEdit', 'SD_2026': 'TextEdit', 'REMARK_2026': 'TextEdit', });
lyr_SURVEItitiksurvei_3.set('fieldImages', {'fid': 'TextEdit', 'OBSERVASI': 'TextEdit', 'PL_EKSIS': 'TextEdit', 'HISTORI': 'TextEdit', 'DATE': 'DateTime', 'FOTO': 'ExternalResource', });
lyr_VLSsumbawabarat_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'RIN_FP': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'VLS_2026': 'no label', 'Luas_HA': 'no label', 'SD_2026': 'no label', 'REMARK_2026': 'no label', });
lyr_vls_sumbawa_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'RIN_FP': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'VLS_2026': 'no label', 'Luas_HA': 'no label', 'SD_2026': 'no label', 'REMARK_2026': 'no label', });
lyr_SURVEItitiksurvei_3.set('fieldLabels', {'fid': 'no label', 'OBSERVASI': 'no label', 'PL_EKSIS': 'inline label - always visible', 'HISTORI': 'no label', 'DATE': 'no label', 'FOTO': 'no label', });
lyr_SURVEItitiksurvei_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});