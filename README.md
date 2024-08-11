# Photo Album

## Requirements
- Node.js (>= 14.x)
- npm (>= 6.x)
- React 18

## Preview
https://kameshwaran-photo-album.netlify.app/

## Installation
git clone https://github.com/Kameshwaran-E/Photo-Album

cd Photo-Album

npm install


## Running the project
    npm start

## Project Structure
     src/: Contains all source code.
     components/: Reusable components (Navbar, Carousel, ImageGallery, Shimmer).
     App.js: Main application component.
     index.js: Application entry point.
     
## Picsum API Integration
The project uses the Picsum API to fetch random images. This API is great for generating placeholder images and practicing image handling in a React app.

## Key Features
Fetching Images: Images are fetched from the Picsum API using the fetch method in React’s useEffect hook.

Pagination: The gallery supports pagination with "Previous" and "Next" buttons, allowing users to navigate through different pages of images.

Shimmer Effect: A shimmer loading effect is displayed while the images are being fetched, enhancing the user experience.

Responsive Design: The layout is responsive, making use of Bootstrap for grid and component styling.
