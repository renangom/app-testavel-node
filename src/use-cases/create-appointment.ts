import Appointment from "../entities/appointment";
import { AppointmentsRepository } from "../repositories/appointment-repository";

interface CreateAppointmentRequest{
    customer: string;
    startsAt: Date;
    endsAt: Date;

}

//Como a response é um único objeto, uso type
type CreateAppointmentResponse = Appointment

export class CreateAppointment{

    constructor(private appointmentsRepository: AppointmentsRepository){}
    
    async execute({customer, startsAt, endsAt}: CreateAppointmentRequest):Promise<CreateAppointmentResponse>{
        
        const overlappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(
            startsAt,
            endsAt
        )

        if(overlappingAppointment){
            throw new Error('another appointment overlaps this appointment date');
        }
        const appointement = new Appointment({
            customer,
            startsAt,
            endsAt
        })

        await this.appointmentsRepository.create(appointement);

        return appointement
    }
}