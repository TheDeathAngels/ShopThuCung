import { Context } from 'hono';
import { KhachHang } from '../models'
import query from '../config/db';

export const getCustomers = async (c: Context) => {
  try {
    const rows = await query<KhachHang>('SELECT * FROM KhachHang');
    return c.json(rows);
  }
  catch(error) {
    const err = error as any;
    return c.json({ error: err.message }, 500);
  }
};

export const createCustomer = async (c: Context) => {
  try {
    const body = await c.req.json() as KhachHang;
    await query(
      'INSERT INTO KhachHang (CustomerName, Email, Password, CustomerAddress, PhoneNumber) VALUES (?, ?, ?, ?, ?)',
      [body.CustomerName, body.Email, body.Password, body.CustomerAddress, body.PhoneNumber]
    );
    return c.json({ message: 'Customer created' }, 201);
  }
  catch(error) {
    const err = error as any;
    return c.json({ error: err.message }, 500);
  }
};