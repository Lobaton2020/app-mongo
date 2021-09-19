- Command for run code in image docker

docker run -d -i -t -e MONGO_URI="mongodb+srv://<user>:<password>@<server>" -e PORT="3000" -e DATABASE_NAME="<database>" -e NODE_ENV="DEV" -p 3000:3000 <image-name>
