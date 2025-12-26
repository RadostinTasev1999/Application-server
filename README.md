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


## -------------------------------------------------------------------------------

## Set Up the MongoDB Database (Managed)

1. Register in MongoDB Atlas: `https://www.mongodb.com/lp/cloud/atlas/try4-reg?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core-high-int_prosp-brand_gic-null_ww-tier4_ps-all_desktop_eng_lead&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=22031347578&adgroup=173739098633&cq_cmp=22031347578&gad_source=1&gad_campaignid=22031347578&gbraid=0AAAAADQ1400fJQaQBeUhhSoqC6P2XaIuJ&gclid=CjwKCAiAu67KBhAkEiwAY0jAlbqW3jRCH9AqaC3R98dDTkXJQ-sGIt-yhBWrkombRJyo75XWQRwicBoC5hQQAvD_BwE`
2. Create a cluster: `https://www.mongodb.com/resources/products/fundamentals/mongodb-cluster-setup`
3. Connect to Cluster:
     - Connect with MongoDB driver
     - Select driver and version
     - Install driver: `npm install mongodb`
     - Add connection string to application code
