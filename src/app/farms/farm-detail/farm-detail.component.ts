import { Component, OnInit, Input } from '@angular/core';
import { Farm } from '../shared/farm';
import { FarmService } from '../shared/farm.service';

@Component({
  selector: 'app-farm-detail',
  templateUrl: './farm-detail.component.html',
  styleUrls: ['./farm-detail.component.scss']
})
export class FarmDetailComponent implements OnInit {
  @Input()
  farm: Farm;

  constructor( private farmsService: FarmService ) { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.farmsService.delete(id);
  }

}
