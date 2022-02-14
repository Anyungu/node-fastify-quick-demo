export const getSingleOrderOpts = {
  schema: {
    params: { type: "object", properties: { id: { type: "number" } } },
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "string" },
          hotel: {
            type: "object",
            properties: {
              id: { type: "number" },
              name: { type: "string" },
              location: { type: "string" },
            },
          },
          menuItems: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                name: { type: "string" },
                price: { type: "number" },
              },
            },
          },
        },
      },
      404: {
        type: "object",
        properties: {
          code: { type: "number" },
          message: { type: "string" },
        },
      },
      500: {
        type: "object",
        properties: {
          code: { type: "number" },
          message: { type: "string" },
        },
      },
    },
  },
};

export const getOrdersOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "number" },
            hotel: {
              type: "object",
              properties: {
                id: { type: "number" },
                name: { type: "string" },
                location: { type: "string" },
              },
            },
            menuItems: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  name: { type: "string" },
                  price: { type: "number" },
                },
              },
            },
          },
        },
      },
      500: {
        type: "object",
        properties: {
          code: { type: "number" },
          message: { type: "string" },
        },
      },
    },
  },
};

export const createOrderOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
      404: {
        type: "object",
        properties: {
          code: { type: "number" },
          message: { type: "string" },
        },
      },
      500: {
        type: "object",
        properties: {
          code: { type: "number" },
          message: { type: "string" },
        },
      },
    },
    body: {
      type: "object",
      properties: {
        hotel_id: {
          type: "number",
          errorMessage: {
            type: "Bad id",
          },
        },
        menu_items_id: {
          type: "array",
          items: { type: "number" },
          errorMessage: {
            type: "Bad items",
          },
        },
      },
      required: ["hotel_id", "menu_items_id"],
      errorMessage: {
        required: {
          name: "no name?",
          location: "No location?",
        },
      },
    },
  },
};
