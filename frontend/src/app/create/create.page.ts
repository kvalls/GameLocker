import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { GameService } from './../services/game.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  gameForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private gameService: GameService    
  ) {
    this.gameForm = this.formBuilder.group({
      name: [''],
      price: [''],
      genre: [''],
      description: [''],
      sales:['']
    })
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.gameForm.valid) {
      return false;
    } else {
      console.log()
      this.gameService.createGame(this.gameForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.gameForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}