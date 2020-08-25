![Hipsy](https://i.ibb.co/cCZc12x/Screen-Shot-2020-08-01-at-1-56-07-PM.png)  
![Demo video](/hipsy_demo.gif)  


# Hipsy Image Carousel

> Image carousel service on e-commerce site to showcase a number of images for each product.  Allows for cycling through images, viewing them in a featured size or clicking them to view a full size modal.

## Related Projects

  - https://github.com/hrden05/proxy
  - https://github.com/hrden05/hipsy-similar-products
  - https://github.com/hrden05/etsy_reviews
  - https://github.com/hrden05/hipsty-product-details-main
  - https://github.com/hrden05/etsy_topSidebar

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Few steps to get spinning... 
- Firstly docker-compose up will start the express server and mySQL db.  
- The express server container needs then to be restarted to properly connect to the database. 
- Populate the database using the docker exec -it command on the express server container, npm run dbCreate and then npm run dbSeed. 
- Finally open the page to view the carousel service.

## Requirements

- Docker
- Docker-compose

## Development

- mySQL database
- Express.js server
- React.js hooks front-end
- Containerized with Docker


