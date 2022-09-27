AskMe-Chatbot
Created a custom chatbot for webpage with React and Node.js. Taught chatbot to sell products, give recommendations and measure demand using DialogFlow.
GIT for deploying and version control. The bot will be hosted on Heroku, but you can simply host it anywhere else where they support Node.js. We'll use DialogFlow to process natural language. DialogFlow will help us understand what users want. In the course, we'll be building a sample chatbot. Its purpose is only to show you how things work. Our bot on the page will help us sell products. It will give recommendations and measure demand. The bot will be able to remember things, that is store information into a database or connect to other API services. The second section will introduce you to DialogFlow, a natural language processor, that we'll use to understand what our visitors want from the chatbot. We'll go through building blocks of DialogFlow. You'll learn about agents, intents, entities, parameters, pre-built agents, and more.

Then in the third section, we start building the server-side app for the chatbot. We'll install the Express library and generate an express app. After we are through with configuration, we deploy it to Heroku. To speed up the development process, we'll set up a local development server called Nodemon.

When you have a basic server-side app created, you'll be able to connect it to DialogFlow. And that is what we'll do in section 4.

And frontend will be the next step. In the fifth section, we set up React, configure local servers, create a proxy for communicating with the backend. And we'll develop components. Components for the page and for the chatbot. Our chatbot will begin to look like a chatbot in the 5th section.

But we'll polish it in the 6th section, where we'll create rich messages for the chatbot like cards and quick replies. And also, we'll go deeper into DialogFlow's features, like follow up intents, contexts, events, and slot feelings. Features that make bot creation much easier and much friendlier!

When our bot is polished, we can make it smarter. We want our bot to remember what the user says. Therefore we need to store information that we get from the user. In the 7th section, we'll be saving to the database and also use what we know about the user in a conversation. To make the bot friendlier. We like if people remember our preferences, it is the same with bots.

In the 8th section, I'll show you a different way to implement handling actions. We'll be using DialogFlow's fulfillment. I'll show you how to call fulfillment only for intents that need extra code to be run. Only for intents that need to get information from a database, or that need to call some other API, or maybe connect to a device.

When we master fulfillment, we'll deploy to Heroku. In the 9th section, we'll take care of some extra configuration like routing, postbuild scripts for generating frontend; we'll also go through the code and make sure all is as needed before we deploy.

And finally, in the 10th section, I'll show you how to connect to DialogFlow straight from FrontEnd. To do that, we'll need to make some changes to the architecture. I'll tell you the benefits of every decision.
