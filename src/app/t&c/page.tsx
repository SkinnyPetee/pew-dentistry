import type { Metadata } from "next";
import { TermsConditions } from "@/modules/commons/t&c";

export const metadata: Metadata = {
  title: "Terms and Conditions | Pewsey Dental Practice",
  description: "Terms and Conditions for Pewsey Dental Practice.",
};

function formatTodayUK() {
  const d = new Date();
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function TermsPage() {
  return (
    <main className="min-h-dvh bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 pt-8">
        <div className="mb-6">
          <span className="inline-block rounded bg-teal-500 px-2 py-1 text-xs font-medium text-white">
            Terms
          </span>
        </div>
      </div>
      <TermsConditions
        practiceName="Pewsey Dental Practice"
        lastUpdated={formatTodayUK()}
        address="Pewsey, Wiltshire, SN9 5ES <br /> Tel: 01672 563622"
        phone="01672 563622"
        email="pewseydental@btconnect.com"
        paymentMethods="cash, card, insurance"
      />
    </main>
  );
}
