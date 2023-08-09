import request from 'supertest';
import { app } from '../../app';

it('responds with details about the current user', async () => {
    // super test 不管理cookie。所以需要自己设置cookie
    // const authResponse = await request(app)
    //     .post('/api/users/signup')
    //     .send({
    //         email: 'test@test.com',
    //         password: 'password'
    //     })
    //     .expect(201);
    // const cookie = authResponse.get('Set-Cookie');
    // console.log('Cookie:', cookie);
    const cookie = await global.signin();
    const response = await request(app)
        .get('/api/users/currentuser')
        .set('Cookie', cookie)
        .send()
        .expect(200);
    console.log('body:', response.body);
    console.log(response.body.currentUser);
    expect(response.body.currentUser.email).toEqual('test@test.com');
});