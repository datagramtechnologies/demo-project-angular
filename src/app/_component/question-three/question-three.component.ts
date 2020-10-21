import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.css']
})
export class QuestionThreeComponent implements OnInit {
  public type: number;
  public machineName: string;
  constructor() {}

  ngOnInit() {
  }


  get name(): string {
    let machineName = '';
    if (this.machineName == null || this.machineName == '' || this.machineName == undefined) {
      if (this.type == 2) machineName = 'tractor';
      if (this.type == 0) machineName = 'bulldozer';
      if (this.type == 1) machineName = 'crane';
      if (this.type == 4) machineName = 'car';
      if (this.type == 3) machineName = 'truck';
    }
    return machineName;
  }

  get description(): string {
    let hasMaxSpeed = true;
    if (this.type == 3) hasMaxSpeed = false;
    if (this.type == 4) hasMaxSpeed = false;

    let description = ' ';
    description += this.color + ' ';
    description += this.name+' ';
    description += '[ '+this.getMaxSpeed(this.type, hasMaxSpeed) + ' ].';
    return description;
  }

  get color(): string {
    let color = 'white';
    if (this.type == 1) color = 'blue';
    if (this.type == 0) color = 'red';
    if (this.type == 4) color = 'brown';
    if (this.type == 3) color = 'yellow';
    if (this.type == 2) color = 'green';
    return color;
  }

  get trimColor(): string {
    let baseColor = 'white';
    if (this.type == 0) baseColor = 'red';
    if (this.type == 1) baseColor = 'blue';
    if (this.type == 2) baseColor = 'green';
    if (this.type == 3) baseColor = 'yellow';
    if (this.type == 4) baseColor = 'brown';

    let trimColor = '';
    if (this.type == 1 && this.isDark(baseColor)) trimColor = 'black';
    if (this.type == 1 && !this.isDark(baseColor)) trimColor = 'white';
    if (this.type == 2 && this.isDark(baseColor)) trimColor = 'gold';
    if (this.type == 3 && this.isDark(baseColor)) trimColor = 'silver';
    return trimColor;
  }

  isDark(color: string) {
    let isDark = false;
    if (color == 'red') isDark = true;
    if (color == 'green') isDark = true;
    if (color == 'black') isDark = true;
    if (color == 'crimson') isDark = true;
    return isDark;
  }

  getMaxSpeed(machineType: any, noMax = false) {
    let max = 70;
    if (noMax == false && machineType == 2) max = 60;
    if (machineType == 0 && noMax == true) max = 80;
    if (machineType == 2 && noMax == true) max = 90;
    if (machineType == 4 && noMax == true) max = 90;
    if (machineType == 1 && noMax == true) max = 75;
    return max;
  }

}
