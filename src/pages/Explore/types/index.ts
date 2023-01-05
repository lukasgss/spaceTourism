import { Images } from "../../../services/CommonTypes";

export type CelestialBodiesNames = "moon" | "mars" | "europa" | "titan";

export interface Destination {
  name: string;
  images: Images;
  description: string;
  distance: string;
  travel: string;
}

export interface CelestialBodies {
  destinations: Destination[];
}
