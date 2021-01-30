import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('...request');
  next();
};

export default loggerMiddleware;
