import { Country } from 'src/shared/interfaces';
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

interface State {
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
    case ActionTypes.getCountries:
      const region: Region = action.payload;
      const updatedRegions = {
        ...state.regions,
      };
      updatedRegions[region.name] = action.payload;
      return { ...state, regions: updatedRegions };

    default:
      return state;
  }
};
