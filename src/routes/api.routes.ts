import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import * as sessionController from '../controllers/session.controller';

const apiRouter = Router();

/* ROTAS GERAIS */
apiRouter.get('/', (req, res) => {
    return res.json({
        message: 'Nossa primeira rota da API'
    });
});

/* ROTAS DE USUÁRIO */
apiRouter.get('/users/id/:id', userController.view);
apiRouter.post('/users/destroy/:id', userController.destroy);

/* ROTAS DE SESSAO */
apiRouter.post('/users/new', sessionController.create);

/* ROTAS DE FILME */

/* ROTAS DE LIST */

export { apiRouter }