import { Sequelize } from "sequelize";
import db from "../models";

export async function getOrders(req, res) {
  const donhang = await db.DonHang.findAll();

  res.status(200).json({
    message: "Lấy danh sách đơn hàng thành công",
    data: donhang,
  });
}

export async function getOrderById(req, res) {
  const { id } = req.params;
  const donhang = await db.DonHang.findByPk(id);
  if (!donhang) {
    return res.status(404).json({
      message: "Không tìm thấy đơn hàng",
    });
  }

  res.status(200).json({
    message: "Lấy thông tin đơn hàng thành công",
    data: donhang,
  });
}

export async function insertOrder(req, res) {
  const customerID = req.body.CustomerID;

  const existCustomer = await db.KhachHang.findByPk(customerID);
  if (!existCustomer) {
    return res.status(404).json({
      message: "Người dùng không tồn tại",
    });
  }

  const donhang = await db.DonHang.create(req.body);
  if (donhang) {
    return res.status(201).json({
      message: "Thêm đơn hàng thành công",
      data: donhang,
    });
  } else {
    res.status(400).json({
      message: "Không thẻ thêm đơn hàng",
    });
  }
}

export async function deleteOrder(req, res) {
  const OrderID = req.params.id;

  // Xóa đơn hàng
  const deleted = await db.DonHang.destroy({
    where: { OrderID },
  });

  if (deleted) {
    return res.status(200).json({
      message: "Xoá đơn hàng thành công",
    });
  } else {
    return res.status(404).json({
      message: "Xoá đơn hàng thất bại",
    });
  }
}

export async function updateOrder(req, res) {
  const OrderID = req.params.id;

  // Kiểm tra nếu OrderID không hợp lệ
  if (!OrderID) {
    return res.status(400).json({
      message: "Thiếu OrderID trong URL",
    });
  }

  // Kiểm tra dữ liệu gửi từ client
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "Dữ liệu cập nhật không được để trống",
    });
  }

  // Cập nhật đơn hàng
  const updateOrder = await db.DonHang.update(req.body, {
    where: { OrderID },
  });

  if (updateOrder[0] > 0) {
    return res.status(200).json({
      message: "Cập nhật đơn hàng thành công",
    });
  } else {
    return res.status(404).json({
      message: "Không tìm thấy đơn hàng cần cập nhật",
    });
  }
}
