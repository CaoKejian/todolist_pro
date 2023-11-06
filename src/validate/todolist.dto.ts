import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

// validate 为接受字段校验器
export class CreateTodoListDto {
  @ApiProperty({
    description: 'options选择信息',
    enum: ['1', '2'],
  })
  @IsNotEmpty()
  @IsString()
  @IsIn(['1', '2'])
  select: string;

  @ApiProperty({ description: 'input输入信息' })
  @IsString()
  input: string;
}
