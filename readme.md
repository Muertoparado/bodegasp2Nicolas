
val mid

import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validationMiddleware<T>(type: new () => T): any {
  return (req: Request, res: Response, next: NextFunction) => {
    validate(plainToClass(type, req.body)).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const message = errors.map((error: ValidationError) => Object.values(error.constraints!)).join(', ');
        res.status(400).json({ error: message });
      } else {
        next();
      }
    });
  };
}

controller

import { Request, Response } from 'express';

export function createUser(req: Request, res: Response) {
  // Handle the request here...
  // You can access the validated data with req.body
  // You can save the data to the database
  // You can send a response with res.send(), res.json(), etc.
}

routes
import express from 'express';
import { CreateUserDto } from '../dto/create-user.dto';
import { validationMiddleware } from '../middleware/validation.middleware';
import { createUser } from '../controllers/users.controller';

const router = express.Router();

router.post('/', validationMiddleware(CreateUserDto), createUser);

export default router;


appp
import express from 'express';
import usersRoutes from './routes/users.routes';

const app = express();
app.use(express.json());

app.use('/users', usersRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));
