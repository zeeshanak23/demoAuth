import * as z from "zod";

export default function withValidation(schema, handler) {
  return async function (req, res) {
    try {
      const body = req.body;
      await schema.parse(body);
      return handler(req, res);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json({ zodError: error.issue });
      }
      return res.status(422).end();
    }
  };
}
