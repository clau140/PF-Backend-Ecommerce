const { addItemToCart, deleteTemplateFromCart, viewCart } = require("../handlers/cartHandler");
const loginRequire = require("../middlewares/loginRequire");

const cartRouter = require("express").Router();

cartRouter
    .post("/addCart",loginRequire, addItemToCart)
    .delete("/deleteCart", loginRequire, deleteTemplateFromCart)
    .get("/", loginRequire, viewCart)


module.exports = cartRouter;