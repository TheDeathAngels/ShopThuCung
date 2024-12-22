import { Hono } from 'hono';
import * as customerController from '../controllers/customer';

const router = new Hono();

router.get('/', customerController.getCustomers);
router.post('/', customerController.createCustomer);

export default router;
