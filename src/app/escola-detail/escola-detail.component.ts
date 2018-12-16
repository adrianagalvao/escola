import { Component, OnInit, Input } from '@angular/core';
import { Escola } from '../escola';

@Component({
  selector: 'app-escola-detail',
  templateUrl: './escola-detail.component.html',
  styleUrls: ['./escola-detail.component.css']
})
export class EscolaDetailComponent implements OnInit {
  @Input( ) escola : Escola;

  constructor() { }

  ngOnInit() {
  }

}
