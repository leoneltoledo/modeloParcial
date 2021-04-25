import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private country: string;
  constructor(private http: HttpClient) {
    
   }

  getCountry() {
    return this.country;
  }

  setCountry(c: string) {
    this.country = c;
  }

  getAllCountrys() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
