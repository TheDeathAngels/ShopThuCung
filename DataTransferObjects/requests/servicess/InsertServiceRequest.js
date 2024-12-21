import Joi, { required } from "joi";

class InsertServiceRequest {
  constructor(data) {
    (this.ServiceID = data.ServiceID), (this.StoreID = data.StoreID);
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
      StoreID: Joi.number().integer().required(),
      CategoryID: Joi.number().integer().required(),
      ServiceName: Joi.string().required(),
      ServicePrice: Joi.number().positive().required(),
      Rate: Joi.number().positive().min(0).max(5),
      Image: Joi.string().uri().allow(""),
      Description: Joi.string().optional(),
    });

    return schema.validate(data);
  }
}

export default InsertServiceRequest;
