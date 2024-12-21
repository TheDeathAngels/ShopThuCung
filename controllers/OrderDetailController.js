import { Sequelize, where } from "sequelize";
import db from "../models";

export async function getOrderDetails(req, res) {
  const orderDetails = await db.ChiTietDonHang.findAll(); // Giả sử bảng ChiTietDonHang chứa các chi tiết đơn hàng

  return res.status(200).json({
    message: "Lấy danh sách chi tiết đơn hàng thành công",
    data: orderDetails,
  });
}

export async function getOrderDetailById(req, res) {
  const { id } = req.params;
  const orderDetail = await db.ChiTietDonHang.findByPk(id); // Giả sử `ChiTietDonHang` có khóa chính là ID

  if (!orderDetail) {
    return res.status(404).json({
      message: "Không tìm thấy chi tiết đơn hàng",
    });
  }

  return res.status(200).json({
    message: "Lấy thông tin chi tiết đơn hàng thành công",
    data: orderDetail,
  });
}

export async function insertOrderDetail(req, res) {
  const service = await db.DichVu.create(req.body);
  return res.status(201).json({
    message: "Them dich vu thanh cong",
    data: service,
  });
}

export async function deleateOrderDetail(req, res) {
  const orderDetailID = req.params.id;
  const deleted = await db.ChiTietDonHang.destroy({
    where: { orderDetailID },
  });

  if (deleted) {
    return res.status(200).json({
      message: "Xóa chi tiết đơn hàng thành công",
    });
  } else {
    return res.status(404).json({
      message: "Không tìm thấy chi tiết đơn hàng cần xóa",
    });
  }
}

export async function updateOrderDetail(req, res) {
  const orderDetailID = req.params.id;

  // Kiểm tra dữ liệu gửi từ client
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "Dữ liệu cập nhật không được để trống",
    });
  }

  // Cập nhật chi tiết đơn hàng
  const updated = await db.ChiTietDonHang.update(req.body, {
    where: { orderDetailID },
  });

  if (updated[0] > 0) {
    return res.status(200).json({
      message: "Cập nhật chi tiết đơn hàng thành công",
    });
  } else {
    return res.status(404).json({
      message: "Không tìm thấy chi tiết đơn hàng cần cập nhật",
    });
  }
}
