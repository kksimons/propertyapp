import { IconType } from 'react-icons';
import { MdCabin } from 'react-icons/md';

import { TbCaravan, TbTent, TbBuildingCottage } from 'react-icons/tb';

import { GiWoodCabin, GiMushroomHouse } from 'react-icons/gi';
import { PiBuildingApartmentBold , PiLighthouse, PiVan, PiHouseLineBold  } from 'react-icons/pi';

import { GoContainer } from 'react-icons/go';

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'cabin'
  | 'tent'
  | 'airstream'
  | 'cottage'
  | 'caravan'
  | 'tiny'
  | 'house'
  | 'apartment'
  | 'lodge';

export const categories: Category[] = [
  {
    label: 'cabin',
    icon: MdCabin,
  },
  {
    label: 'airstream',
    icon: PiVan,
  },
  {
    label: 'tent',
    icon: TbTent,
  },
  {
    label: 'apartment',
    icon: PiBuildingApartmentBold ,
  },
  {
    label: 'cottage',
    icon: TbBuildingCottage,
  },
  {
    label: 'house',
    icon: PiHouseLineBold ,
  },
  {
    label: 'caravan',
    icon: TbCaravan,
  },

  {
    label: 'tiny',
    icon: PiLighthouse,
  },
  {
    label: 'lodge',
    icon: GiWoodCabin,
  },
];