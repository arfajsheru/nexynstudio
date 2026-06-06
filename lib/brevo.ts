export async function sendEmail({
  to,
  subject,
  htmlContent,
  replyTo,
}: {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  replyTo?: { email: string; name?: string };
}) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "hello@nexynstudios.com";
  const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || "Nexyn Studios";

  console.log(`[BREVO] Attempting to send email to: ${to.map(t => t.email).join(', ')}`);
  console.log(`[BREVO] Subject: ${subject}`);

  if (!BREVO_API_KEY) {
    console.warn("[BREVO ERROR] BREVO_API_KEY is not defined. Skipping email sending.");
    return false;
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: BREVO_SENDER_NAME,
          email: BREVO_SENDER_EMAIL,
        },
        to,
        subject,
        htmlContent,
        ...(replyTo ? { replyTo } : {}),
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error(`[BREVO ERROR] Status: ${response.status}`);
      console.error(`[BREVO ERROR] Response: ${errorData}`);
      return false;
    }

    const data = await response.json();
    console.log(`[BREVO SUCCESS] Email successfully sent! Message ID: ${data.messageId}`);
    return true;
  } catch (error) {
    console.error("[BREVO CRITICAL ERROR] Failed to execute fetch request:", error);
    return false;
  }
}
