import { IconType } from 'react-icons';
import { FaFireExtinguisher } from "react-icons/fa6";
import { RiFirstAidKitLine } from "react-icons/ri";
import { MdOutlinePool, MdPets, MdElevator, MdOutlineOutdoorGrill, MdHotTub } from "react-icons/md";
import { PiSecurityCameraBold, PiHairDryer  } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { BiSolidWasher } from "react-icons/bi";
import { TbParkingCircle } from "react-icons/tb";
import { FaWheelchair } from "react-icons/fa";
import {
  FiTruck,
  FiWind,
  FiSun,
  FiCoffee,
  FiAirplay,
  FiDroplet,
  FiSunset,
  FiMusic,
  FiTv,
  FiWifi,
  FiThermometer,
  FiHome,
  FiPackage,
  FiUmbrella,
  FiAlertTriangle,
} from 'react-icons/fi';

export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

export const amenities: Amenity[] = [
  { name: 'WiFi', icon: FiWifi, selected: false },
  { name: 'Parking', icon: FiTruck, selected: false },
  { name: 'Air Conditioning', icon: FiThermometer, selected: false },
  { name: 'Heating', icon: FiSun, selected: false },
  { name: 'Kitchen', icon: FiCoffee, selected: false },
  { name: 'Shower', icon: FiDroplet, selected: false },
  { name: 'Washer', icon: BiSolidWasher, selected: false },
  { name: 'Dryer', icon: FiWind, selected: false },
  { name: 'Hair Dryer', icon: PiHairDryer, selected: false },
  { name: 'Essentials', icon: FiPackage, selected: false },
  { name: 'TV', icon: FiTv, selected: false },
  { name: 'First Aid Kit', icon: RiFirstAidKitLine, selected: false },
  { name: 'Smoke Alarm', icon: FiAlertTriangle, selected: false },
  { name: 'Fire Extinguisher', icon: FaFireExtinguisher, selected: false },
  { name: 'Private Entrance', icon: FiHome, selected: false },
  { name: 'Gym', icon: CgGym, selected: false },
  { name: 'Hot Tub', icon: MdHotTub, selected: false },
  { name: 'Pool', icon: MdOutlinePool, selected: false },
  { name: 'Free Parking', icon: TbParkingCircle, selected: false },
  { name: 'Pets Allowed', icon: MdPets, selected: false },
  { name: 'Breakfast', icon: FiCoffee, selected: false },
  { name: 'Suitable for Events', icon: FiMusic, selected: false },
  { name: 'Wheelchair Accessible', icon: FaWheelchair, selected: false },
  { name: 'Laptop Friendly Workspace', icon: FiAirplay, selected: false },
  { name: 'Outdoor Dining Area', icon: FiSunset, selected: false },
  { name: 'BBQ Grill', icon: MdOutlineOutdoorGrill, selected: false },
  { name: 'Patio', icon: FiUmbrella, selected: false },
  { name: 'Security Cameras', icon: PiSecurityCameraBold, selected: false },
  { name: 'Elevator', icon: MdElevator, selected: false },
];
