import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mission } from 'src/app/models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  private REST_API_URL = "https://api.spacexdata.com/v3/launches"
  constructor(private httpClient: HttpClient) { }

  public getAllLaunches() {
    return this.httpClient.get(this.REST_API_URL).pipe(retry(3))
  }
  public getMission(id: number) {
    return this.httpClient.get(`https://api.spacexdata.com/v3/launches/${id}`);
  }
  public getMissionByYear(year: number) {
    return this.httpClient.get<Mission[]>(`https://api.spacexdata.com/v3/launches?launch_year=${year}`);
  }
}