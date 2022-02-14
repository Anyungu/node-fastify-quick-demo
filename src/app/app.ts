import Fastify from "fastify";
import { hotelRoutes, menuItemRoutes, orderRoutes } from "./api/v1";
import { errorHandler, notFoundHandler } from "./utils/error-handler";

/**
 *
 * @returns app
 * Build All App features here
 */
export const buildApp = () => {
  const app = Fastify({ logger: true });
  app.register(require("fastify-formbody"));

  // SOME SWAGGER OPEN API 3 UI
  app.register(require("fastify-swagger"), {
    exposeRoute: true,
    routePrefix: "/documentation",
    swagger: {
      info: { title: "My API" },
    },
  });

  // Add the plugins & handlers here
  app.setErrorHandler(errorHandler);
  app.setNotFoundHandler(notFoundHandler);
  app.register(require("fastify-cors"), {
    origin: false,
  });
  app.register(hotelRoutes, { prefix: "hotel" });
  app.register(menuItemRoutes, { prefix: "menu" });
  app.register(orderRoutes, { prefix: "order" });

  return app;
};
