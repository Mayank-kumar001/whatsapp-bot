import OpenAI from "openai"
import "dotenv/config"


console.log("heloooooo",process.env.GOOGLE_API_KEY)

const client = new OpenAI({
    apiKey : process.env.GOOGLE_API_KEY,
    baseURL : "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export const chatbotMessage = async (userMessage) => {
    const messageStack = [{
        role: "system",
        message: "you are a AI female whatsapp assistant chatbot. you would answer the user query in a crisp and short manner.Be friendly with user."
    },
    {
        role: "user",
        content: userMessage
    }
    ]
    const response = await client.chat.completions.create({
        model: "gemini-2.5-flash",
        messages: messageStack
    });
    return response.choices[0].message.content
}
