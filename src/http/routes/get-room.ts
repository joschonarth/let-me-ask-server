import { eq } from "drizzle-orm"
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
import { z } from "zod"
import { db } from "../../db/connection.ts"
import { schema } from "../../db/schema/index.ts"

export const getRoomRoute: FastifyPluginCallbackZod = (app) => {
  app.get(
    "/rooms/:roomId",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params

      const room = await db
        .select({
          id: schema.rooms.id,
          name: schema.rooms.name,
          createdAt: schema.rooms.createdAt,
        })
        .from(schema.rooms)
        .where(eq(schema.rooms.id, roomId))
        .limit(1)

      if (room.length === 0) {
        return reply.status(404).send({ message: "Room not found" })
      }

      return room[0]
    }
  )
}
