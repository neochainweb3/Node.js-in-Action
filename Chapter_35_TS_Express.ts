import express, { Request, Response } from 'express';
const app = express();
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript 👋');
});
app.listen(3000, () => console.log('Server running'));