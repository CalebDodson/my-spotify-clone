const express = require('express')
import cors from 'cors'
import { PrismaClient } from '@prisma/client/extension'
import routes from './routes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(5000, () => {console.log("Server started on port 5000")});