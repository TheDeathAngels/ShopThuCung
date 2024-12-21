import Joi, { required } from "joi";

class UpdateOrderDetailRequest {
  constructor(data) {
    this.OrderID = data.OrderID;
    this.ProductID = data.ProductID;
    this.StoreID = data.StoreID;
    this.ServiceID = data.ServiceID;
    this.Quantity = data.Quantity;
    this.Price = data.Price;
  }
  static validate(data) {
    const schema = Joi.object({
      OrderID: Joi.number().integer().required(),
      ProductID: Joi.number().integer().required().optional(),
      StoreID: Joi.number().integer().optional(),
      ServiceID: Joi.number().integer().optional(),
      Quantity: Joi.number().integer().min(1).required().optional(),
      Price: Joi.number().positive().required().optional(),
    });

    return schema.validate(data);
  }
}

export default UpdateOrderDetailRequest;

