import {expect, test} from 'vitest';
import { getFutureDate } from '../tests/utils/get-future-date';
import Appointment from './appointment';

test('create an appointment', () => {

    const startsAt = new Date();
    const endsAt = new Date()

    startsAt.setDate(startsAt.getDate() + 1)
    endsAt.setDate(endsAt.getDate() + 2);

    const appointment = new Appointment({
        customer: 'John Doe',
        startsAt,
        endsAt,
    })

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toEqual('John Doe');
})

test('cannot create an appointement with end date before start date', () => {

    // const startDate = new Date();
    // const endDate = new Date();

    // startDate.setDate(startDate.getDate() + 2)
    // endDate.setDate(endDate.getDate() + 1)

    const startsAt = getFutureDate('2022-08-10');
    const endsAt = getFutureDate('2022-08-09');

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt,
        })
    }).toThrow()
})

test('cannot create an appointement with start date before now', () => {

    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() - 1)
    endsAt.setDate(endsAt.getDate() - 1)


    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt
        })
    }).toThrow()
})