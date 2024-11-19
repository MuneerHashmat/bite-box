<h1 align="center">🌟 BiteBox Food Ordering Website 🌟</h1>

## Overview

This project is a single-page food delivery website built entirely with React.js. It allows users to browse through a variety of delicious dishes categorized for easy navigation. They can then add their favorite items to their cart, proceed to a secure checkout, and enjoy a delightful meal delivered straight to their doorstep (backend functionality not included in this project).4

![image](./src/assets/screenshots/1.png)

## Live Demo:

### [Bite Box](https://bite-box-five.vercel.app/)

## Features:

- 🔐 Seamless user authentication using Google Firebase
- 🍔 A wide range of food categories and items
- 🛒 Cart for adding food items
- 💳 Flawless checkout functionality and payment using Razorpay (test only)
- 🤖 AI chatbot assistant for recipes, culinary tips and more
- 📱 Fully responsive ui

## Technologies used:

- Vite - A fast development server and build tool for modern web applications.
- React JS - A JavaScript library for building user interfaces.
- Tailwind CSS - A CSS framework for rapidly building modern websites.
- Firebase (used for authentication ) - Google's application development platform
- Redux - A JavaScript library for managing application state
- Razorpay (test only) - A payment gateway that allows businesses to accept online payments.
- Gemini API - Official API of google gemini AI

## Installation:

1. Clone this repository :

```bash
git clone https:https://github.com/MuneerHashmat/bite-box.git
```

2. Navigate to the folder: `cd bite-box`
3. Install the dependencies: `npm install`
4. Create a .env file on root directory and add the following environment variables:

```bash
VITE_FIREBASE_API_KEY
VITE_GEMINI_API_KEY
VITE_RAZORPAY_API_KEY
```

4. Start development server:

```bash
npm run dev
```

## Challenges faced during development:

- Difficulty in managing local storage for user data.
- Difficulty in persisting cart data accross multiple pages.
- Difficulty in adding responsiveness using tailwind.

## Contributions

Contributions are welcome! If you have any suggestions, bug fixes, or feature requests, feel free to open an issue or submit a pull request.
