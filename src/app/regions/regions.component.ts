import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GetCountries } from '../state/actions';
import { getRegions } from '../state/selectors';

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

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.buildForm();
    this.regions$ = this.store.pipe(select(getRegions));
    this.regionSubscription = this.regions$.subscribe((regions) => {
      this.regions = regions;
    });

    this.form?.valueChanges.subscribe((formData) => {
      this.store.dispatch(new GetCountries(formData.selectedRegion));
    });
  }

  buildForm(): void {
    this.form = new FormGroup(
      this.fb.group({
        selectedRegion: '',
      }).controls,
      { updateOn: 'blur' }
    );
  }

  ngOnDestroy(): void {
    this.regionSubscription?.unsubscribe();
  }
}
