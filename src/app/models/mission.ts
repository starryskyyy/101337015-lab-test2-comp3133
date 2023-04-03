export class Mission{
    mission_name: string
    launch_year: number
    details: string
    flight_number: number
    links: {
        mission_patch_small: string;
      }

    constructor(mission_name: string, launch_year: number, details: string, links: { mission_patch_small: string }, flight_number: number){
        this.mission_name = mission_name
        this.launch_year = launch_year
        this.details = details
        this.links = links
        this.flight_number = flight_number
    }
}