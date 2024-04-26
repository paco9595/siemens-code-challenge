
import dotenv from 'dotenv';
import app from '../routes';

//For env File 
dotenv.config();

const port = process.env.PORT || 8000;
     
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

export default app