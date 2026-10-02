#!/bin/bash
docker stop buyonemedia-web 2>/dev/null || true
docker rm buyonemedia-web 2>/dev/null || true
docker run -d \
  --name buyonemedia-web \
  --network coolify \
  --restart unless-stopped \
  --label 'traefik.enable=true' \
  --label 'traefik.http.routers.buyonemedia-http.entryPoints=http' \
  --label 'traefik.http.routers.buyonemedia-http.middlewares=redirect-to-https' \
  --label 'traefik.http.routers.buyonemedia-http.rule=Host(`buyonemedia.com`) || Host(`www.buyonemedia.com`)' \
  --label 'traefik.http.routers.buyonemedia.entryPoints=https' \
  --label 'traefik.http.routers.buyonemedia.rule=Host(`buyonemedia.com`) || Host(`www.buyonemedia.com`)' \
  --label 'traefik.http.routers.buyonemedia.tls=true' \
  --label 'traefik.http.routers.buyonemedia.tls.certresolver=letsencrypt' \
  --label 'traefik.http.services.buyonemedia.loadbalancer.server.port=3000' \
  buyonemedia-site:v2