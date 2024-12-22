export type KhachHang = {
  CustomerID: number;
  CustomerName: string;
  Email: string;
  Password: string;
  Avatar?: string;
  CustomerAddress: string;
  PhoneNumber: number;
  RegisterDate?: Date;
  UpdateDate?: Date;
}

export type DanhMuc = {
  CategoryId: number;
  CategoryName: string;
  Image?: string;
}

export type SanPham = {
  ProductID: number;
  StoreID: number;
  CategoryId: number;
  ProductName: string;
  Image?: string;
  Quantity: number;
  Price: number;
  Rate?: number;
  Description: string;
  Created_At: Date;
  Updated_At: Date;
}

export type DonHang = {
  OrderID: number;
  CustomerID: number;
  Status: string;
  PaymentMethod: string;
  Created_At: Date;
  Updated_At: Date;
}

export type ChiTietDonHang = {
  OrderDetailID: number;
  OrderID: number;
  ProductID: number;
  StoreID: number;
  ServiceID: number;
  Quantity: number;
  Price: number;
}

export type DichVu = {
  ServiceID: number;
  StoreID: number;
  CategoryID: number;
  ServiceName: string;
  ServicePrice: number;
  Rate: number;
  Image?: string;
  Description: string;
  Created_At: Date;
  Updated_At: Date;
}