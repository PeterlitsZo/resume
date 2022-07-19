FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
# The dist is here: /usr/src/app/dist
RUN yarn build

FROM nginx
COPY --from=0 ["/usr/src/app/dist", "/usr/share/nginx/html"]
EXPOSE 80
