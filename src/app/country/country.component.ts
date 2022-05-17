import { Component, Input } from '@angular/core';
import { Country } from '../shared/interfaces';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent {
  displayedColumns: string[] = [
    'flag',
    'name',
    'capital',
    'population',
    'currencies',
  ];

  @Input() country: Country | undefined;
}
