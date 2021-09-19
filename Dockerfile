#image base
FROM mhart/alpine-node:8.12.0 as stage
#app directory stage
WORKDIR /root/stage/src
#copy file of dependences
COPY package*.json ./

#install typescript scope global
RUN npm i -g typescript
#isntall all dependences
RUN npm i

#copy all
COPY . .

# generate build
RUN tsc

####### Create app for image #######
FROM node:14.2.0-alpine3.11
#generata workgroup for app
WORKDIR /root/src/app
#copy fron stage to real app
COPY --from=stage /root/stage/src/package*.json /root/src/app
COPY --from=stage /root/stage/src/dist /root/src/app
#install dependeces for prod
RUN npm ci
#port to expose the application
EXPOSE 3000
#init app command
ENTRYPOINT ["npm","start"]
