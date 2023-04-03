export class Mission{
    id: number
    mission_name: string
    launch_year: number
    details: string
    flight_number: number
    links: {
        mission_patch_small: string;
      }

    constructor(id: number, mission_name: string, launch_year: number, details: string, links: { mission_patch_small: string }, flight_number: number){
        this.id = id
        this.mission_name = mission_name
        this.launch_year = launch_year
        this.details = details
        this.links = links
        this.flight_number = flight_number
    }
}