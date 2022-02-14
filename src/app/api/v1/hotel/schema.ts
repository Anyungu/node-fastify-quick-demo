
/* ----------------
Hotel endpoint serializers and schemas
Applies for all similar files
------------------- */

export const getSingleHotelOpts = {
  schema: {
    params: { type: "object", properties: { id: { type: "number" } } },
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          location: { type: "string" },
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

export const getHotelsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "number" },
            name: { type: "string" },
            location: { type: "string" },
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

export const createHotelOpts = {
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
        location: {
          type: "string",
          errorMessage: {
            type: "Bad location",
          },
        },
      },
      required: ["name", "location"],
      errorMessage: {
        required: {
          name: "no name?",
          location: "No location?",
        },
      },
    },
  },
};
