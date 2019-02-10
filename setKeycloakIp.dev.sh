kcIp=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' keycloak_keycloak_1)
echo -e "{
  \"realm\": \"bookboat\",
  \"bearer-only\": true,
  \"auth-server-url\": \"http://${kcIp}:9080/auth\",
  \"ssl-required\": \"external\",
  \"resource\": \"node-server\",
  \"confidential-port\": 0
}" > server/keycloak.json

echo -e "{
    \"realm\": \"bookboat\",
    \"auth-server-url\": \"http://${kcIp}:9080/auth\",
    \"ssl-required\": \"external\",
    \"resource\": \"angular-client\",
    \"public-client\": true,
    \"confidential-port\": 0
  }
" > client/src/assets/keycloak.json