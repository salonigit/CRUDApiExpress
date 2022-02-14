import express from 'express'
import routes from './routes/index'
import db from './models'
import compression from 'compression'
import helmet from 'helmet'

const port=process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use('/', routes)
db.sequelize.sync()
app.use(helmet())
app.use(compression())

app.listen(port, () => {
    console.log("Port is running")
})
