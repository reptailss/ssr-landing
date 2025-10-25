FROM node:20-alpine
RUN apk add --no-cache git
WORKDIR /gis
COPY package.json  /gis
RUN npm install --prefer-online
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "app"]
