const request = require('supertest');
const app = require('../../src/app');
const { tableBuildParams } = require('./table.factory');

describe('POST /api/table - Create Table Reservation Suite Case', () => {
  it('return_error_if_invalid_input', async () => {
    const table = await tableBuildParams({
      occation: 'test'
    });
    const res = await request(app)
      .post('/api/table')
      .set('Accept', 'application/json')
      .send(table);

    expect(res.body.code).toBe(400);
    expect(res.body.success).toBeFalsy();
    expect(res.body.data).toBe(null);
  });

  it('create_table', async () => {
    const table = await tableBuildParams();
    const res = await request(app)
      .post('/api/table')
      .set('Accept', 'application/json')
      .send(table);

    expect(res.body.code).toBe(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.data.fullName).toBe(table.fullName);
    expect(res.body.data.message).toBe(table.message);
    expect(res.body.data.isActive).toBeTruthy();
  });
});
