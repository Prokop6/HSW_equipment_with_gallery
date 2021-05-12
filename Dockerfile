FROM node:14

WORKDIR /app

USER node

ENTRYPOINT ["./bin/entrypoint.sh"]