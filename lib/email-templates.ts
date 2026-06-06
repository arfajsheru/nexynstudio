export function getInternalLeadEmailHTML(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  timestamp: string;
}) {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>New Lead Received</title>
    
    <style>
        /* Reset Styles */
        html, body { margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 100% !important; background-color: #ffffff; }
        * { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }
        div[style*="margin: 16px 0"] { margin: 0 !important; }
        table, td { mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; }
        table { border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important; }
        img { -ms-interpolation-mode:bicubic; border: 0; outline: none; text-decoration: none; max-width: 100%; }
        a { text-decoration: none; }
        body, table, td, a, p, h1, h2, h3, h4, h5, h6 { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #ffffff; padding-bottom: 60px; }
        .main { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 600px; border-spacing: 0; color: #111827; }
    </style>
</head>
<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #ffffff;">
    <center class="wrapper">
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" width="100%" style="max-width: 600px; margin: 0 auto;">
            
            <!-- Header Spacer -->
            <tr><td height="40" style="font-size:40px; line-height:40px;">&nbsp;</td></tr>
            
            <!-- Logo Header -->
            <tr>
                <td align="left" style="padding: 0 32px 24px 32px; border-bottom: 1px solid #e5e7eb;">
                    <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td align="left" style="font-family: -apple-system, sans-serif; font-size: 20px; font-weight: 700; color: #000000; letter-spacing: -0.5px;">
                                Nexyn Studios
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <!-- Hero Section -->
            <tr>
                <td align="left" style="padding: 32px 32px 24px 32px;">
                    <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280;">System Alert</span>
                    <h1 style="margin: 8px 0 0 0; font-size: 24px; font-weight: 600; color: #000000; letter-spacing: -0.5px;">New Project Inquiry</h1>
                </td>
            </tr>

            <!-- Information Card -->
            <tr>
                <td style="padding: 0 32px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;">
                        
                        <!-- Contact Info Row -->
                        <tr>
                            <td style="padding: 24px; border-bottom: 1px solid #f3f4f6;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td width="50%" valign="top" style="padding-bottom: 16px;">
                                            <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Client Name</p>
                                            <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111827;">${data.name}</p>
                                        </td>
                                        <td width="50%" valign="top" style="padding-bottom: 16px;">
                                            <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Company</p>
                                            <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111827;">${data.company}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="50%" valign="top">
                                            <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                                            <p style="margin: 0; font-size: 14px; font-weight: 500; color: #111827;"><a href="mailto:${data.email}" style="color: #000000; text-decoration: underline;">${data.email}</a></p>
                                        </td>
                                        <td width="50%" valign="top">
                                            <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                                            <p style="margin: 0; font-size: 14px; font-weight: 500; color: #111827;">${data.phone}</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Project Requirements Row -->
                        <tr>
                            <td style="padding: 24px; border-bottom: 1px solid #f3f4f6;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td width="50%" valign="top">
                                            <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Service Type</p>
                                            <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111827;">${data.service}</p>
                                        </td>
                                        <td width="50%" valign="top">
                                            <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Estimated Budget</p>
                                            <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111827;">${data.budget}</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Message Row -->
                        <tr>
                            <td style="padding: 24px; background-color: #fafafa;">
                                <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Project Description</p>
                                <p style="margin: 0; font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>

            <!-- CTA Section -->
            <tr>
                <td align="left" style="padding: 32px;">
                    <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td align="center" style="background-color: #000000; border-radius: 6px;">
                                <a href="mailto:${data.email}" style="display: inline-block; padding: 12px 24px; font-family: -apple-system, sans-serif; font-size: 13px; font-weight: 500; color: #ffffff; text-decoration: none;">Reply to Lead</a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td align="left" style="padding: 32px; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 500; color: #9ca3af;">Submitted on ${data.timestamp}</p>
                    <p style="margin: 0; font-size: 12px; color: #9ca3af; line-height: 1.5;">This is an automated system notification from the Nexyn Studios platform.</p>
                </td>
            </tr>

        </table>
    </center>
</body>
</html>`;
}

export function getClientAutoReplyEmailHTML(data: { name: string; service: string }) {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>Thank You for Contacting Nexyn Studios</title>
    <style>
        html, body { margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 100% !important; background-color: #ffffff; }
        * { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }
        div[style*="margin: 16px 0"] { margin: 0 !important; }
        table, td { mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; }
        table { border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important; }
        img { -ms-interpolation-mode:bicubic; border: 0; outline: none; text-decoration: none; max-width: 100%; }
        a { text-decoration: none; }
        body, table, td, a, p, h1, h2, h3, h4, h5, h6 { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #ffffff; padding-bottom: 60px; }
        .main { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 600px; border-spacing: 0; color: #111827; }
    </style>
</head>
<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #ffffff;">
    <center class="wrapper">
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" width="100%" style="max-width: 600px; margin: 0 auto;">
            
            <!-- Header Spacer -->
            <tr><td height="40" style="font-size:40px; line-height:40px;">&nbsp;</td></tr>
            
            <!-- Logo Header -->
            <tr>
                <td align="left" style="padding: 0 32px 24px 32px; border-bottom: 1px solid #e5e7eb;">
                    <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td align="left" style="font-family: -apple-system, sans-serif; font-size: 20px; font-weight: 700; color: #000000; letter-spacing: -0.5px;">
                                Nexyn Studios
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <!-- Hero Section -->
            <tr>
                <td align="left" style="padding: 48px 32px 32px 32px;">
                    <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 600; color: #000000; letter-spacing: -0.5px; line-height: 1.3;">Inquiry received.</h1>
                    <p style="margin: 0 0 24px 0; font-size: 15px; color: #4b5563; line-height: 1.6;">
                        Hi ${data.name},<br><br>
                        Thank you for reaching out to Nexyn Studios. We have successfully received your project inquiry for <strong>${data.service}</strong>.
                    </p>
                    <p style="margin: 0; font-size: 15px; color: #4b5563; line-height: 1.6;">
                        Our engineering team is currently reviewing your requirements. We aim to respond to all inquiries within 24 hours to schedule a brief discovery call.
                    </p>
                </td>
            </tr>

            <!-- Next Steps / Process -->
            <tr>
                <td style="padding: 0 32px 32px 32px;">
                    <h2 style="margin: 0 0 16px 0; font-size: 12px; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;">What happens next</h2>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-left: 1px solid #e5e7eb; padding-left: 16px;">
                        <tr>
                            <td style="padding-bottom: 20px;">
                                <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #111827;">1. Technical Review</h3>
                                <p style="margin: 0; font-size: 14px; color: #6b7280; line-height: 1.5;">Our architects analyze your requirements and objectives.</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 20px;">
                                <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #111827;">2. Discovery Call</h3>
                                <p style="margin: 0; font-size: 14px; color: #6b7280; line-height: 1.5;">We will reach out to schedule a 30-minute alignment meeting.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #111827;">3. Formal Proposal</h3>
                                <p style="margin: 0; font-size: 14px; color: #6b7280; line-height: 1.5;">You receive a detailed technical architecture and pricing strategy.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <!-- CTA Section -->
            <tr>
                <td align="left" style="padding: 0 32px 48px 32px;">
                    <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td align="center" style="background-color: #000000; border-radius: 6px;">
                                <a href="https://nexynstudios.com/portfolio" target="_blank" style="display: inline-block; padding: 12px 24px; font-family: -apple-system, sans-serif; font-size: 13px; font-weight: 500; color: #ffffff; text-decoration: none;">View Our Portfolio</a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td align="left" style="padding: 32px; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #111827;">Nexyn Studios</p>
                    <p style="margin: 0 0 16px 0; font-size: 13px; color: #6b7280; line-height: 1.5;">Engineering Digital Products.<br>Built to Scale.</p>
                    <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="padding-right: 16px;"><a href="https://linkedin.com/company/nexynstudios" style="font-size: 12px; color: #9ca3af; text-decoration: none; font-weight: 500;">LinkedIn</a></td>
                            <td style="padding-right: 16px;"><a href="https://twitter.com/nexynstudios" style="font-size: 12px; color: #9ca3af; text-decoration: none; font-weight: 500;">Twitter</a></td>
                            <td><a href="https://nexynstudios.com" style="font-size: 12px; color: #9ca3af; text-decoration: none; font-weight: 500;">Website</a></td>
                        </tr>
                    </table>
                </td>
            </tr>

        </table>
    </center>
</body>
</html>`;
}
