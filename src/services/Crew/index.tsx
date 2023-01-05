import { AxiosResponse } from "axios";
import { API } from "../Api";
import { Images } from "../CommonTypes";

interface Crew {
  name: string;
  images: Images;
  role: string;
  bio: string;
}

interface CrewData {
  crew: Crew[];
}

export const getCrewData = (): Promise<AxiosResponse<CrewData>> => {
  return API.get("crew.json");
};
