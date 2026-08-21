import express from 'express';

export const router = express.Router();

//라우터의 기본 동작 확인 -> 요청이 들어왔을 때 응답으로 다음과 같은 문구를 띄운다
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello Panda-market',
    timestamp: new Date().toISOString(),
  });
});
