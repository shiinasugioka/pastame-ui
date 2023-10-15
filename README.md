# PastaMe 🍝

PastaMe is a web app that helps you cook delicious pasta dishes with whatever ingredients you have on hand. No more compromised pasta nights or wasting food!

![PastaMe Demo](https://github.com/shiinasugioka/pastame-ui/blob/main/PastaMe4.png)

## Inspiration

We all love pasta nights, but it's frustrating when we're missing key ingredients for our favorite recipes. That often leads to disappointing pasta experiences. On top of that, wasting food bothers us.

We envisioned an app that would allow us to cook amazing pasta dishes with whatever ingredients we have available, ensuring that no good food goes to waste.

## How It Works

PastaMe lets users take photos of their available ingredients. The app analyzes these images and suggests tailored pasta recipes based on those ingredients. It provides easy-to-follow instructions for creating delicious pasta dishes.

**Key Features:**
- Upload images of ingredients
- Ingredient recognition using computer vision
- Search the Edamam recipe API for matching pasta dishes
- Easy-to-follow recipe instructions
- Works seamlessly on both web and mobile platforms

## Technology Stack

We built PastaMe as a mobile web app using React and Node.js. Here are the key technologies we used:

- **React**: Frontend framework
- **Node.js**: Backend runtime
- **Google Vision API**: For ingredient image recognition
- **Edamam Recipe API**: Recipe database
- **Firebase**: Cloud hosting

The frontend allows users to upload images and view recipes, while the backend processes images, interfaces with APIs, and serves data via an API.

## Challenges Faced

Our main challenge was obtaining detailed and accurate ingredient identification from the Google Vision API. Properly processing the images to extract key components proved difficult. However, after much trial and error, we discovered techniques like pre-processing inputs that significantly improved vision detection.

## Accomplishments

We're particularly proud of overcoming the hurdle of extracting usable ingredient data from the vision API. Optimizing image processing was a major achievement.

## Lessons Learned

This project taught us valuable lessons in both computer vision and working with external APIs. Debugging APIs and adjusting inputs for better results were key takeaways.

## What's Next for PastaMe

We have exciting plans for PastaMe's future:
- Expanding beyond just pasta cuisines
- Enhancing ingredient detection accuracy
- Creating a smoother user experience
- Implementing recommendation algorithms
- Adding nutrition tracking features

We're committed to making PastaMe a service that eliminates food waste and cooking dilemmas for home cooks everywhere!

## Development

Want to run the code locally? Follow these steps:
1. Clone the repo
2. Install dependencies: `npm install`
3. Run: `npm run dev`
4. Open the app at `localhost:5173/` (or whichever local host port the app uses)
5. Make sure to set your browser to responsive dimensions and iphone 12 pro!

## Contributors

Built by:
- Shiina Sugioka
- Audrey Kho
- Leah Jia
- Aditya Khowal

Have any other questions? Let us know! 😊🍽️
