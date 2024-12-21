import express from "express";
import * as ProductController from "./controllers/ProductController";
import * as CategoryController from "./controllers/CategoryController";
import * as OrderController from "./controllers/OrderController";
import * as OrderDetailController from "./controllers/OrderDetailController";
import * as ShopController from "./controllers/ShopController";
import * as ServiceController from "./controllers/ServiceController";
import * as CustomerController from "./controllers/CustomerController";
import asyncHandler from "./middlewares/asyncHandler";
import validate from "./middlewares/validate";
import InsertProducRequest from "./DataTransferObjects/requests/products/InsertProducRequest";
import InsertCategoryRequest from "./DataTransferObjects/requests/InsertCategoryRequest";
import InsertOrderDetailRequest from "./DataTransferObjects/requests/InsertOrderDetailRequest";
import InsertOrderRequest from "./DataTransferObjects/requests/Orders/InsertOrderRequest";
import InsertShopRequest from "./DataTransferObjects/requests/shops/InsertShopRequest";
import InsertServiceRequest from "./DataTransferObjects/requests/servicess/InsertServiceRequest";
import UpdateProducRequest from "./DataTransferObjects/requests/products/UpdateProductRequest";
import UpdateShopRequest from "./DataTransferObjects/requests/shops/UpdateShopRequest";
import UpdateOrderRequest from "./DataTransferObjects/requests/Orders/UpdateOrderRequest";
import UpdateServiceRequest from "./DataTransferObjects/requests/servicess/UpdateServiceRequest";
import InsertCustomerRequest from "./DataTransferObjects/requests/Customers/InsertCustomerRequest";
import UpdateCustomerRequest from "./DataTransferObjects/requests/Customers/UpdateCustomerRequest";
import UpdateOrderDetailRequest from "./DataTransferObjects/requests/UpdateODR";

const router = express.Router();
export function AppRouter(app) {
  //Product router
  router.get("/products", asyncHandler(ProductController.getProduct));
  router.get("/products/:id", asyncHandler(ProductController.getProductById));
  router.post(
    "/products",
    validate(InsertProducRequest),
    asyncHandler(ProductController.insertProduct)
  );
  router.put(
    "/products/:id",
    validate(UpdateProducRequest),
    asyncHandler(ProductController.updateProduct)
  );
  router.delete(
    "/products/:id",
    asyncHandler(ProductController.deleateProduct)
  );

  //Category router
  router.get("/categories", asyncHandler(CategoryController.getCategories));
  router.get(
    "/categories/:id",
    asyncHandler(CategoryController.getCategoryById)
  );
  router.post(
    "/categories",
    validate(InsertCategoryRequest),
    asyncHandler(CategoryController.insertCategory)
  );
  router.put("/categories", asyncHandler(CategoryController.updateCategory));
  router.delete("/categories/:id", CategoryController.deleateCategory);

  //Order router
  router.get("/orders", asyncHandler(OrderController.getOrders));
  router.get("/orders/:id", asyncHandler(OrderController.getOrderById));
  router.post(
    "/orders",
    validate(InsertOrderRequest),
    asyncHandler(OrderController.insertOrder)
  );
  router.put(
    "/orders/:id",
    validate(UpdateOrderRequest),
    asyncHandler(OrderController.updateOrder)
  );
  router.delete("/orders/:id", asyncHandler(OrderController.deleteOrder));

  //OrderDetail router
  router.get("/orderdetails", asyncHandler(OrderDetailController.getOrderDetails));
  router.get("/orderdetails/:id", asyncHandler(OrderDetailController.getOrderDetailById));
  router.post(
    "/orderdetails",
    validate(InsertOrderDetailRequest),
    asyncHandler(asyncHandler(OrderDetailController.insertOrderDetail))
  );
  router.put(
    "/orderdetails/:id",
    validate(UpdateOrderDetailRequest), 
    asyncHandler(OrderDetailController.updateOrderDetail));
  router.delete("/orderdetails/:id", asyncHandler(OrderDetailController.deleateOrderDetail));

  //Shop router
  router.get("/shops", asyncHandler(ShopController.getShops));
  router.get("/shops/:id", asyncHandler(ShopController.getShopById));
  router.post(
    "/shops",
    validate(InsertShopRequest),
    asyncHandler(ShopController.insertShop)
  );
  router.put(
    "/shops/:id",
    validate(UpdateShopRequest),
    asyncHandler(ShopController.updateShop)
  );
  router.delete("/shops/:id", asyncHandler(ShopController.deleteShop));

  //Service router
  router.get("/services", asyncHandler(ServiceController.getServices));
  router.get("/services/:id", asyncHandler(ServiceController.getServiceById));
  router.post(
    "/services",
    validate(InsertServiceRequest),
    asyncHandler(ServiceController.insertService)
  );
  router.put(
    "/services/:id",
    validate(UpdateServiceRequest), 
    asyncHandler(ServiceController.updateService));
  router.delete("/services/:id", asyncHandler(ServiceController.deleateService));

  //Customer router
  router.post(
    "/customers",
    validate(InsertCustomerRequest),
    asyncHandler(CustomerController.insertCustomer)
  );
  router.put(
    "/customers/:id",
    validate(UpdateCustomerRequest),
    asyncHandler(CustomerController.updateCustomer)
  );

  app.use("/api/", router);
}
