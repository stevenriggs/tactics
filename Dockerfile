# build environment
FROM node:16.8.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY .npmrc /app/.npmrc

# To handle 'not get uid/gid'
RUN npm config set unsafe-perm true

RUN npm install
RUN npm install react-scripts@3.0.1 -g
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.21.0-alpine
COPY nginx-nocache.conf /etc/nginx/conf.d/nginx-nocache.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]