import Joi, { required } from "joi"

class UpdateCustomerRequest {
    constructor(data) {
        this.CustomerID = data.CustomerID;
        this.Email = data.Email;
        this.Password = data.Password;
        this.CustomerName = data.CustomerName;
        this.Avatar = data.Avatar;
        this.PhoneNumber = data.PhoneNumber;
    }
    static validate(data) {
        const schema = Joi.object({
            CustomerID: Joi.number().integer().required(),
            Email: Joi.string().required().optional(),
            Password: Joi.string().min(6).required().optional(),
            CustomerName: Joi.string().required().optional(),
            Avatar: Joi.string().uri().allow("").optional(),
            CustomerAddress: Joi.string().required().optional(),
            PhoneNumber: Joi.number().integer().required().optional(),
        });

        return schema.validate(data);
    }
}

export default UpdateCustomerRequest;