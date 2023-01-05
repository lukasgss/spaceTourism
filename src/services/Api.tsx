import axios, { AxiosResponse } from "axios";
import { CelestialBodies } from "../pages/Explore/types";

export const API = axios.create({
  baseURL: "/src/mocks/",
});

export const getCelestialBodiesData = (): Promise<
  AxiosResponse<CelestialBodies>
> => {
  return API.get("destinations.json");
};
