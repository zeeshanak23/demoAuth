FROM ubuntu:22.04
ENV NEXTAUTH_URL http://localhost:3000

ENV NEXT_PUBLIC_SECRET ZESGhjsdgjsbsdjhcl

ENV DATABASE_URL 'mysql://root:Zeeshan786@localhost/demoauth'

ENV GITHUB_SECRET 23d01518d5a84803d8cf84308c309b065b33b11a

ENV GITHUB_ID e075bcfb2634f3afcef3

ENV GOOGLE_SECRET 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

ENV GOOGLE_ID 940901479605-g00k4thel30q59lc1msrm7fj2mndvsc6.apps.googleusercontent.com

RUN mkdir -p /website 

WORKDIR /app

COPY . .

RUN apt-get update

RUN apt-get install -y mysql-server 

RUN apt-get install curl -y 

RUN curl -s https://deb.nodesource.com/setup_18.x | bash

RUN apt-get install -y nodejs
RUN npm install next-auth

RUN npm install @prisma/client @auth/prisma-adapter

RUN npm install prisma --save-dev

RUN apt-get install git -y  

RUN git clone https://zeeshanak23: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@github.com/zeeshanak23/demoAuth.git

EXPOSE 3000

COPY /entrypoint.sh /entrypoint.sh

RUN chmod +x entrypoint.sh
CMD [ "/entrypoint.sh" ]