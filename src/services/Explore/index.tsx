import { AxiosResponse } from "axios";
import { CelestialBodies } from "../../pages/Explore/types";
import { API } from "../Api";

export const getCelestialBodiesData = (): Promise<
  AxiosResponse<CelestialBodies>
> => {
  return API.get("destinations.json");
};
