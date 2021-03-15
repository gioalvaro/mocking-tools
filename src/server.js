// src/server.js
import { createServer, Model, Response } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      dessert: Model
    },

    seeds(server) {
      server.create("dessert", {
        id: 1,
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0
      });
      server.create("dessert", {
        id: 2,
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3
      });
      server.create("dessert", {
        id: 3,
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0
      });
    },

    routes() {
      this.namespace = "api/v1";
      this.timing = 2000;
      this.get("/desserts", schema => {
        return schema.desserts.all();
      });
      this.get("/dessert/:id", (schema, request) => {
        if (request.params.id == 3) {
          return new Response(
            403,
            { some: "header" },
            { errorMsg: "You are not allowed to access this resource" }
          );
        }
        return schema.desserts.findBy({ id: request.params.id });
      });
    }
  });

  return server;
}
