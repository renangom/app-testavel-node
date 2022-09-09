import { test, describe, it, expect } from "vitest";
import Appointment from "../entities/appointment";
import { CreateAppointment } from "./create-appointment";

//Criando categorização dos testes
describe('Create appointment', () => {
    it('shoul be able to create an appoitment', () => {
        const createAppointment = new CreateAppointment();

        const endsAt = new Date();
        endsAt.setDate(endsAt.getDate() + 1);

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: new Date(),
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })
})