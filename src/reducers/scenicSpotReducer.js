import {
  FETCH_SCENIC_SPOT_LIST,
  FETCH_CITY_OF_SCENIC_SPOT_LIST,
  SET_CITY,
} from '../actions/fetchScenicSpotAction';

const initState = {
  scenicSpotList: [],
  cityOfScenicSpotList: [],
  city: '',
  cities: [
    { id: 0, value: 'all', label: '全部' },
    { id: 1, value: 'Taipei', label: '臺北市' },
    { id: 2, value: 'NewTaipei', label: '新北市' },
    { id: 3, value: 'Taoyuan', label: '桃園市' },
    { id: 4, value: 'Taichung', label: '台中市' },
    { id: 5, value: 'Tainan', label: '台南市' },
    { id: 6, value: 'Kaohsiung', label: '高雄市' },
    { id: 7, value: 'Keelung', label: '基隆市' },
    { id: 8, value: 'Hsinchu', label: '新竹市' },
    { id: 9, value: 'HsinchuCounty', label: '新竹縣' },
    { id: 10, value: 'MiaoliCounty', label: '苗栗縣' },
    { id: 11, value: 'ChanghuaCounty', label: '彰化縣' },
    { id: 12, value: 'NantouCounty', label: '南投縣' },
    { id: 13, value: 'YunlinCounty', label: '雲林縣' },
    { id: 14, value: 'ChiayiCounty', label: '嘉義縣' },
    { id: 15, value: 'Chiayi', label: '嘉義市' },
    { id: 16, value: 'PingtungCounty', label: '屏東縣' },
    { id: 17, value: 'YilanCounty', label: '宜蘭縣' },
    { id: 18, value: 'HualienCounty', label: '花蓮縣' },
    { id: 19, value: 'TaitungCounty', label: '臺東縣' },
    { id: 20, value: 'KinmenCounty', label: '金門縣' },
    { id: 21, value: 'PenghuCounty', label: '澎湖縣' },
    { id: 22, value: 'LienchiangCounty', label: '連江縣' },
  ],
};

const scenicSpotReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_SCENIC_SPOT_LIST:
      return {
        ...state,
        scenicSpotList: action.payload,
      };
    case FETCH_CITY_OF_SCENIC_SPOT_LIST:
      return {
        ...state,
        cityOfScenicSpotList: action.payload,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default scenicSpotReducer;
