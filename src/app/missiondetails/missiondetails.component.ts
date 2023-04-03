import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mission } from 'src/app/models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  flight_number: number;
  missionDetails!: Mission;

  constructor(
    public dialogueRef: MatDialogRef<MissiondetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public mission: any,
    private spacexApi: SpacexapiService,
  ) {
    this.flight_number = mission.flight_number;
  }

  ngOnInit() {
    this.spacexApi.getMission(this.flight_number)
      .subscribe(
        (mission: any) => {
          this.missionDetails = mission;
          console.log(mission)
        }
      );
        console.log(this.missionDetails)
  }


}
