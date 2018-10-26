FROM node:10-alpine as angular-app
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN npm run build --prod --build-optimizer

FROM nginx:alpine
COPY --from=angular-app /usr/src/app/dist /usr/share/nginx/html
#COPY ./dist /usr/share/nginx/html
EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]


#FROM nginx:alpine
#
#COPY nginx.conf /etc/nginx/nginx.conf
#
#WORKDIR /usr/share/nginx/html
#COPY dist/ .
