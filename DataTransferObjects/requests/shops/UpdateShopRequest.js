import Joi, { required } from "joi";

class UpdateShopRequest {
  constructor(data) {
    this.StoreID = data.StoreID;
    this.StoreName = data.StoreName;
    this.Image = data.Image;
    this.PhoneNumber = data.PhoneNumber;
    this.StoreAddress = data.StoreAddress;
    this.Email = data.Email;
  }
  static validate(data) {
    const schema = Joi.object({
      StoreID: Joi.number().integer().required(),
      StoreName: Joi.string().required().optional(),
      Image: Joi.string().uri().allow("").optional(),
      PhoneNumber: Joi.number().integer().required().optional(),
      StoreAddress: Joi.string().required().optional(),
      Email: Joi.string().email().required().optional(),
    });

    return schema.validate(data);
  }
}

export default UpdateShopRequest;
