import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';
import { MatDialog } from '@angular/material/dialog';
import { MissiondetailsComponent } from 'src/app/missiondetails/missiondetails.component';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {

  missionList: Mission[] = [];
  selectedYear: number = 0;
  filteredMissionList: Mission[] = [];

  constructor(private spacexapiService: SpacexapiService, private dialogue: MatDialog) { }

  ngOnInit(): void {
    this.spacexapiService.getAllLaunches().subscribe({
      next: (res: any) => {
        this.missionList = res;
        this.filteredMissionList = res;
      },
      complete: () => {
        console.log("Completed");
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getYears(): number[] {
    return this.missionList.map(mission => mission.launch_year)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  filterByYear(year: number) {

    this.selectedYear = year;
    if (year) {
      this.filteredMissionList = this.missionList.filter((mission: Mission) => mission.launch_year === year);
    } else {
      this.filteredMissionList = this.missionList;
    }
  }

  openDialog(flight_number: number) {
    const dialogueRef = this.dialogue.open(
      MissiondetailsComponent,
      { data: { flight_number }, width: '700px' }
    )
    console.log(flight_number);
  }

  trackByFn(index: number, item: Mission) {
    return item.flight_number;
  }
}