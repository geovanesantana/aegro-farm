import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Farm } from '../shared/farm';
import { FarmService } from '../shared/farm.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-farm-register',
  templateUrl: './farm-register.component.html',
  styleUrls: ['./farm-register.component.scss']
})

export class FarmRegisterComponent implements OnInit {
  farm: Farm = new Farm();
  title: string = 'Nova Fazenda'
  safras = ['Arroz', 'Soja', 'Trigo', 'Milho', 'Feijão', 'Café', 'Uva'];
  farmFields: FormGroup;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private farmsService: FarmService,
    private formBuilder: FormBuilder
  ) {
    this.farmFields = this.formBuilder.group({
      id: null,
      name: '',
      description: '',
      safra: '',
      areas: this.formBuilder.array([]) ,
    });
  }

  ngOnInit() {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.farm = this.farmsService.getById(parseInt(id));
      this.farmFields.controls['id'].setValue(parseInt(id));
      this.title = 'Alterando a Fazenda';

      if (this.farm.areas.length > 0) {
        this.areas().push(this.newArea());
      }
    }
  }

  areas() : FormArray {
    return this.farmFields.get("areas") as FormArray
  }

  newArea(): FormGroup {
    return this.formBuilder.group({
      name: '',
      area: '',
      production: '',
    })
  }

  addArea() {
    this.areas().push(this.newArea());
  }

  removeArea(i:number) {
    this.areas().removeAt(i);
  }

  onSubmit() {
    this.farmsService.save(this.farmFields.value);
    this.router.navigate(['']);
  }

}
