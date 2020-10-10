const multer = require("multer");

// multer setting
const uploadOptions ={
    storage : multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'upload/')
        },
        filename:(req,file,cb) => {
            cb(null,Date.now() +'-'+ file.originalname);
        },
    }),
    limits:{fileSize: 20 * 1024 * 1024}
};

const upload = multer(uploadOptions);

module.exports = {
    upload
}