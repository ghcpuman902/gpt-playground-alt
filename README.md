# GPT-Playground-Alt
An OpenAI GPT playground alternative that allows users to bring their own API keys, provides token usage calculation, price estimation, and more. It aims to offer comprehensive experiences in interacting with the OpenAI GPT series more efficiently and effectively.

(This project is an extension to the Next.js AI Chatbot by [vercel-labs](https://github.com/vercel-labs/ai-chatbot))

## Features
- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI
- Support for OpenAI (default), Anthropic, Hugging Face, or custom AI chat models and/or LangChain
- Expanded functionality to allow users to import and securely store their own API keys in the cloud
- New feature to test 'function calling' on the GPT models
- Token usage and Price calculation for each API call
- Chat History display and editing 
- Edge runtime-ready
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)
- Chat History, rate limiting, and session storage with [Vercel KV](https://vercel.com/storage/kv)
- [Next Auth](https://github.com/nextauthjs/next-auth) for authentication

## Roadmap
1. Improve token usage with compression for cost-efficient usage.
2. Further UI/UX enhancements for a seamless user experience.
3. Conduct security assessment and ensure data privacy compliance.
4. Finalize product and prepare for launch.

## TODO
1. Integration of user registration system for storing API keys securely. (and prepare for future OpenAI login)
2. Incorporate token count and price calculation features.
3. Implement function calling testing for GPT models.
4. Use task as tab instead of chat, and add version control within a chat (tree view).

## Deploy Your Own
You can deploy your own version of the GPT-Playground-Alt to Vercel with one click:
[![Deploy with Vercel](https://vercel.com/button)]()

### Known Issues
1. **Serverless Function Size Limitation:** The size of the serverless function for the GPT-Playground-Alt currently exceeds 1MB. This means you would need to subscribe to Vercel's non-free tier to successfully deploy this application. We are actively looking into ways to optimize the function size for broader accessibility. Your feedback and contributions to addressing this issue are very welcome.

## Running locally
You will need to use the environment variables [defined in `.env.example`](.env.example) to run new GPT-Playground-Alt. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`
```bash
pnpm install
pnpm dev
```
Your app should now be running on [localhost:3000](http://localhost:3000/).

## Stages
**Minimum Viable Product (MVP):**
1. **System Setup and Design:** Select the software architecture, tools, frameworks, and programming language(s) you will be using, considering factors such as scalability, maintainability, and cost. ✅
2. **API Integration:** Connect to OpenAI API, ensuring that the user can bring their API key for the integration. ✅
3. **Feature Implementation - Basic UI:** Create a basic user interface (UI) that allows the user to type a prompt and receive a response from the AI model. ✅
4. **Feature Implementation - Model Selection:** Implement a feature that allows the user to select the chat model they want to use.
5. **Feature Implementation - Basic Settings:** Add options for the user to set the 'temperature' and 'maximum token length' for the AI model's responses.
6. **Testing:** Test the fundamental functionalities and uncover any problems.

**Post-MVP Stages:**
7. **Feature Implementation - Advanced Settings:** Add options to set 'frequency penalty', 'top P', and 'presence penalty', along with warnings for when tokens exceed the maximum.
8. **User Registration and Key Storage:** Add a feature for users to register and securely store their own API key in the cloud. This feature would ideally include basic account management functions such as password changes, account deletion, etc.
9. **Feature Implementation - History of Conversations:** Enable users to save, edit, and view the history of their past inputs and the AI's responses.
10. **Feature Implementation - Token Savings and Price Calculation:** Implement a feature to calculate the number of tokens used in an API call and estimate the cost of that call. Moreover, make sure to include a feature to compress the tokens into a readable form to save on API usage rate.
11. **Advanced UI/UX:** Revamp the UI/UX of the platform to make it visually appealing and user-friendly.
12. **Beta Testing:** Publicly test your designed product to locate bugs or areas of improvement. Collect feedback and work on them to make the platform better
