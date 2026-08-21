//환경 변수에 대한 정의와 검증을 진행하여 적절한 값 이외의 경우 에러를 발생시키기 위함
//zod를 사용하여 환경 변수 검증 진행
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.coerce.number(),
  MONGO_URI: z.string(),
});

const parseEnvschema = () => {
  try {
    envSchema.parse()
  } catch (error) {
    
  }
};
