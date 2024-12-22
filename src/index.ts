import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import customerRoutes from './routes/customer';

const app = new Hono();

app.use('*', logger());
app.route('/api/customers', customerRoutes);

const port = 3000;

console.log(`Server is running on port ${port}`);
console.log('Press Ctrl + C to stop the server');
console.log('URL: http://localhost:3000/api/customers');

serve({
  fetch: app.fetch,
  port
});
