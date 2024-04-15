

const initYMap = () => {
	let apiMaps = document.createElement('script');
	apiMaps.src = 'https://api-maps.yandex.ru/v3/?apikey=aa3cd728-854e-4fa5-bc2a-586e462cc82d&lang=ru_RU';
	apiMaps.type = 'text/javascript';
	document.querySelector('#api-maps').appendChild(apiMaps);
	setTimeout(() => {
		
		if (document.getElementById('contacts__map')) {
			window.map = null;

			// Главная функция, вызывается при запуске скрипта
			main();
			async function main() {
				// ожидание загрузки модулей
				await ymaps3.ready;
				const {
					YMap,
					YMapDefaultSchemeLayer,
					YMapControls,
					YMapDefaultFeaturesLayer,
					YMapMarker
				} = ymaps3;
			
				// Импорт модулей для элементов управления на карте
				const {
					YMapZoomControl,
					YMapGeolocationControl
				} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
			
				// Координаты центра карты 55.708521, 37.653510
				const CENTER_COORDINATES = [37.653510, 55.708521];
				// координаты метки на карте
				const MARKER_COORDINATES = [37.653510, 55.708521];
			
				// Объект с параметрами центра и зумом карты
				const LOCATION = {
					center: CENTER_COORDINATES, 
					zoom: 17, 
				};
			
				// Создание объекта карты
				map = new YMap(document.getElementById('contacts__map'), {
					location: LOCATION, 
					showScaleInCopyrights: true, 
					theme: "dark"
				}, );
			
				// Добавление слоев на карту
				map.addChild(new YMapDefaultSchemeLayer());
				map.addChild(new YMapDefaultFeaturesLayer());
			
				// Добавление элементов управления на карту
				//   map.addChild(new YMapControls({position: 'right'})
				// 	.addChild(new YMapZoomControl({}))
				//   );
				//   map.addChild(new YMapControls({position: 'top right'})
				// 	.addChild(new YMapGeolocationControl({}))
				//   );
			
				// Создание маркера
				const el = document.createElement('img');
				el.className = 'my-marker';
				el.src = 'assets/img/map-icon.png';
				el.title = 'Маркер';
				// При клике на маркер меняем центр карты на LOCATION с заданным duration
				el.onclick = () => map.update({location: {...LOCATION, duration: 400}});
			
				// Создание заголовка маркера
				const markerTitle = document.createElement('div');
				
				markerTitle.className = 'marker-title';
				markerTitle.innerHTML = 'Заголовок маркера';
			
				// Контейнер для элементов маркера
				const imgContainer = document.createElement('div');
				imgContainer.appendChild(el);
				//   imgContainer.appendChild(markerTitle);
			
				// Добавление центра карты
				map.addChild(new YMapMarker({coordinates: CENTER_COORDINATES}));
			
				// Добавление маркера на карту
				map.addChild(new YMapMarker({coordinates: MARKER_COORDINATES}, imgContainer));
			}
		
		}
	}, 500)	
}

export default initYMap;