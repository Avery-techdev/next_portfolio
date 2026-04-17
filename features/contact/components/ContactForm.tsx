"use client";
// "use client" — needs useActionState for form submission feedback (pending state, success/error)

import { useActionState } from "react";
import { submitContact } from "../actions/submitContact";
import type { ContactFormState } from "../types";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full bg-transparent border-b border-edge py-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none transition-colors";

export function ContactForm() {
  const [state, action, isPending] = useActionState<
    ContactFormState | null,
    FormData
  >(submitContact, null);

  if (state?.success) {
    return (
      <p
        className="py-8 text-center font-medium text-accent"
        role="status"
      >
        Message sent! I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form
      action={action}
      noValidate
      className="w-full space-y-6"
    >
      <div>
        <label htmlFor="contact-name" className="sr-only">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="NAME"
          autoComplete="name"
          required
          aria-required="true"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="EMAIL"
          autoComplete="email"
          required
          aria-required="true"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="sr-only"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="MESSAGE"
          rows={4}
          required
          aria-required="true"
          className={cn(inputClass, "resize-none")}
        />
      </div>

      {state?.error && (
        <p
          className="text-sm text-red-400"
          role="alert"
          aria-live="assertive"
        >
          {state.error}
        </p>
      )}

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="border-b-2 border-accent pb-0.5 text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Sending\u2026" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
