# Build the container using the latest image of node
FROM node:14

# Tell the React app where its root dir should be
WORKDIR /app

# Tell npm where to store node_modules
ENV PATH /app/node_modules/.bin:$PATH

# This copies the specified files to the React app's working dir
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# Copy our code (.) into the container's working dir (./)
COPY . ./

CMD ["npm", "start"]