import { Sequelize, where } from "sequelize";
const { Op } = Sequelize;
import db from "../models";
export async function getProduct(req, res) {
  // const products = await db.SanPham.findAll()
  const { search = "", page = 1 } = req.query;
  const pageSize = 5;
  const offset = (page - 1) * pageSize;
  let WhereClause = {};
  if (search.trim() !== "") {
    WhereClause = {
      [Op.or]: [
        { ProductName: { [Op.like]: `%${search}%` } },
        { Description: { [Op.like]: `%${search}%` } },
      ],
    };
  }

  const [products, toatalProducts] = await Promise.all([
    db.SanPham.findAll({
      where: WhereClause,
      limit: pageSize,
      offset: offset,
    }),
    db.SanPham.count({
      where: WhereClause,
    }),
  ]);

  return res.status(200).json({
    message: "Lay san pham thanh cong",
    data: products,
    currentPage: parseInt(page, 10),
    totalPages: Math.ceil(toatalProducts / pageSize),
    toatalProducts,
  });
}

export async function getProductById(req, res) {
  const { id } = req.params;
  const product = await db.SanPham.findByPk(id);
  if (!product) {
    return res.status(404).json({
      message: "Không tìm thấy sản phẩm",
    });
  }

  res.status(200).json({
    message: "Lay thong tin san pham thanh cong",
    data: product,
  });
}

export async function insertProduct(req, res) {
  const sanpham = await db.SanPham.create(req.body);
  return res.status(201).json({
    message: "Them san pham thanh cong",
    data: sanpham,
  });
}
export async function deleateProduct(req, res) {
  const ProductID = req.params.id;
  const deleted = await db.SanPham.destroy({
    where: { ProductID },
  });
  if (deleted) {
    res.status(200).json({
      message: "Xoá sản phẩm thành công",
    });
  } else {
    res.status(404).json({
      message: "Xoá sản phẩm thất bại",
    });
  }
}

export async function updateProduct(req, res) {
  const ProductID = req.params.id;

  // Log kiểm tra giá trị req.params
  console.log("req.params:", req.params);
  console.log("ProductID:", ProductID);

  // Kiểm tra nếu ProductID không hợp lệ
  if (!ProductID) {
    return res.status(400).json({
      message: "Thiếu ProductID trong URL",
    });
  }

  // Kiểm tra dữ liệu gửi từ client
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "Dữ liệu cập nhật không được để trống",
    });
  }

  // Cập nhật sản phẩm
  const updateProduct = await db.SanPham.update(req.body, {
    where: { ProductID }, // Sửa lại điều kiện nếu cần
  });

  if (updateProduct[0] > 0) {
    return res.status(200).json({
      message: "Cập nhật sản phẩm thành công",
    });
  } else {
    return res.status(404).json({
      message: "Không tìm thấy sản phẩm cần cập nhật",
    });
  }
}
