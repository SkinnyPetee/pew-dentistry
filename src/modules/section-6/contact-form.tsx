"use client";

import type * as React from "react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setStatusMessage("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: ContactPayload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setStatusMessage("Please fill in your name, email, and message.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setStatusMessage(
        "Thanks! We received your message and will respond soon."
      );
      form.reset();
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong. Please try again or call our office."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="border border-slate-200 w-full max-w-[400px]">
      <CardHeader>
        <CardTitle className="text-slate-900">Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <form onSubmit={onSubmit} className="grid gap-4" noValidate>
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              className="placeholder:text-slate-600"
              placeholder="Jane Doe"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              aria-required="true"
              className="placeholder:text-slate-600"
              placeholder="jane@example.com"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              pattern="^[0-9()+\-.\s]{7,}$"
              title="Please enter a valid phone number"
              className="placeholder:text-slate-600"
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              aria-required="true"
              rows={5}
              className="resize-y placeholder:text-slate-600"
              placeholder="Briefly describe how we can help..."
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-500"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </div>

          {status !== "idle" ? (
            <Alert
              className={
                status === "success"
                  ? "border-green-600/30"
                  : "border-red-600/30"
              }
              variant="default"
              role="status"
            >
              <AlertDescription
                className={
                  status === "success" ? "text-green-700" : "text-red-700"
                }
              >
                {statusMessage}
              </AlertDescription>
            </Alert>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
