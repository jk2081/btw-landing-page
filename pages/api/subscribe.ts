import { NextApiRequest, NextApiResponse } from "next";

const CONVERTKIT_API_URL = "https://api.convertkit.com/v3/forms";
const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

export default async function SubscribeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;
    console.log(`${CONVERTKIT_API_URL}/${CONVERTKIT_FORM_ID}/subscribe`);
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const response = await fetch(
        `${CONVERTKIT_API_URL}/${CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            api_key: CONVERTKIT_API_KEY,
            email,
          }),
        }
      );
      console.log(response);
      if (!response.ok) {
        const errorData = await response.json();
        return res
          .status(500)
          .json({ error: errorData.message || "Subscription failed" });
      }

      res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      res.status(500).json({ error: "An error occurred while subscribing" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
