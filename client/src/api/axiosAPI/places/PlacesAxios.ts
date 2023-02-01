import axios from "axios";
import instance from "../../CustomAxios";
import { PlaceData } from "../search/placeSearchAxios";

const url = "https://matp.o-r.kr/places";

export interface IMatPlace {
  id: number;
  tel: string;
  address: string;
  name: string;
  starAvg: number;
  postCount: number;
  longitude: number;
  latitude: number;
}

export const getPlaceDetail = async (id: number) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};

export const getPlaceDetailForUser = async (id: number) => {
  const response = await instance.get(`/places/${id}`);
  return response.data;
};

export const createPlaces = async (
  name: string,
  address: string,
  zonecode: string,
  tel: string,
  category: string
): Promise<void> => {
  const response = await instance.post("/places", {
    name,
    address,
    zonecode,
    tel,
    category,
  });
  return response.data;
};

export const CurrentLocaionSearchAxios = async (): Promise<PlaceData[]> => {
  const response = await axios.get(`${url}?longitude=126.9019532&latitude=37.5170112&round=1`);
  return response.data;
};
