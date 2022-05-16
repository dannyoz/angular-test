import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryRestService {
  constructor(private httpClient: HttpClient) {}

  getCountries(region: string) {
    const url = `https://restcountries.com/v2/region/${region}`;
    return this.httpClient.get(url);
  }
}
