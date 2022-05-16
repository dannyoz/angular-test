import { Action } from '@ngrx/store';
import { OperatorFunction } from 'rxjs';
import { Region } from './reducer';

export enum ActionTypes {
  getCountries = '[APP] getCountries',
}

export class GetCountries implements Action {
  readonly type = ActionTypes.getCountries;
  constructor(public payload: Region) {}
}

export type Actions = GetCountries;
