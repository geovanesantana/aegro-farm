import { Component, OnInit } from '@angular/core';
import { Farm } from '../shared/farm';
import { FarmService } from '../shared/farm.service';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.scss']
})
export class FarmListComponent implements OnInit {
  farms: Farm[] = [];

  constructor( private farmsService: FarmService ) { }

  ngOnInit() {
    this.farms = this.farmsService.getAll();
  }

}
