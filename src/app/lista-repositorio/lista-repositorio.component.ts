import { RepositorioService } from './../core/services/repositorio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-repositorio',
  templateUrl: './lista-repositorio.component.html',
  styleUrls: ['./lista-repositorio.component.css']
})
export class ListaRepositorioComponent implements OnInit {

  repositorios: any[] = [];


  constructor(private service: RepositorioService) {//Autowired*
    
   }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      data => {
        this.repositorios = data;
        
        console.log(this.repositorios);
      }

    );
  }

}
