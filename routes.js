var expresa = require(`express`)
const router = express.Router()
const {homePage,userRegister,userLogin} = require("./controller")

router.get("/",homeaaPage)
.post("/register",userRegister)
.post("/login",userLogin)
module.exports = router