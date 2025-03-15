ymaps.ready(startmap);
		var myMap, myplacemark;

		function startmap() {
			myMap = new ymaps.Map("map", {
				center: [34.0675198,-118.4042346],
				zoom: 9,
				controls: ["zoomControl", "fullscreenControl"]
			});
			myplacemark = new ymaps.GeoObject({
				geometry: {
					type: "Point",
					coordinates: [34.0675198,-118.4042346]
				},
				properties: {
					balloonContentHeader: "<p class='text-lg font-medium'>Beverly Hills Stores</p>",
					balloonContentBody: "<p class='text-gray-900 font-medium h-4 p-2'>Rodeo Dr, Beverly Hills, CA</p>"
				}
			}, {
				iconLayout: "default#image",
				iconImageHref: "images/pin.png",
				iconImageSize: [70, 98],
				iconImageOffset: [-30, -120],
				iconContentOffset: [0]
			});
			myMap.geoObjects.add(myplacemark);
			myMap.behaviors.disable("scrollZoom")
		};
		