import { FastifyInstance } from "fastify";
import cors from "@fastify/cors";

export const register = async (fastify: FastifyInstance) => {
  await fastify.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  });
};