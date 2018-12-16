import { Injectable } from '@angular/core';
import { Escola } from './escola';
import { ESCO } from './mock-esco';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getEsco(): Escola[]{
    return ESCO;
  }
}
