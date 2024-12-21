class CustomerResponse {
  constructor(CustomerUser) {
    this.CustomerID = CustomerUser.CustomerID;
    this.Email = CustomerUser.Email;
    this.CustomerName = CustomerUser.CustomerName;
    this.Avatar = CustomerUser.Avatar;
    this.PhoneNumber = CustomerUser.PhoneNumber;
  }
}

export default CustomerResponse;
