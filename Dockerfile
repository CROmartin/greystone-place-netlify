FROM node:16-alpine3.11

RUN apk add --update --no-cache \
    build-base \
    g++ \
    gcc \
    libgcc \
    libstdc++ \
    linux-headers \
    make \
    python2 \
    py2-pip \
    glib-dev \
    gobject-introspection-dev \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    libwebp-dev \
    zlib-dev \
    vips-dev

RUN ln -sf /usr/bin/python2 /usr/bin/python
RUN npm install -g node-gyp@3.8.0

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

CMD ["npm", "start"]
