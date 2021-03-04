import axios from 'axios';

const url = 'https://ptx.transportdata.tw/MOTC';
export const FETCH_SCENIC_SPOT_LIST = 'FETCH_SCENIC_SPOT_LIST';
export const FETCH_CITY_OF_SCENIC_SPOT_LIST = 'FETCH_CITY_OF_SCENIC_SPOT_LIST';
export const SET_CITY = 'SET_CITY';

export const fetchScenicSpotList = (top) => (dispatch) => {
  axios(`${url}/v2/Tourism/ScenicSpot?$top=${top}`).then((res) => {
    console.log(res.data);
    dispatch({
      type: FETCH_SCENIC_SPOT_LIST,
      payload: res.data,
    });
  });
};

export const fetchCityOfScenicSpotList = (city, top) => (dispatch) => {
  axios(`${url}/v2/Tourism/ScenicSpot/${city}?$top=${top}`).then((res) => {
    console.log(res.data);
    dispatch({
      type: FETCH_CITY_OF_SCENIC_SPOT_LIST,
      payload: res.data,
    });
  });
};

export const setCity = (city) => ({
  type: SET_CITY,
  payload: city,
});
