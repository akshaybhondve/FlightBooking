export default class BookFlight{
    flightbooking_id!:number;
    flight_type:string="";
    from_location:string="";
    to_location:string="";
    // onward_journey_date:string="";
    // return_journey_date:string="";
    onward_flight_rate!:number;
    return_flight_rate!:number;
    onward_scheduled_flight!:number;
    return_scheduled_flight!:number;
    onward_meal:string="";
    return_meal:string="";
    discount:string="";
    onward_seat:string="";
    return_seat:string="";
    final_flight_rate!:number;
    status:string="Scheduled";
} 