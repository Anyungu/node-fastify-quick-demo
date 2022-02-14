export const getSingleMenuItemOpts = {
  schema: {
    params: { type: "object", properties: { id: { type: "number" } } },
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          price: { type: "number" },
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

export const getMenuItemsOpts = {
  schema: {
    response: {
      200: {
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

export const createMenuItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
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
        name: {
          type: "string",
          errorMessage: {
            type: "Bad name",
          },
        },
        price: {
          type: "number",
          errorMessage: {
            type: "Bad price",
          },
        },
      },
      required: ["name", "price"],
      errorMessage: {
        required: {
          name: "no name?",
          price: "No price?",
        },
      },
    },
  },
};
