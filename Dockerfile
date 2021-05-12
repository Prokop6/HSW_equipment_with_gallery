FROM node:14

WORKDIR /app

USER nodeDeveloper

ENTRYPOINT ["./bin/entrypoint.sh"]