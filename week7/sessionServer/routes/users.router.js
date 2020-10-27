const router =require('express').Router();

router.get('/',(req,res)=>{
    res.json(users);
});
/**
 * @description 내정보 조회하기
 * @routes GET /users/:id
 */
router.get('/:id',(req,res)=>{

});
module.exports =router