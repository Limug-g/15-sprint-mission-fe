import express from 'express';
import { router } from './routes/index.js';


const app = express();
const PORT = 5001;

//기본 미들웨어
app.use(express.json());
app.use(express.urlencoded({ estended: true }));
app.use(express.static('public'));

// 라우트를 미들웨어로 등록
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
