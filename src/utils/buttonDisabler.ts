import { validate } from "class-validator";

export async function buttonDisabler(model: any) {
  return (await validate(model)).length > 0;
}
