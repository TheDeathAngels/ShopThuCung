import Joi, { required } from "joi";

class UpdateProducRequest {
  constructor(data) {
    this.ProductID = data.ProductID;
    this.ProductName = data.ProductName;
    this.StoreID = data.StoreID;
    this.CategoryID = data.CategoryID;
    this.Image = data.Image;
    this.Quantity = data.Quantity;
    this.Price = data.Price;
    this.Rate = data.Rate;
    this.Description = data.Description;
  }
  static validate(data) {
    const schema = Joi.object({
      ProductID: Joi.number().integer().required(),
      ProductName: Joi.string().required().optional(),
      StoreID: Joi.number().integer().required().optional(),
      CategoryID: Joi.number().integer().required().optional(),
      Image: Joi.string().uri().allow("").optional(),
      Quantity: Joi.number().integer().min(0).required().optional(),
      Price: Joi.number().positive().required().optional(),
      Rate: Joi.number().positive().min(0).max(5).optional(),
      Description: Joi.string().optional(),
    });

    return schema.validate(data);
  }
}

export default UpdateProducRequest;