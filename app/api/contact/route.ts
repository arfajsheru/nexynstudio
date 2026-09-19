import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { sendEmail } from "@/lib/brevo";
import { getInternalLeadEmailHTML, getClientAutoReplyEmailHTML } from "@/lib/email-templates";

export async function POST(req: Request) {
  console.log("=========================================");
  console.log("[API CONTACT] New submission received!");
  
  try {
    const body = await req.json();

    const {
      fullName,
      phone,
      email,
      company,
      service,
      budget,
      timeline,
      details,
      preferredContact,
    } = body;

    // 1. Basic Server-Side Validation
    if (!fullName || !email || !phone || !details) {
      console.warn("[API CONTACT ERROR] Missing required fields");
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 2. Fallbacks for optional fields
    const resolvedService = service || "General Software Inquiry";
    const resolvedBudget = budget || "Flexible / To be discussed";
    const resolvedTimeline = timeline || "To be discussed";
    const resolvedPreferredContact = preferredContact || "Email";

    // 3. Generate Lead ID and Timestamp
    const timestamp = new Date().toISOString();
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    console.log(`[API CONTACT] Generated Lead ID: ${leadId}`);

    const newLead = {
      id: leadId,
      name: fullName,
      email,
      phone,
      company: company || "",
      service: resolvedService,
      budget: resolvedBudget,
      timeline: resolvedTimeline,
      message: details,
      preferredContact: resolvedPreferredContact,
      createdAt: timestamp,
    };

    // 4. Persist Data to data/leads.json
    try {
      const dataFilePath = path.join(process.cwd(), "data", "leads.json");
      let existingLeads = [];
      if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath, "utf8");
        existingLeads = JSON.parse(fileContent);
      }
      existingLeads.push(newLead);
      fs.writeFileSync(dataFilePath, JSON.stringify(existingLeads, null, 2), "utf8");
      console.log("[API CONTACT] Lead successfully saved to data/leads.json");
    } catch (err) {
      console.error("[API CONTACT ERROR] Error saving lead to local JSON:", err);
    }

    // 5. Send Internal Lead Notification (To Admin)
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail) {
      console.log(`[API CONTACT] Triggering Admin Notification Email to ${adminEmail}...`);
      await sendEmail({
        to: [{ email: adminEmail, name: "Nexyn Admin" }],
        subject: `New Lead: ${fullName} - ${resolvedService}`,
        htmlContent: getInternalLeadEmailHTML({
          name: fullName,
          email,
          phone,
          company: company || "N/A",
          service: resolvedService,
          budget: resolvedBudget,
          message: details,
          timestamp: new Date().toLocaleString(),
        }),
        replyTo: { email, name: fullName },
      });
    } else {
      console.warn("[API CONTACT] ADMIN_EMAIL is not defined in .env.local. Skipping admin notification.");
    }

    // 6. Send Client Auto-Reply
    console.log(`[API CONTACT] Triggering Client Auto-Reply Email to ${email}...`);
    await sendEmail({
      to: [{ email, name: fullName }],
      subject: "Thank you for contacting Nexyn Studios",
      htmlContent: getClientAutoReplyEmailHTML({
        name: fullName,
        service: resolvedService,
      }),
    });

    console.log("[API CONTACT] Form submission process complete!");
    console.log("=========================================");
    return NextResponse.json({ success: true, leadId }, { status: 200 });
  } catch (error) {
    console.error("[API CONTACT CRITICAL ERROR]:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
