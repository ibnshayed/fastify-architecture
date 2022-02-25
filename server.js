
import Routes from "./router/Routes.js"
import fastifySwagger from "fastify-swagger"
import SwaggerConfig from './config/swagger/SwaggerConfig.js';

const server = async (fastify, options) => {
	// swagger
	fastify.register(fastifySwagger, SwaggerConfig)
	
	// router
	fastify.register(Routes, { prefix: "/api" })
	
}

export default server