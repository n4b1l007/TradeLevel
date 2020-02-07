import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:21008/Api';

  TradeDDL(): Observable<any> {
    return this.http.get<any>(this.Url + '/Trades');
  }

  LevelDDL(TradeId: string): Observable<any> {
    return this.http.get<any>(this.Url + '/level/' + TradeId);
  }

  LanguageCHK(): Observable<any> {
    return this.http.get<Language>(this.Url + '/Language');
  }


  postSyllabus(model: any): Observable<any> {

    const body = JSON.stringify(model);
    const headers = { 'Content-Type': 'application/json' };

    const formData = new FormData(model);
    //formData.append(model);

    return this.http.post<any>(this.Url + '/syllabus', formData);


    //return this.http.post<any>(this.Url + '/syllabus', body, { headers });
  }
}
