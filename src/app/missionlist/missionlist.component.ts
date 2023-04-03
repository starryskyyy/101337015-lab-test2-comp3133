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

  filterMissionList(year: number) {
    if (year) {
      this.spacexapiService.getMissionByYear(year).subscribe((data: Mission[]) => {
        this.filteredMissionList = data;
      });
    } else {
      this.filteredMissionList = this.missionList;
    }
  }

  openDialog(flight_number: number) {
    const dialogueRef = this.dialogue.open(
      MissiondetailsComponent,
      { data: { flight_number }, width: '700px' }
    )
  }

  trackByFn(index: number, item: Mission) {
    return item.flight_number;
  }
}