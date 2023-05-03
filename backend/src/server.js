const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT; //padrão 3333;

app.listen(PORT, () => console.log(`server running port: ${PORT}`));
