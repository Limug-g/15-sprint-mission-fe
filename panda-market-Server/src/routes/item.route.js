import express from 'express';

export const userRouter = express.Router();

let users =  [
  { id: 1, name: '네임', description: '이건 디폴트 이미지 입니다.', price: 1_500_000, tags : ['',''], createdAt, updatedAt}
];