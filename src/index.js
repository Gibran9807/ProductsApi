const fastify = require("fastify")({
    logger: true
})


const productRoute = require('./routes/products.routes')

require('./utils/mongoose')

fastify.register(require('@fastify/cors'), {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
})

fastify.get("/", (request, reply) => {
    reply.send({Hello: 'World!'});
})

productRoute.forEach((route) => {
    fastify.route(route)
});

const start = async () => {
    await fastify.listen(3000)
    fastify.log.info(`Server listening on ${fastify.server.address().port}`)
}

start();

