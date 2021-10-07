import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.getGit().subscribe(res =>{
      console.log('res');
    });
  }

  getGit(){
    return this.http.get('https://api.github.com/users/leoneltoledo');
  }

}
