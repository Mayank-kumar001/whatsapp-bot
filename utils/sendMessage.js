import axios from "axios";

export const sendMessage = async (to, text) => {
  try {
    const url = `https://graph.facebook.com/v21.0/${process.env.PHONE_NUMBER_ID}/messages`;

    const payload = {
      messaging_product: "whatsapp",
      to, // user phone number
      type: "text",
      text: { body: text },
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
    };

    await axios.post(url, payload, { headers });
    console.log(`✅ Message sent to ${to}: ${text}`);
  } catch (error) {
    console.error("❌ Error sending message:", error.response?.data || error.message);
  }
}
