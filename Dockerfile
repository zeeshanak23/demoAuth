FROM ubuntu:22.04

RUN mkdir -p /website 

WORKDIR /app

COPY . .

RUN apt-get update

RUN apt-get install -y curl

RUN curl -s https://deb.nodesource.com/setup_18.x | bash

RUN apt-get install -y nodejs

RUN apt-get install git -y  

RUN git clone https://zeeshanak23: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@github.com/zeeshanak23/demoAuth.git

RUN cd demoAuth/

RUN npm install -g npm@9.6.7
RUN npm install
RUN npm install next-auth
RUN npm install @prisma/client @auth/prisma-adapter
RUN npm install prisma --save-dev
RUN prisma generate
EXPOSE 3000


CMD ["npm","run","dev"]