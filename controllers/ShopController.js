import { Sequelize } from "sequelize";
const { Op } = Sequelize;
import db from "../models";

export async function getShops(req, res) {
  const { search = "", page = 1 } = req.query;
  const pageSize = 5;
  const offset = (page - 1) * pageSize;
  let WhereClause = {};
  if (search.trim() !== "") {
    WhereClause = {
      [Op.or]: [{ StoreName: { [Op.like]: `%${search}%` } }],
    };
  }

  const [stores, toatalStores] = await Promise.all([
    db.CuaHang.findAll({
      where: WhereClause,
      limit: pageSize,
      offset: offset,
    }),
    db.CuaHang.count({
      where: WhereClause,
    }),
  ]);

  return res.status(200).json({
    message: "Lấy cửa hàng thành công",
    data: stores,
    currentPage: parseInt(page, 10),
    totalPages: Math.ceil(toatalStores / pageSize),
    toatalStores,
  });
}

export async function getShopById(req, res) {
  const { id } = req.params;
  const cuahang = await db.CuaHang.findByPk(id);
  if (!cuahang) {
    return res.status(404).json({
      message: "Không tìm thấy cửa hàng",
    });
  }

  res.status(200).json({
    message: "Lấy thông tin cửa hàng thành công",
    data: cuahang,
  });
}

export async function insertShop(req, res) {
  const cuahang = await db.CuaHang.create(req.body);
  res.status(201).json({
    message: "Them cua hang thanh cong",
    data: cuahang,
  });
}

export async function deleteShop(req, res) {
  const StoreID = req.params.id;

  // Xóa cửa hàng
  const deleted = await db.CuaHang.destroy({
    where: { StoreID },
  });

  if (deleted) {
    return res.status(200).json({
      message: "Xoá cửa hàng thành công",
    });
  } else {
    return res.status(404).json({
      message: "Xoá cửa hàng thất bại",
    });
  }
}

export async function updateShop(req, res) {
  const StoreID = req.params.id;

  // Kiểm tra nếu ShopID không hợp lệ
  if (!StoreID) {
    return res.status(400).json({
      message: "Thiếu ShopID trong URL",
    });
  }

  // Kiểm tra dữ liệu gửi từ client
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "Dữ liệu cập nhật không được để trống",
    });
  }

  // Cập nhật cửa hàng
  const updateShop = await db.CuaHang.update(req.body, {
    where: { StoreID }, // Sửa lại điều kiện nếu cần
  });

  if (updateShop[0] > 0) {
    return res.status(200).json({
      message: "Cập nhật cửa hàng thành công",
    });
  } else {
    return res.status(404).json({
      message: "Không tìm thấy cửa hàng cần cập nhật",
    });
  }
}
