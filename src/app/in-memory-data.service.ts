import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb(){
    const heroes = [
      { id: 10, name: 'Iron Man' },
      { id: 11, name: 'Doctor Strange' },
      { id: 12, name: 'Thor' },
      { id: 13, name: 'Hulk' },
      { id: 14, name: 'Spider-Man' },
      { id: 15, name: 'Ant-Man' },
      { id: 16, name: 'Falcon' },
      { id: 17, name: 'Black Panther' },
      { id: 18, name: 'Captain America, Tinkerer' },
      { id: 19, name: 'Ghost-Spider' },
      { id: 20, name: 'Loki, Hot Dog Vendor' }
    ];
    return {heroes};
  }

  getId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1: 11;
  }
}
