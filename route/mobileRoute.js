const {getMobiles,postMobiles,putMobiles,deleteMobiles} = require("../controller/mobileController")
const express = require("express")

const route = express.Router()

route.get("/",getMobiles)
route.post("/",postMobiles)
route.put("/:id",putMobiles)
route.delete("/:id",deleteMobiles)

module.exports = route