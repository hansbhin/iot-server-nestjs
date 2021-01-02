
npm i -g @nestjs/cli
npm start


docker build -t iot-server .
docker run -p 3000:3000 iot-server
