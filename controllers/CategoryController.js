import { Sequelize } from "sequelize";
import db from "../models";

export async function getCategories(req, res) {
  const danhmuc = await db.DanhMuc.findAll();
  res.status(200).json({
    message: "Lay ds danh muc thanh cong",
    data: danhmuc,
  });
}

export async function getCategoryById(req, res) {
  const { id } = req.params;
  const danhmuc = await db.DanhMuc.findByPk(id);
  if (!danhmuc) {
    return res.status(404).json({
      message: "Không tìm thấy danh mục",
    });
  }

  res.status(200).json({
    message: "Lấy thông tin danh mục thành công",
    data: danhmuc,
  });
}

export async function insertCategory(req, res) {
  const danhmuc = await db.DanhMuc.create(req.body);
  res.status(201).json({
    message: "Them danh muc thanh cong",
    data: danhmuc,
  });
}

export async function deleateCategory(req, res) {
  res.status(200).json({
    message: "Xoa danh muc thanh cong",
  });
}

export async function updateCategory(req, res) {
  res.status(200).json({
    message: "Cap nhap danh muc thanh cong",
  });
}
