## Server Deployment:

1. Server Deployment (GCP Cloud Run)
- [x] Create Project in GCP
- [x] Clear unused Docker containers and images `docker system prune -a`
- [x] Create Docker file
- [] Create docker image `docker build -t angular-application-server .`
- [] View docker images: `docker images`
- [] Start local container: `docker run -p 8080:8080 angular-application-server`  

-------------------------------------------------------------------------------
## Running MongoDB in Docker
- download MongoDB Docker image `docker pull mongodb/mongodb-community-server:latest`
- create a Docker volume `docker volume create mongodb`
- specify the created volume to the container
<!-- docker run -d 
     -p 27017:27017
     -e MONGO_INITDB_ROOT_USERNAME=nraboy 
     -e MONGO_INITDB_ROOT_PASSWORD=password1234 
     -v mongodb:/data/db (we use docker volume mongodb and then we map it to the container volume, located at /data/db)
     --name mongodb mongodb/mongodb-community-server:latest
-->
    - connect to mongodb `mongosh "mongodb://localhost:27017" --username nraboy`
    