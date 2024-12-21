import Joi, { required } from "joi";

class InsertOrderDetailRequest {
  constructor(data) {
    this.ProductDetailID = data.ProductDetailID;
    this.OrderID = data.OrderID;
    this.ProductID = data.ProductID;
    this.StoreID = data.StoreID;
    this.ServiceID = data.ServiceID;
    this.Quantity = data.Quantity;
    this.Price = data.Price;
  }
  static validate(data) {
    const schema = Joi.object({
      ProductDetailID: Joi.number().integer().required(),
      OrderID: Joi.number().integer().required(),
      ProductID: Joi.number().integer().required(),
      StoreID: Joi.number().integer().optional(),
      ServiceID: Joi.number().integer().optional(),
      Quantity: Joi.number().integer().min(1).required(),
      Price: Joi.number().positive().required(),
    });

    return schema.validate(data);
  }
}

export default InsertOrderDetailRequest;

