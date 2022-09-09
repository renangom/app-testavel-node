import { test, describe, it, expect } from "vitest";
import Appointment from "../entities/appointment";
import { inMemoryAppointmentRepository } from "../repositories/in-memory/in-memory-appointments-repository";
import { CreateAppointment } from "./create-appointment";

//Criando categorização dos testes
describe('Create appointment', () => {
    it('shoul be able to create an appoitment', () => {
        const appointmentRepository = new inMemoryAppointmentRepository();
        const createAppointment = new CreateAppointment(
            appointmentRepository
        );

        const startsAt = new Date();
        const endsAt = new Date();


        endsAt.setDate(endsAt.getDate() + 2);
        startsAt.setDate(startsAt.getDate() + 1)

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })
})