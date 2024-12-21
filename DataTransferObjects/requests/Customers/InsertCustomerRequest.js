import Joi, { required } from "joi"

class InsertCustomerRequest {
    constructor(data) {
        this.CustomerID = data.CustomerID;
        this.Email = data.Email;
        this.Password = data.Password;
        // this.Password = this.encryptPassword(data.Password);
        this.CustomerName = data.CustomerName;
        this.Avatar = data.Avatar;
        this.PhoneNumber = data.PhoneNumber;
    }
    static validate(data) {
        const schema = Joi.object({
            CustomerID: Joi.number().integer().required(),
            Email: Joi.string().required(),
            Password: Joi.string().min(6).required(),
            CustomerName: Joi.string().required(),
            Avatar: Joi.string().uri().allow(""),
            CustomerAddress: Joi.string().required(),
            PhoneNumber: Joi.number().integer().required(),
        });

        return schema.validate(data);
    }
}

export default InsertCustomerRequest;