
import Joi, { required } from "joi";

class UpdateServiceRequest {
  constructor(data) {
    this.ServiceID = data.ServiceID,
    this.StoreID = data.StoreID;
    this.CategoryID = data.CategoryID;
    this.ServiceName = data.ServiceName;
    this.ServicePrice = data.ServicePrice;
    this.Rate = data.Rate;
    this.Image = data.Image;
    this.Description = data.Description;
  }
  static validate(data) {
    const schema = Joi.object({
      ServiceID: Joi.number().integer().required(),
      StoreID: Joi.number().integer().required().optional(),
      CategoryID: Joi.number().integer().required().optional(),
      ServiceName: Joi.string().required().optional(),
      ServicePrice: Joi.number().positive().required().optional(),
      Rate: Joi.number().positive().min(0).max(5).optional(),
      Image: Joi.string().uri().allow("").optional(),
      Description: Joi.string().optional().optional(),
    });

    return schema.validate(data);
  }
}

export default UpdateServiceRequest;
