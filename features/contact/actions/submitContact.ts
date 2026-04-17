"use server";

import type { ContactFormState } from "../types";

export async function submitContact(
  _prevState: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(
    formData.get("message") ?? "",
  ).trim();

  // Boundary validation — all fields required
  if (!name || !email || !message) {
    return {
      success: false,
      error: "Please fill in all fields.",
    };
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    };
  }

  // TODO: Connect to an email service (e.g. Resend, SendGrid, Nodemailer).
  // Example: await resend.emails.send({ from: "...", to: "...", subject: "...", text: message });

  return { success: true };
}
