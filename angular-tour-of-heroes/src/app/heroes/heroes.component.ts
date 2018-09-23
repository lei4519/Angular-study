import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',// 可以理解为组件的名字 用来匹配HTML中的标签名 以找到对应位置渲染
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[]

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeros()
  }

  getHeros(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
}
