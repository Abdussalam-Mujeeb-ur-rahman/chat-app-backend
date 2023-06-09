const {Router} = require('express');

const router = Router();

const {addMessage, getAllMessage} = require('../controllers/messageController');

router.post("/addmsg", addMessage);
router.post("/getmsg", getAllMessage);



module.exports = router;