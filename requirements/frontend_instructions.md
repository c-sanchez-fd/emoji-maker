# Project overview

Use this project to build a web app where users can give a text prompt to generate emoji using model hosted on Replicate.

# Feature requirements

- We will use Next.js, Shadcn, Lucid, Supabase, Clerk
- Create a form where users can put in promt, and clicking on button that calls the replicate model to geneate emoji
- Have a nice UI & animation when the emoji is blank or generating
- Display all the images ever generated in grid
- When hover each emoji img, an icon button for download, and an icon button for like should be shown up

# Relevant docs

## How to use replicate emoji generator model

Install Replicate’s Node.js client library
npm install replicate

Copy
Set the REPLICATE_API_TOKEN environment variable
export REPLICATE_API_TOKEN=r8_ZND******\*\*\*\*******\*\*******\*\*\*\*******

Visibility

Copy
This is your Default API token. Keep it to yourself.

Import and set up the client
import Replicate from "replicate";

const replicate = new Replicate({
auth: process.env.REPLICATE_API_TOKEN,
});

Copy
Run fofr/sdxl-emoji using Replicate’s API. Check out the model's schema for an overview of inputs and outputs.

const output = await replicate.run(
"fofr/sdxl-emoji:dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e",
{
input: {
width: 1024,
height: 1024,
prompt: "A TOK emoji of a man",
refine: "no_refiner",
scheduler: "K_EULER",
lora_scale: 0.6,
num_outputs: 1,
guidance_scale: 7.5,
apply_watermark: false,
high_noise_frac: 0.8,
negative_prompt: "",
prompt_strength: 0.8,
num_inference_steps: 50
}
}
);
console.log(output);

# Current File structure

emoji-generator-current/
├── emoji-maker/
├── .next/
├── app/
│ ├── fonts/
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ │ └── ui/
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ └── input.tsx
├── lib/
├── node_modules/
├── requirements/
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

# Rules

- All new componennts should go in emoji-maker/components and be named like example-component.tsx unless otherwise specified
- All new pages go in emoji-maker/app
