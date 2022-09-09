import {areIntervalsOverlapping} from 'date-fns'
import Appointment from "../../entities/appointment";
import { AppointmentsRepository } from "../appointment-repository";

export class inMemoryAppointmentRepository implements AppointmentsRepository{
    public items: Appointment[] = []
    async create(appointement: Appointment): Promise<void> {
        this.items.push(appointement)
    }       

    async findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
        const overlappingAppointment = this.items.find(appointment => {
            return areIntervalsOverlapping(
                {start: startsAt, end: endsAt},
                {start: appointment.startsAt, end: appointment.endsAt},
                {inclusive: true} //
            )
        })

        if(!overlappingAppointment){
            return null
        }

        return overlappingAppointment
    }
}