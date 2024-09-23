import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getData();
  }


  getData(){
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error('Erro ao fazer a requisição', error);
      }
    );
  }
}
