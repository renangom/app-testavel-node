import Appointment from "../entities/appointment";

interface CreateAppointmentRequest{
    customer: string;
    startsAt: Date;
    endsAt: Date;

}

//Como a response é um único objeto, uso type
type CreateAppointmentResponse = Appointment

export class CreateAppointment{
    async execute({customer, startsAt, endsAt}: CreateAppointmentRequest):Promise<CreateAppointmentResponse>{
        const appointement = new Appointment({
            customer,
            startsAt,
            endsAt
        })

        return appointement
    }
}