import 'dotenv/config'
import fastify from "fastify";
import fastifyCors from "fastify-cors";
import { prisma } from "./prisma"
import { redis } from "./utils/redis"



const server = fastify();
const port = process.env.PORT || 8888;



const start = async () => {
	await prisma.$connect()
	await redis.connect()
	await server.register(fastifyCors, {
		origin: process.env.CLIENT_ORIGIN,
		allowedHeaders: ["Authorization"],
	  });
	server.decorateRequest("session", undefined);
	await server.listen(port).then(() => {
		console.log(`Listening on port ${port}`)
	})
}

start()

