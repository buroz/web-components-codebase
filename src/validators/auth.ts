import { IsNotEmpty, IsEmail, IsString } from "class-validator";
import { RegisterRequest, LoginRequest } from "../_interfaces";

export class AuthLoginForm {
  @IsEmail()
  public email = "";

  @IsNotEmpty({ message: "Please enter your password" })
  public password = "";

  constructor(request?: LoginRequest) {
    if (request) {
      this.email = request.email;
      this.password = request.password;
    }
  }
}

export class RegisterLoginForm {
  @IsString()
  public name = "";

  @IsString()
  public surname = "";

  @IsEmail()
  public email = "";

  @IsNotEmpty({ message: "Please enter your password" })
  public password = "";

  @IsNotEmpty({ message: "Please enter your password" })
  public passwordAgain = "";

  constructor(request?: RegisterRequest) {
    if (request) {
      this.name = request.name;
      this.surname = request.surname;
      this.email = request.email;
      this.password = request.password;
    }
  }
}
