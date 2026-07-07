import { useState } from "react";
import { getSupabase } from "../lib/supabase";

export type SubscribeStatus = "idle" | "submitting" | "success" | "already" | "error";

/** Shared newsletter-signup logic for the footer form. Identical across
 *  main/build/academy — only the `source` string passed by each site differs
 *  (so the same email can subscribe on more than one Trafy site without
 *  colliding; see docs/supabase/newsletter_subscribers.sql). */
export function useNewsletterSubscribe(source: string) {
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function subscribe(email: string): Promise<SubscribeStatus> {
    const trimmed = email.trim();
    if (!trimmed) return status;

    setStatus("submitting");
    const supabase = getSupabase();
    if (!supabase) {
      setStatus("error");
      setErrorMessage("Newsletter signup isn't configured yet.");
      return "error";
    }

    const { error } = await supabase.from("newsletter_subscribers").insert({ email: trimmed, source });

    // 23505 = unique_violation — this email already subscribed on this site.
    if (error) {
      if (error.code === "23505") {
        setStatus("already");
        return "already";
      }
      setStatus("error");
      setErrorMessage("Something went wrong — please try again.");
      return "error";
    }

    setStatus("success");
    return "success";
  }

  return { status, errorMessage, subscribe };
}
