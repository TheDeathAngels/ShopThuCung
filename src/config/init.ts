import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';

config();

async function init() {
  console.time('Database initialization time');
  const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER
  });

  try {
    const connection = await pool.getConnection();

    await connection.query("CREATE DATABASE IF NOT EXISTS need");
    await connection.query("USE need");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS KhachHang (
        CustomerID INT AUTO_INCREMENT PRIMARY KEY,
        CustomerName VARCHAR(255) NOT NULL,
        Email VARCHAR(255) UNIQUE NOT NULL,
        Password VARCHAR(255) NOT NULL,
        Avatar TEXT,
        CustomerAddress VARCHAR(255),
        PhoneNumber VARCHAR(15),
        RegisterDate DATETIME DEFAULT CURRENT_TIMESTAMP,
        UpdateDate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS DanhMuc (
        CategoryId INT AUTO_INCREMENT PRIMARY KEY,
        CategoryName VARCHAR(255) NOT NULL,
        Image TEXT
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS CuaHang (
        StoreID INT AUTO_INCREMENT PRIMARY KEY,
        StoreName VARCHAR(255) NOT NULL,
        Image TEXT
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS SanPham (
        ProductID INT AUTO_INCREMENT PRIMARY KEY,
        StoreID INT NOT NULL,
        CategoryId INT NOT NULL,
        ProductName VARCHAR(255) NOT NULL,
        Image TEXT,
        Quantity INT DEFAULT 0,
        Price DECIMAL(10,2) NOT NULL,
        Rate DECIMAL(3,2),
        Description TEXT,
        Created_At DATETIME DEFAULT CURRENT_TIMESTAMP,
        Updated_At DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (CategoryId) REFERENCES DanhMuc(CategoryId),
        FOREIGN KEY (StoreID) REFERENCES CuaHang(StoreID)
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS DonHang (
        OrderID INT AUTO_INCREMENT PRIMARY KEY,
        CustomerID INT,
        OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
        TotalAmount DECIMAL(10,2),
        Status VARCHAR(50),
        FOREIGN KEY (CustomerID) REFERENCES KhachHang(CustomerID)
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS DichVu (
        ServiceID INT AUTO_INCREMENT PRIMARY KEY,
        StoreID INT,
        CategoryID INT,
        ServiceName VARCHAR(255) NOT NULL,
        ServicePrice DECIMAL(10,2),
        Rate INT,
        Image TEXT,
        Description TEXT,
        Created_At DATETIME DEFAULT CURRENT_TIMESTAMP,
        Updated_At DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (CategoryID) REFERENCES DanhMuc(CategoryId),
        FOREIGN KEY (StoreID) REFERENCES CuaHang(StoreID)
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS ChiTietDonHang (
        OrderDetailID INT AUTO_INCREMENT PRIMARY KEY,
        OrderID INT,
        ProductID INT,
        ServiceID INT,
        StoreID INT,
        Quantity INT,
        Price DECIMAL(10,2),
        FOREIGN KEY (OrderID) REFERENCES DonHang(OrderID),
        FOREIGN KEY (ProductID) REFERENCES SanPham(ProductID),
        FOREIGN KEY (ServiceID) REFERENCES DichVu(ServiceID),
        FOREIGN KEY (StoreID) REFERENCES CuaHang(StoreID)
      )
    `);

    console.log('Database and tables created successfully');

    await Promise.all([
      connection.query(`
        INSERT INTO KhachHang (CustomerName, Email, Password, CustomerAddress, PhoneNumber)
        VALUES ('John Doe', 'john@doe.com', '123456', '123 Main St', '1234567890')
      `),
      connection.query(`
        INSERT INTO KhachHang (CustomerName, Email, Password, CustomerAddress, PhoneNumber)
        VALUES ('Jane Doe', 'jane@doe.com', '654321', 'Haha go', '0987654321')
      `),
      connection.query(`
        INSERT INTO KhachHang (CustomerName, Email, Password, CustomerAddress, PhoneNumber)
        VALUES ('Alice', 'alice@gmail.com', '987654', '567 Main St', '5555555555')
      `),
      connection.query(`
        INSERT INTO KhachHang (CustomerName, Email, Password, CustomerAddress, PhoneNumber)
        VALUES ('Bob', 'bob@gmail.com', '456789', '789 Main St', '7777777777')
      `),
      connection.query(`
        INSERT INTO KhachHang (CustomerName, Email, Password, CustomerAddress, PhoneNumber)
        VALUES ('Charlie', 'charlie@gmail.com', '789123', '101 Main St', '9999999999')
      `),
      connection.query(`
        INSERT INTO DanhMuc (CategoryName)
        VALUES ('Electronics')
      `),
      connection.query(`
        INSERT INTO DanhMuc (CategoryName)
        VALUES ('Clothing')
      `),
      connection.query(`
        INSERT INTO DanhMuc (CategoryName)
        VALUES ('Books')
      `),
      connection.query(`
        INSERT INTO CuaHang (StoreName)
        VALUES ('Store 1')
      `),
      connection.query(`
        INSERT INTO CuaHang (StoreName)
        VALUES ('Store 2')
      `),
      connection.query(`
        INSERT INTO CuaHang (StoreName)
        VALUES ('Store 3')
      `),
      connection.query(`
        INSERT INTO SanPham (StoreID, CategoryId, ProductName, Price, Description)
        VALUES (1, 1, 'Laptop', 1000, 'A laptop')
      `),
      connection.query(`
        INSERT INTO SanPham (StoreID, CategoryId, ProductName, Price, Description)
        VALUES (2, 2, 'T-shirt', 20, 'A t-shirt')
      `),
      connection.query(`
        INSERT INTO SanPham (StoreID, CategoryId, ProductName, Price, Description)
        VALUES (3, 3, 'Book', 10, 'A book')
      `),
    ]);

    console.log('Data inserted successfully\n');

    connection.release();
  }
  catch(error) {
    console.error('Error initializing database:', error);
    throw error;
  }
  finally {
    await pool.end();
    console.timeEnd('Database initialization time');
  }
}

init();
