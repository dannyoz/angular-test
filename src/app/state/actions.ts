import { Action } from '@ngrx/store';
import { Region } from './reducer';

export enum ActionTypes {
  getCountries = '[APP] getCountries',
  setCountries = '[APP] setCountries',
}

export class GetCountries implements Action {
  readonly type = ActionTypes.getCountries;
  constructor(public payload: string) {}
}

export class SetCountries implements Action {
  readonly type = ActionTypes.setCountries;
  constructor(public payload: Region) {}
}

export type Actions = GetCountries | SetCountries;
