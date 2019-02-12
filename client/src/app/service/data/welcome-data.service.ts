import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`);
  }
}

export class HelloWorldBean {

  constructor(public message: string) {

  }

}
