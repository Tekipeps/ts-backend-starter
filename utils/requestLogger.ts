import logger from './logger'
import {Request, Response, NextFunction} from 'express'

const requestLogger = (request: Request, _: Response, next: NextFunction): void => {
    logger.info('Method:', request.method);
    logger.info('Path:  ', request.url);
    logger.info('Body:  ', request.body);
    logger.info('---');
    next();
}

export default requestLogger