import Joi, { required } from "joi";

class InsertCategoryRequest {
  constructor(data) {
    this.CategoryID = data.CategoryID;
    this.CategoryName = data.CategoryName;
    this.Image = data.Image;
  }
  static validate(data) {
    const schema = Joi.object({
      CategoryID: Joi.number().integer().required(),
      CategoryName: Joi.string().required(),
      Image: Joi.string().uri().allow(""),
    });

    return schema.validate(data);
  }
}

export default InsertCategoryRequest;
