import express, { Application, Request, Response } from 'express'
import cors from "cors";
import router from './app/routes';
const app: Application = express()


// parser
app.use(cors());
app.use(express.json());

// global route
app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running smoothly!')
})


// global error handler
// app.use(globalErrorHandler);

// not found route
// app.use(notFound);

export default app;