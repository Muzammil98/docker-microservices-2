FROM node:19.7.0-slim as base

WORKDIR /app

COPY /lib ./lib

RUN cd ./lib && npm install --omit=dev && cd ..

COPY package* .

RUN npm install --omit=dev

COPY . .

EXPOSE 5004

CMD ["npm","start"]

#--------------------------------

# # Copy the entrypoint script into the container
# COPY docker-entrypoint.sh /usr/local/bin/

# # Make the entrypoint script executable
# RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# # Set the custom entrypoint
# ENTRYPOINT ["docker-entrypoint.sh"]
   
# WORKDIR /app

# COPY package* .

# RUN npm install --omit=dev

# COPY . .

# EXPOSE 5004

# CMD ["npm","start"]

#--------------------------------
 
# COPY package* .

# RUN npm install --omit=dev

# COPY . .

# EXPOSE 5004

# CMD ["npm","start"]


# FROM node:19.7.0-slim

# ARG LIB_DIR

# # Create a directory in the image to copy the contents of the lib directory
# RUN mkdir -p /app/lib

# # Copy the contents of the lib directory to the image's /app/lib directory
# COPY $LIB_DIR /app/lib

# WORKDIR /app/lib

# RUN npm install --omit=dev

# WORKDIR /app

# COPY package* .

# RUN npm install --omit=dev

# COPY . .

# EXPOSE 5004

# CMD ["npm","start"]