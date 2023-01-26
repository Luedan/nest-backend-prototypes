# Base image
FROM node:18-alpine3.17

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm config set unsafe-perm true

# Install app dependencies
RUN npm install --force

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 3000
# Start the server using the production build
CMD [ "node", "dist/presentation/app.js" ]