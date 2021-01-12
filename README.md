
npm i -g @nestjs/cli <br>
npm install <br>
npm start

docker run -p 27017:27017 -v /tmp/db:/data/dbmongo mongo <br>
docker build -t iot-server . <br>
docker run -p 3000:3000 iot-server
