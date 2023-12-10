import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('mail接口')
@Controller('api/mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('/')
  @ApiResponse({ status: 200, description: '邮件提醒' })
  @ApiOperation({ summary: '发送邮件' })
  async sendMail() {
    try {
      await this.mailService.sendMail('1849201815@qq.com', '取件码', [
        { code: '1-111', address: '兔喜' },
        { code: '2-111', address: '菜鸟' },
      ]);
      return { success: true, message: 'Email sent successfully' };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to send email',
        error: error.message,
      };
    }
  }
}
