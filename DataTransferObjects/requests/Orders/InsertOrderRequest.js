
import Joi, { required } from "joi";

class InsertOrderRequest {
  constructor(data) {
    this.OrderID = data.OrderID
    this.CustomerID = data.CustomerID;
    this.Status = data.Status;
    this.PaymentMethod = data.PaymentMethod;
  }
  static validate(data) {
    const schema = Joi.object({
      OrderID: Joi.number().integer().required(),
      CustomerID: Joi.number().integer().required(),
      Status: Joi.string().required(),
      PaymentMethod: Joi.string().required(),
    });

    return schema.validate(data);
  }
}

export default InsertOrderRequest;
