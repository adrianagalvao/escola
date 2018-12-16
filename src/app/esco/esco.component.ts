import { Component, OnInit } from '@angular/core';
import { Escola } from '../escola';
import { ESCO } from '../mock-esco'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-esco',
  templateUrl: './esco.component.html',
  styleUrls: ['./esco.component.css']
})
export class EscoComponent implements OnInit {

   esco : Escola[];    
   selectedEscola: Escola;

  constructor(private heroService: HeroService) { }

  getEsco(){
    this.esco = this.heroService.getEsco();
  }


  ngOnInit() {
  }

  onSelect(escola:Escola): void {
    this.selectedEscola = escola;
  }

}
