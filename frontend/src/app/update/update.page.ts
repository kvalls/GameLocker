import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GameService } from './../services/game.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateGameFg: FormGroup;
  id: any;

  gameForm: FormGroup;

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchGame(this.id);
    this.updateGameFg = this.formBuilder.group({
      name: [''],
      price: [''],
      genre: [''],
      description: [''],
      sales:['']
    })
  }

  fetchGame(id) {
    this.gameService.getGame(id).subscribe((data) => {
      this.updateGameFg.setValue({
        name: data['name'],
        price: data['price'],
        genre: data['genre'],
        description: data['description'],
        sales: data['sales']
      });
    });
  }

  onSubmit() {
    if (!this.updateGameFg.valid) {
      return false;
    } else {
      this.gameService.updateGame(this.id, this.updateGameFg.value)
        .subscribe(() => {
          this.updateGameFg.reset();
          this.router.navigate(['/home']);
        })
    }
  }

}
