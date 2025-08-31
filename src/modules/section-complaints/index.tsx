import type React from "react";
import { cn } from "@/lib/utils";
import {
  Clock,
  CreditCard,
  Calendar,
  MessageSquare,
  ShieldCheck,
  MapPin,
} from "lucide-react";

type Complaint = {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const complaints: Complaint[] = [
  {
    name: "Long wait times",
    description: "Delays at check-in or before being seen.",
    icon: Clock,
  },
  {
    name: "Billing or charges",
    description: "Unexpected fees or unclear pricing.",
    icon: CreditCard,
  },
  {
    name: "Insurance processing",
    description: "Coverage, claims, or paperwork issues.",
    icon: ShieldCheck,
  },
  {
    name: "Scheduling & rescheduling",
    description: "Difficulty finding or changing an appointment.",
    icon: Calendar,
  },
  {
    name: "Communication & follow-up",
    description: "Missed calls, unclear instructions, or reminders.",
    icon: MessageSquare,
  },
  {
    name: "Accessibility & parking",
    description: "Directions, parking, or accessibility concerns.",
    icon: MapPin,
  },
];

export function ComplaintsSection({
  className,
  id = "complaints",
  heading = "Complaints",
  subheading,
  ctaHref,
  ctaLabel,
  theme = "teal-500",
  design = "minimal",
}: {
  className?: string;
  id?: string;
  heading?: string;
  subheading?: string;
  ctaHref?: string;
  ctaLabel?: string;
  theme?: string;
  design?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby="complaints-title"
      className={cn("w-full py-12 md:py-16", className)}
    >
      <div className="mx-auto max-w-3xl px-6">
        <header className="mb-6 md:mb-8">
          {/* Subtle teal accent bar for the section */}
          <div
            className="mb-3 h-1 w-10 rounded bg-teal-500"
            aria-hidden="true"
          />
          <h2
            id="complaints-title"
            className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl"
          >
            {heading}
          </h2>
        </header>

        {/* Replace list/grid with the exact content provided */}
        <div className="max-w-none text-sm leading-6 text-foreground">
          <p>
            We hope that you are entirely satisfied with your dental care and
            you would be happy to recommend our services to others.
          </p>
          <p className="mt-4">
            However, if you do have a complaint, please speak to our Practice
            Manager, <strong>Emma Wallbridge</strong>. Emma is responsible for
            our in-house complaints procedure. A copy of the practice complaints
            procedure is available from reception.
          </p>
          <p className="mt-4">
            The address of the General Dental Council is as follows:
          </p>

          <address className="mt-3 not-italic rounded-md border border-muted-foreground/10 bg-background p-4">
            <div>37 Wimpole Street</div>
            <div>London</div>
            <div>W1G 8DQ</div>
          </address>
        </div>
      </div>
    </section>
  );
}

export default ComplaintsSection;
