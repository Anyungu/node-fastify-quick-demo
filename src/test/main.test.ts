
/**
 * TODO: Fix tests
 * 
 */
import { buildApp } from "../app/app";

const test = async () => {
  const app = buildApp();
  const response = await app.inject({
    method: "GET",
    url: "/hotels/all",
  });

  console.log("status code: ", response.statusCode);
  console.log("body: ", response.body);
};

test();
