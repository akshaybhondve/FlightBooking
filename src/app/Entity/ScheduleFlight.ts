export default class ScheduleFlight{
    schedule_id!:number;
    flight_id!:number;
    airline_name:string="";
    fromLocation:string="";
    toLocation:string="";
    flight_date:Date=new Date();
    flight_time:string="";
    no_of_businessseat!:number;
    no_of_firstseat!:number;
    no_of_economyseat!:number;
    status:string="Scheduled";


} 