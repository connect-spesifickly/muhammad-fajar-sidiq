import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../helpers/api-response";
import { transporter } from "../helpers/nodemailer";
import { hbs } from "../helpers/handlebars";

class EmailController {
  async sendEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const compileVisitorsTouch = await hbs("email-send-template");
      const html = compileVisitorsTouch({
        email: req.body.email,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        message: req.body.message,
      });
      transporter.sendMail({
        to: "altitude.altair@gmail.com",
        subject: "sent email",
        html,
      });
      ApiResponse({
        res,
        statusCode: 200,
        message:
          "Link visitor message has been send successfully to your email",
        data: undefined,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new EmailController();
