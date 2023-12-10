import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as ejs from 'ejs';

interface mailBody {
  code: string;
  address: string;
}
@Injectable()
export class MailService {
  private transporter;

  constructor() {
    // 配置 nodemailer transporter，你需要提供你的 SMTP 服务器信息
    this.transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 587,
      secure: false,
      auth: {
        user: 'caokejian@foxmail.com',
        pass: 'vzvughygqvbxhche',
      },
    });
  }

  async sendMail(to: string, subject: string, body: mailBody[]): Promise<void> {
    const template = fs.readFileSync(
      'src/api/mail/mail.template.html',
      'utf-8',
    );

    // 替换模板中的占位符
    const html = ejs.render(template, { subject, body });
    // 配置邮件选项
    const mailOptions = {
      from: 'caokejian@foxmail.com',
      to,
      subject,
      html,
    };

    // 使用 transporter 发送邮件
    await this.transporter.sendMail(mailOptions);
  }
}
