import { Country } from 'src/app/shared/interfaces';
import { Actions, ActionTypes } from './actions';

export enum RegionNames {
  europe = 'europe',
  asia = 'asia',
}
export interface Region {
  name: string;
  countries: Country[];
}

type Regions = {
  [key: string]: Region;
};

export interface State {
  selectedRegion: string;
  regions: Regions;
}

const initialState: State = {
  selectedRegion: '',
  regions: {
    europe: {
      name: 'europe',
      countries: [],
    },
    asia: {
      name: 'asia',
      countries: [],
    },
  },
};

export const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.setCountries:
      const region: Region = action.payload;
      const updatedRegions = {
        ...state.regions,
      };

      updatedRegions[region.name] = action.payload;
      return { ...state, regions: updatedRegions };

    case ActionTypes.setSelectedRegion:
      return { ...state, selectedRegion: action.payload };

    default:
      return state;
  }
};
