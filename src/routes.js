const { Router } = require("express");
const { getBadge } = require("./badges");

const router = Router()
router.get("/", (req, res) => {
    console.log(req.query);
    const { name, value } = req.query
    res.send(getBadge(name, value))
})


module.exports = { router };