import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducer';

export const getState = createFeatureSelector<State>('app');

export const getRegions = createSelector(
  getState,
  (state) => Object.keys(state?.regions) || null
);

export const getSelectedRegionCountries = createSelector(
  getState,
  (state) => state.regions[state.selectedRegion]?.countries || null
);
