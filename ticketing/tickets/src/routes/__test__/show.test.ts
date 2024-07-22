import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import mongoose from 'mongoose';

it('returns a 404 if the ticket is not found.', async ()=> {
    const id = new mongoose.Types.ObjectId().toHexString();

    const response = await request(app)
        .get(`/api/ticke/${id}`)
        .send()
        .expect(404);

        
    console.log(response.body);

});

it('returns the ticket if the ticket is found', async ()=>{
    // Ticket.build({fdafadsfsf});
    // Ticket.save();

    const response = await request(app)
        .get('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title, price
        })
        .expect(201);
    const ticketResponse = await request(app)
        .get(`/api/tickets/${response.body.id}`)
        .send()
        .expect(200);
    expect(ticketResponse.body.title).toEqual(title);
    expect(ticketResponse.body.price).toEqual(price);

});