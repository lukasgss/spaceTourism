import { AxiosResponse } from "axios";
import { API } from "../Api";

interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

interface TechnologyData {
  technology: Technology[];
}

export const getTechnologyData = (): Promise<AxiosResponse<TechnologyData>> => {
  return API.get("technology.json");
};
