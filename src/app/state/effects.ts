import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { ActionTypes, GetCountries } from './actions';

@Injectable()
export class Effects {
  constructor(private actions$: Actions) {}

  setOverviewVisibleRoute$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<GetCountries>(ActionTypes.getCountries),
        tap(() => {
          console.log('cuntries');
        })
      ),
    { dispatch: false }
  );
}
