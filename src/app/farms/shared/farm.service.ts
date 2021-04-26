import { Injectable } from '@angular/core';
import { Farm } from './farm';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  farms: Farm[] = []

  constructor() { }

  getAll() {
    const listFarms = localStorage.getItem('farms')

    if(listFarms) {
      this.farms = JSON.parse(listFarms);
    }

    return this.farms;
  }

  getById(id: number) {
    const farm = this.farms.find((value) => value.id == id);
    return farm;
  }

  save(farm: Farm) {
    if (farm.id) {
      const farmArr = this.getById(farm.id);
      farmArr.name = farm.name;
      farmArr.description = farm.description;
      farmArr.safra = farm.safra;
      farmArr.areas = farm.areas;
    } else {
      let lastId = 0;

      if (this.farms.length > 0) {
        lastId = this.farms[this.farms.length-1].id;
      }
      farm.id = lastId + 1;
      this.farms.push(farm);
    }

    localStorage.setItem('farms', JSON.stringify(this.farms));
  }

  delete(id: number) {
    const farmIndex = this.farms.findIndex((value) => value.id == id);
    this.farms.splice(farmIndex, 1);

    localStorage.setItem('farms', JSON.stringify(this.farms));
  }
}
