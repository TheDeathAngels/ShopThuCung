import Joi, { required } from "joi";

class UpdateOrderRequest {
  constructor(data) {
    this.CustomerID = data.CustomerID;
    this.Status = data.Status;
    this.PaymentMethod = data.PaymentMethod;
  }
  static validate(data) {
    const schema = Joi.object({
      CustomerID: Joi.number().integer().required(),
      Status: Joi.string().required().optional(),
      PaymentMethod: Joi.string().required().optional(),
    });

    return schema.validate(data);
  }
}

export default UpdateOrderRequest;
