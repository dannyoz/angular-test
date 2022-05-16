import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import { Country } from '../shared/interfaces';
import { CountryRestService } from '../shared/service';
import { ActionTypes, GetCountries, SetCountries } from './actions';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private countryService: CountryRestService
  ) {}

  @Effect()
  setOverviewVisibleRoute$ = this.actions$.pipe(
    ofType<GetCountries>(ActionTypes.getCountries),

    switchMap((region) => {
      const regionName = region.payload;
      return this.countryService.getCountries(regionName as any).pipe(
        map((responseData) => {
          return new SetCountries({
            name: regionName as unknown as string,
            countries: responseData as Country[],
          });
        }),
        catchError((error) => {
          throw error;
        })
      );
    })
  );
}
