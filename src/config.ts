import { TFunction } from 'i18next';
import { LocationArea, LocationBuilding } from './types';

import locationAirport from './assets/static-locations/location-airport.svg';
import locationCamp from './assets/static-locations/location-camp.svg';
import locationCenter from './assets/static-locations/location-center.svg';
import locationCloth from './assets/static-locations/location-cloth.svg';
import locationHome from './assets/static-locations/location-home.svg';
import locationMuseum from './assets/static-locations/location-museum.svg';
import locationMyHome from './assets/static-locations/location-my-home.svg';
import locationShip from './assets/static-locations/location-ship.svg';
import locationShop from './assets/static-locations/location-shop.svg';
import locationStreetAirportRoad from './assets/static-locations/location-street-airport-road.svg';
import locationStreetCenterRoad from './assets/static-locations/location-street-center-road.svg';
import locationStreetEastCoastalRoad from './assets/static-locations/location-street-east-coastal-road.svg';
import locationFarmRoad from './assets/static-locations/location-street-farm-road.svg';
import locationHome12 from './assets/static-locations/location-street-home-1-2.svg';
import locationHome34 from './assets/static-locations/location-street-home-3-4.svg';
import locationHome510 from './assets/static-locations/location-street-home-5-10.svg';
import locationHomeCenter from './assets/static-locations/location-street-home-center.svg';
import locationMuseumRoad from './assets/static-locations/location-street-museum-road.svg';
import locationUniversityRoad from './assets/static-locations/location-street-university-road.svg';

export function getAreas(t: TFunction): LocationArea[] {
    return [
        {
            name: 'shopping',
            text: t('map.areas.shopping.text'),
            address: '中央區',
            x: 38.4,
            y: 61,
            type: 'street',
            width: 14.8,
            height: 14.8,
            color: 'rgba(187, 255, 239, 0.5)',
        },
        {
            name: 'cultural-exchange',
            text: t('map.areas.cultural-exchange.text'),
            address: '中央區',
            x: 38.4,
            y: 76.5,
            type: 'street',
            width: 8.8,
            height: 7.8,
            color: 'rgba(255, 255, 255, 0.5)',
        },
        {
            name: 'public-arts-stage',
            text: t('map.areas.public-arts-stage.text'),
            address: '中央區',
            x: 47.9,
            y: 76.5,
            type: 'street',
            width: 4.9,
            height: 7.8,
            color: 'rgba(167, 167, 167, 0.5)',
        },
        {
            name: 'university',
            text: t('map.areas.university.text'),
            address: '中央區大學道 2-3 號',
            x: 67,
            y: 75.2,
            type: 'street',
            width: 16.8,
            height: 8.8,
            color: 'rgba(255, 187, 187, 0.5)',
        },
        {
            name: 'car-park',
            text: t('map.areas.car-park.text'),
            address: '中央區大學道 1 號',
            x: 56.9,
            y: 75.2,
            type: 'street',
            width: 9.8,
            height: 8.8,
            color: 'rgba(255, 237, 187, 0.5)',
        },
        {
            name: 'toilet',
            text: t('map.areas.toilet.text'),
            address: '中央區大學道 4 號 / 中央區中間道 1 號',
            x: 68.4,
            y: 59.8,
            type: 'street',
            width: 3.8,
            height: 6.9,
            color: 'rgba(193, 143, 0, 0.5)',
        },
        {
            name: 'shop',
            text: t('map.areas.shop.text'),
            address: '中央區大學道 5 號 / 中央區中間道 2 - 3 號',
            x: 72.9,
            y: 59.8,
            type: 'street',
            width: 10.9,
            height: 6.9,
            color: 'rgba(82, 255, 167, 0.5)',
            description: '全店免費，歡迎帶走物品，每天 24 小時營業',
        },
        {
            name: 'restaurant',
            text: t('map.areas.restaurant.text'),
            address: '中央區中間道 4 - 6 號',
            x: 68.4,
            y: 41.8,
            type: 'street',
            width: 15.4,
            height: 5.5,
            color: 'rgba(255, 82, 226, 0.5)',
        },
        {
            name: 'coastal-park',
            text: t('map.areas.coastal-park.text'),
            address: '中央區傑克街 3 號',
            x: 13.1,
            y: 74.6,
            type: 'street',
            width: 21.4,
            height: 20,
            color: 'rgba(255, 82, 226, 0.5)',
        },
        {
            name: 'peaches',
            text: t('map.areas.peaches.text'),
            address: '農場',
            x: 80.1,
            y: 12.6,
            type: 'street',
            width: 8.4,
            height: 24,
            color: 'rgba(255, 153, 233, 0.5)',
        },
        {
            name: 'apples',
            text: t('map.areas.apples.text'),
            address: '農場',
            type: 'street',
            x: 68.1,
            y: 27.6,
            width: 11.4,
            height: 9,
            color: 'rgba(255, 153, 153, 0.5)',
        },
        {
            name: 'oranges',
            text: t('map.areas.oranges.text'),
            address: '農場',
            type: 'street',
            x: 53.1,
            y: 27.6,
            width: 14.4,
            height: 9,
            color: 'rgba(255, 191, 153, 0.5)',
        },
        {
            name: 'flowers',
            text: t('map.areas.flowers.text'),
            address: '半山區農場',
            type: 'street',
            x: 59.1,
            y: 12.6,
            width: 20.4,
            height: 12,
            color: 'rgba(230, 96, 255, 0.5)',
        },
        {
            name: 'bridge-home',
            text: t('map.areas.bridge-home.text'),
            address: '住宅區',
            x: 35.2,
            y: 71.6,
            type: 'bridge',
            width: 2.5,
            height: 1.5,
        },
        {
            name: 'bridge-home-2',
            text: t('map.areas.bridge-home-2.text'),
            address: '住宅區',
            x: 44.1,
            y: 49.2,
            type: 'bridge',
            width: 2.5,
            height: 1.5,
        },
        {
            name: 'bridge-center',
            text: t('map.areas.bridge-center.text'),
            address: '住宅區',
            x: 61.3,
            y: 43.7,
            type: 'bridge',
            width: 2.5,
            height: 1.5,
        },
    ];
}

