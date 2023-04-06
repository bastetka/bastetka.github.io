var GM = {
    init: function () {
        this.initCache();
        this.initMap();
        //this.initBannerTopParallax();
    },

    initCache: function() {
        this.$body         = $('body');
        this.$popupContent = $('.js-marker-content');
        
    },

    

    initMap: function () {
        var coordinates = {lat: 25.124711, lng: 55.380701},
            popupContent = this.$popupContent.html(),
            markerImage = 'images/map.svg',
            zoom = 20,

            map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: zoom,
                disableDefaultUI: true,
                scrollwheel: true,
                styles : [{
                    featureType : "all",
                    stylers : [{
                            saturation : -200
                        }
                    ]
                }
            ]
            }),

            infowindow = new google.maps.InfoWindow({
                content: popupContent
            }),

            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: {
                    url: "https://whitewill.ae/img/map.svg",
                    scaledSize: new google.maps.Size(64, 64)
                }
            });

        $.getJSON("../json/map-style/map-style_colored.json", function (data) {
            map.setOptions({styles: data});
        });

        


        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        //infowindow.open(map, marker);
    }
};

$(document).ready(function() {
    GM.init();
});
