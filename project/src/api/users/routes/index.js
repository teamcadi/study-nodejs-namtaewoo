const userController = require('../controllers');
const {getUserValidator,modifyUserValidator, modifyUserPwValidator} = require('../../middleware/user.validator');
const userRouter = require('express').Router();

/**
 * @description 프로필 조회
 * @routes GET / users/:id
 */
userRouter.get('/:id',getUserValidator,userController.getUser );

/**
 * @description 프로필 수정 (이름 수정)
 * @routes PATCH / users/:id
 * @request @body {name}
 */
userRouter.patch('/:id',modifyUserValidator,userController.modifyUser );

/**
 * @description 프로필 비밀번호 수정
 * @routes PATCH / users/password/:id
 */
userRouter.get('/password/:id',modifyUserPwValidator,userController.modifyUserPw);


module.exports = userRouter;