export function getBuildings(t: TFunction): LocationBuilding[] {
    return [
        {
            name: 'street-home-1-2',
            text: t('map.buildings.street-home-1-2.text'),
            address: '住宅區',
            x: 13,
            y: 70.7,
            width: 203,
            svg: locationHome12,
        },
        {
            name: 'street-home-3-4',
            text: t('map.buildings.street-home-3-4.text'),
            address: '住宅區',
            x: 13,
            y: 60,
            width: 123,
            svg: locationHome34,
        },
        {
            name: 'street-home-5-10',
            text: t('map.buildings.street-home-5-10.text'),
            address: '住宅區',
            x: 13,
            y: 48.5,
            width: 285,
            svg: locationHome510,
        },
        {
            name: 'street-home-center',
            text: t('map.buildings.street-home-center.text'),
            address: '住宅區',
            x: 26.4,
            y: 32.5,
            width: 30,
            svg: locationHomeCenter,
        },
        {
            name: 'street-university-road',
            text: t('map.buildings.street-university-road.text'),
            address: '中央區',
            x: 53.4,
            y: 67.5,
            width: 286,
            svg: locationUniversityRoad,
        },
        {
            name: 'street-airport-road',
            text: t('map.buildings.street-airport-road.text'),
            address: '中央區',
            x: 53.4,
            y: 75.2,
            width: 30,
            svg: locationStreetAirportRoad,
        },
        {
            name: 'street-farm-road',
            text: t('map.buildings.street-farm-road.text'),
            address: '中央區',
            x: 63.8,
            y: 43.3,
            width: 42,
            svg: locationFarmRoad,
        },
        {
            name: 'street-east-coastal-road',
            text: t('map.buildings.street-east-coastal-road.text'),
            address: '中央區',
            x: 84.5,
            y: 42,
            width: 30,
            svg: locationStreetEastCoastalRoad,
        },
        {
            name: 'street-center-road',
            text: t('map.buildings.street-center-road.text'),
            address: '中央區',
            x: 68.4,
            y: 48,
            width: 148,
            svg: locationStreetCenterRoad,
        },
        {
            name: 'street-museum-road',
            text: t('map.buildings.street-museum-road.text'),
            address: '中央區',
            x: 47.2,
            y: 23.1,
            width: 217,
            svg: locationMuseumRoad,
        },
        {
            name: 'center',
            text: t('map.buildings.center.text'),
            address: '中間道 1 號',
            x: 55.5,
            y: 60.5,
            svg: locationCenter,
        },
        {
            name: 'airport',
            text: t('map.buildings.airport.text'),
            address: '機場道 1 號',
            x: 55.5,
            y: 87.5,
            svg: locationAirport,
        },
        {
            name: 'shop',
            text: t('map.buildings.shop.text'),
            address: '中央區商店街 1 號',
            x: 45.5,
            y: 61.5,
            description: '出售各式各樣商品，高價收購 2 件物品，每天 8:00am ～ 10:00pm 營業',
            svg: locationShop,
        },
        {
            name: 'museum',
            text: t('map.buildings.museum.text'),
            address: '山頂博物館道 1 號',
            x: 50,
            y: 13.5,
            svg: locationMuseum,
        },
        {
            name: 'cloth',
            text: t('map.buildings.cloth.text'),
            address: '中央區商店街 2 號',
            x: 38.9,
            y: 61.5,
            description: '出售成衣，每天 9:00am ～ 9:00pm 營業',
            svg: locationCloth,
        },
        {
            name: 'camp',
            text: t('map.buildings.camp.text'),
            address: '居民中間街 1 號',
            x: 30,
            y: 51.5,
            svg: locationCamp,
        },
        {
            name: 'ship',
            text: t('map.buildings.ship.text'),
            address: '後岸海灘',
            x: 47,
            y: 1.5,
            svg: locationShip,
        },
        {
            name: 'home',
            text: t('map.buildings.home-raymond.text'),
            suffix: 'raymond',
            address: '傑克街 1 號',
            x: 14,
            y: 65.5,
            svg: locationHome,
        },
        {
            name: 'home',
            text: t('map.buildings.home-rudy.text'),
            suffix: 'rudy',
            address: '傑克街 2 號',
            x: 22,
            y: 65.5,
            svg: locationHome,
        },
        {
            name: 'home',
            text: t('map.buildings.home-bettina.text'),
            suffix: 'bettina',
            address: '丸阿街 1 號',
            x: 14,
            y: 53,
            svg: locationHome,
        },
        {
            name: 'home',
            text: t('map.buildings.home-walker.text'),
            suffix: 'walker',
            address: '丸阿街 2 號',
            x: 22,
            y: 53,
            svg: locationHome,
        },
        {
            name: 'home',
            text: t('map.buildings.home-plucky.text'),
            suffix: 'plucky',
            address: '橫民街 1 號',
            x: 14,
            y: 40,
            svg: locationHome,
        },
        {
            name: 'home',
            text: t('map.buildings.home-marshal.text'),
            suffix: 'marshal',
            address: '橫民街 2 號',
            x: 22,
            y: 40,
            svg: locationHome,
        },
        {
            name: 'home',
            text: t('map.buildings.home-agent-s.text'),
            suffix: '7agent-s',
            address: '居民中間街 2 號',
            x: 20,
            y: 33,
            svg: locationHome,
        },
        {
            name: 'home',
            text: t('map.buildings.home-hamlet.text'),
            suffix: 'hamlet',
            address: '居民中間街 3 號',
            x: 32,
            y: 33,
            svg: locationHome,
        },
        {
            name: 'home',
            text: t('map.buildings.home-jay.text'),
            suffix: 'jay',
            address: '橫民街 3 號',
            x: 30,
            y: 40,
            svg: locationHome,
        },
        {
            name: 'home',
            text: t('map.buildings.home-goldie.text'),
            suffix: 'goldie',
            address: '橫民街 4 號',
            x: 39,
            y: 40,
            svg: locationHome,
        },
        {
            name: 'my-home',
            text: t('map.buildings.home-cocoacaa.text'),
            suffix: '10',
            address: '半山區',
            x: 25,
            y: 13,
            svg: locationMyHome,
        },
    ];
}