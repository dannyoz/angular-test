import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Country } from '../shared/interfaces';
import { GetCountries, SetSelectedRegion } from '../state/actions';
import { getRegions, getSelectedRegionCountries } from '../state/selectors';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit, OnDestroy {
  form: FormGroup | undefined;
  regions$: Observable<any> | undefined;
  regionSubscription: Subscription | undefined;
  regions: string[] | undefined;
  selectedRegionCountries$: Observable<any> | undefined;
  selectedRegionCountriesSubscription: Subscription | undefined;
  selectedRegionCountries: Country[] | undefined;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.buildForm();
    this.regions$ = this.store.pipe(select(getRegions));
    this.regionSubscription = this.regions$.subscribe((regions) => {
      this.regions = regions;
    });

    this.selectedRegionCountries$ = this.store.pipe(
      select(getSelectedRegionCountries)
    );
    this.selectedRegionCountriesSubscription =
      this.selectedRegionCountries$.subscribe((countries) => {
        this.selectedRegionCountries = countries;
      });
  }

  buildForm(): void {
    this.form = new FormGroup(
      this.fb.group({
        selectedRegion: '',
        selectedCountry: null,
      }).controls,
      { updateOn: 'blur' }
    );

    this.form?.valueChanges.subscribe((formData) => {
      this.store.dispatch(new GetCountries(formData.selectedRegion));
      this.store.dispatch(new SetSelectedRegion(formData.selectedRegion));
    });
  }

  ngOnDestroy(): void {
    this.regionSubscription?.unsubscribe();
    this.selectedRegionCountriesSubscription?.unsubscribe();
  }
}
