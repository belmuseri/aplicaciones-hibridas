import usersRouter from './usersRouter.js'
import productsRouter from './productsRouter.js'
import ordersRouter from './ordersRouter.js'
import categoryRouter from './categoryRouter.js'

export function routerAPI(app){
    app.use('/products', productsRouter);
    app.use('/users', usersRouter);
    app.use('/orders', ordersRouter);
    app.use('/category', categoryRouter);
}