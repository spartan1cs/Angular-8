import { Component, OnInit } from '@angular/core';
import{Hero} from '../hero';
/*import { HEROES } from '../mock-heroes';*/
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

  }
  
  heros: Hero[];

  
/*   heros =HEROES
 */  

getHeroes(): void {
 this.heroService.getHeroes().subscribe(heroes => this.heros = heroes);;
}


/*   selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
} */

}
