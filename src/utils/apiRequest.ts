import config from "../config";
import { ApiRequest } from "../_interfaces";

export async function api(requestParams: ApiRequest): Promise<any> {
  try {
    const res = await fetch(`//${config.api}${requestParams.url}`, {
      method: requestParams.method,
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(requestParams.data) // body data type must match "Content-Type" header
    });
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
}
