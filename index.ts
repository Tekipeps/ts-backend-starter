import * as http from 'http'
import app from './app'
import config from './utils/config'
import logger from './utils/logger'

const server = http.createServer(app)

const port = config.PORT

server.listen(port, () => {
    logger.info(`Server running on http://localhost:${port}`)
})