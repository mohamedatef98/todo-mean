const express = require('express');
const router = express.Router();

const checkAuth = require('../middlewares/check-auth');
const getUser = require('../middlewares/get-user');

const dispatch = require('../lib/ControllerDispatcher');
const TodosController = require('../controllers/TodosController');

router.use(checkAuth);
router.use(getUser);


router.get('/', dispatch(TodosController, 'index'));

router.post('/', dispatch(TodosController, 'create'));

router.delete('/:id', dispatch(TodosController, 'destroy'));

router.put('/:id/description', dispatch(TodosController, 'updateDescription'));

router.put('/:id/toggleDone', dispatch(TodosController, 'updateDone'));

module.exports = router;
