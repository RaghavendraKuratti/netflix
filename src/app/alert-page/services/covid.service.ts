import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Country {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Country: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Slug: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ISO2: string;
}

export interface Cases {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Country: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CountryCode: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Province: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  City: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CityCode: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Lat: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Lon: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Confirmed: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Deaths: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Recovered: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Active: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Date: Date;
}
export interface RegionData {
  region: string;
  activeCases: number;
  newInfected: number;
  recovered: number;
  newRecovered: number;
  deceased: number;
  newDeceased: number;
  totalInfected: number;
}

export interface IndiaData {
  activeCases: number;
  activeCasesNew: number;
  recovered: number;
  recoveredNew: number;
  deaths: number;
  deathsNew: number;
  previousDayTests: number;
  totalCases: number;
  sourceUrl: string;
  lastUpdatedAtApify: Date;
  readMe: string;
  regionData: RegionData[];
}


@Injectable({
  providedIn: 'root'
})

export class CovidService {
  countryPath = 'https://api.covid19api.com/countries';
  casesPath = 'https://api.covid19api.com/total/dayone/country/';
  indiaData = 'https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true';
  public loading: any;
  constructor(private http: HttpClient,
    public loadingController: LoadingController) {}
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryPath).pipe(
      tap(users => console.log('country retrieved!')),
      catchError(this.handleError<Country[]>('Get user'))
    );
  }
  getCountryWiseCase(country: string): Observable<Cases[]> {
    return this.http.get<Cases[]>(this.casesPath + country).pipe(
      tap(users => console.log('cases retrieved!')),
      catchError(this.handleError<Cases[]>('Get user'))
    );
  }

  getStatewise(): Observable<IndiaData> {
    return this.http.get<IndiaData>(this.indiaData).pipe(
      tap(users => console.log('country retrieved!')),
      catchError(this.handleError<IndiaData>('Get user'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  async loadingPresent() {
    this.loading = await this.loadingController.create({
      message: 'LOoading...',
    });
    this.loading.present();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  loadingDismiss() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }
}
