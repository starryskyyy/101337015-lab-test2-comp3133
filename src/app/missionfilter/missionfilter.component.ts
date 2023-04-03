import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from 'src/app/models/mission';


@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Input() missionList!: Mission[];
  @Output() yearSelected = new EventEmitter<number>();

  getYears(): number[] {
    return this.missionList.map(mission => mission.launch_year)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  selectYear(year: number) {
    this.yearSelected.emit(year);
  }
}
