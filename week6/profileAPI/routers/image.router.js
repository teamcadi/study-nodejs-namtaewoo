const {upload} = require('../utils/multer.util');
const router = require('express').Router();

/**
 * @description 이미지 등록
 * @route POST /images
 */
router.post('/',upload.single('profile-image'), async(req,res)=>{
    const userEmail = "test2@test2";
    //이미지 등록 하기 userEmail 파일명 바꿔서
    //images.db.js의 images에 등록하기
});

 module.exports = router;