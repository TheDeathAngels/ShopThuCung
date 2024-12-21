import Joi, { required } from "joi";

class InsertShopRequest {
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
      StoreName: Joi.string().required(),
      Image: Joi.string().uri().allow(""),
      PhoneNumber: Joi.number().integer().required(),
      StoreAddress: Joi.string().required(),
      Email: Joi.string().email().required(),
    });

    return schema.validate(data);
  }
}

export default InsertShopRequest;
