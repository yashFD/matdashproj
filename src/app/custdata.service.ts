import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustdataService {

  constructor(private http: HttpClient) { }

  url= "https://jsonplaceholder.typicode.com/users";
  url2 = './assets/apiData.json';

  getData() {
      return this.http.get(this.url);
  }

  getForm() {
    return this.http.get(this.url2)
    .pipe(
      map((res: any) => {
        console.log("Before Mapping: ",res)
        return res.children[2];
      })
    )

}

}
