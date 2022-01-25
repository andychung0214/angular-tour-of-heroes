import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { MessageService } from "../app/message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
