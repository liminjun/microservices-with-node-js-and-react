import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import jwt from 'jsonwebtoken';

let mongo: any;
declare global {
    var signin: () => Promise<string[]>;
}
beforeAll(async () => {
    process.env.JWT_KEY = 'asdfasdf';
    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    mongo.stop();
    await mongoose.connection.close();
});

global.signin = async () => {
    // Build a JWT payload. {id, email }
    const payload = {
        id: 'test@test.com',
        email: 'password'
    }
    // Create the JWT!
    const token = jwt.sign(payload, process.env.JWT_KEY);``


    // Build session object. { jwt: MY_JWT }
    const session = { jwt: token };

    // Turn that session into JSON.
    const sessionJson = JSON.stringify(session);

    // Take JSON and encode it as base64.
    const base64 = Buffer.from(sessionJson).toString('base64');

    // return a string thats the cookie with the encoded data.
    return [`session=${base64}`];


    // const email = 'test@test.com',
    //     password = 'password';
    // const response = await request(app)
    //     .post('/api/users/signup')
    //     .send({
    //         email,
    //         password
    //     })
    //     .expect(201);
    // const cookie = response.get('Set-Cookie');
    // return cookie;
};

