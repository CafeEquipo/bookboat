 #!/bin/bash
if [ $1 == "start" ]; then
    source confidential-dev.txt
    cd keycloak
    docker-compose up -d
    cd ..
    bash setKeycloakIp.dev.sh
    docker-compose -f docker-compose-dev.yml up
elif [ $1 == "stop" ]; then
    docker-compose -f docker-compose-dev.yml down
    cd keycloak
    docker-compose down
fi