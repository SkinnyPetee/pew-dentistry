type TermsConditionsProps = {
  practiceName?: string;
  lastUpdated?: string;
  address?: string;
  phone?: string;
  email?: string;
  paymentMethods?: string;
};

export function TermsConditions({
  practiceName = "Pewsey Dental Practice",
  lastUpdated = "Insert Date",
  address = "[Practice Address]",
  phone = "[Phone Number]",
  email = "[Email Address]",
  paymentMethods = "[e.g., cash, card, insurance]",
}: TermsConditionsProps) {
  return (
    <section
      aria-labelledby="terms-heading"
      className="mx-auto w-full max-w-3xl px-4 py-10"
    >
      <header className="mb-8">
        <h1
          id="terms-heading"
          className="text-pretty text-3xl font-semibold tracking-tight text-slate-900"
        >
          Terms and Conditions
        </h1>
        <p className="mt-1 text-slate-700">{practiceName}</p>
        <p className="mt-1 text-sm text-slate-700">
          Last updated: {lastUpdated}
        </p>
        <div className="mt-4 h-px w-full bg-slate-200" />
      </header>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="mb-8">
        <h2 className="sr-only">Contents</h2>
        <ul className="list-disc pl-5 text-slate-700 space-y-1">
          <li>
            <a
              className="text-teal-500 underline-offset-2 hover:underline"
              href="#general-information"
            >
              1. General Information
            </a>
          </li>
          <li>
            <a
              className="text-teal-500 underline-offset-2 hover:underline"
              href="#appointments-cancellations"
            >
              2. Appointments & Cancellations
            </a>
          </li>
          <li>
            <a
              className="text-teal-500 underline-offset-2 hover:underline"
              href="#payments-fees"
            >
              3. Payments & Fees
            </a>
          </li>
          <li>
            <a
              className="text-teal-500 underline-offset-2 hover:underline"
              href="#treatment-consent"
            >
              4. Treatment & Consent
            </a>
          </li>
          <li>
            <a
              className="text-teal-500 underline-offset-2 hover:underline"
              href="#website-use"
            >
              5. Website Use
            </a>
          </li>
          <li>
            <a
              className="text-teal-500 underline-offset-2 hover:underline"
              href="#liability"
            >
              6. Liability
            </a>
          </li>
          <li>
            <a
              className="text-teal-500 underline-offset-2 hover:underline"
              href="#data-protection"
            >
              7. Data Protection
            </a>
          </li>
          <li>
            <a
              className="text-teal-500 underline-offset-2 hover:underline"
              href="#complaints"
            >
              8. Complaints
            </a>
          </li>
          <li>
            <a
              className="text-teal-500 underline-offset-2 hover:underline"
              href="#governing-law"
            >
              9. Governing Law
            </a>
          </li>
          <li>
            <a
              className="text-teal-500 underline-offset-2 hover:underline"
              href="#contact-us"
            >
              10. Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Content Sections */}
      <article className="prose prose-slate max-w-none">
        <p className="text-slate-700">
          Welcome to {practiceName}. By accessing or using our website and
          services, you agree to be bound by these Terms and Conditions. Please
          read them carefully before booking or receiving treatment.
        </p>

        <section
          id="general-information"
          aria-labelledby="general-information-heading"
          className="mt-8 scroll-mt-20"
        >
          <h2
            id="general-information-heading"
            className="text-xl font-semibold text-slate-900"
          >
            1. General Information
          </h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            <li>{practiceName} provides private and/or NHS dental care.</li>
            <li>
              These terms apply to the use of our website and all dental
              services provided by our practice.
            </li>
            <li>
              We may update these Terms and Conditions from time to time. The
              latest version will always be available on our website.
            </li>
          </ul>
        </section>

        <section
          id="appointments-cancellations"
          aria-labelledby="appointments-cancellations-heading"
          className="mt-8 scroll-mt-20"
        >
          <h2
            id="appointments-cancellations-heading"
            className="text-xl font-semibold text-slate-900"
          >
            2. Appointments &amp; Cancellations
          </h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            <li>Please arrive on time for your appointment.</li>
            <li>
              If you are unable to attend, we kindly ask for at least 24 hours’
              notice.
            </li>
            <li>
              Failure to provide adequate notice or missed appointments may
              result in a cancellation fee.
            </li>
            <li>
              Repeated missed appointments may affect your ability to receive
              future appointments.
            </li>
          </ul>
        </section>

        <section
          id="payments-fees"
          aria-labelledby="payments-fees-heading"
          className="mt-8 scroll-mt-20"
        >
          <h2
            id="payments-fees-heading"
            className="text-xl font-semibold text-slate-900"
          >
            3. Payments &amp; Fees
          </h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            <li>
              Treatment fees are explained prior to treatment and must be paid
              in accordance with our payment policy.
            </li>
            <li>We accept {paymentMethods}.</li>
            <li>
              NHS patients will be charged in line with NHS dental banding fees
              (if applicable).
            </li>
            <li>
              Private treatment costs will be confirmed in advance with a
              written treatment plan if requested.
            </li>
          </ul>
        </section>

        <section
          id="treatment-consent"
          aria-labelledby="treatment-consent-heading"
          className="mt-8 scroll-mt-20"
        >
          <h2
            id="treatment-consent-heading"
            className="text-xl font-semibold text-slate-900"
          >
            4. Treatment &amp; Consent
          </h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            <li>
              Before any treatment, your dentist will explain the procedure,
              risks, benefits, and alternatives.
            </li>
            <li>
              You will be asked to provide informed consent before treatment
              begins.
            </li>
            <li>
              You have the right to ask questions and decline treatment at any
              time.
            </li>
          </ul>
        </section>

        <section
          id="website-use"
          aria-labelledby="website-use-heading"
          className="mt-8 scroll-mt-20"
        >
          <h2
            id="website-use-heading"
            className="text-xl font-semibold text-slate-900"
          >
            5. Website Use
          </h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            <li>
              Content on our website is for general information only and should
              not be considered as medical advice.
            </li>
            <li>
              Always consult a qualified dentist for specific dental concerns.
            </li>
            <li>
              We make reasonable efforts to ensure the accuracy of website
              content but cannot guarantee it is always up to date.
            </li>
          </ul>
        </section>

        <section
          id="liability"
          aria-labelledby="liability-heading"
          className="mt-8 scroll-mt-20"
        >
          <h2
            id="liability-heading"
            className="text-xl font-semibold text-slate-900"
          >
            6. Liability
          </h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            <li>
              While we take all reasonable steps to ensure safe and effective
              dental care, we are not liable for any losses arising from use of
              the website.
            </li>
            <li>
              We are not liable for any delay or failure caused by events
              outside our control.
            </li>
            <li>
              Nothing in these Terms limits or excludes our liability for death,
              personal injury, or negligence under UK law.
            </li>
          </ul>
        </section>

        <section
          id="data-protection"
          aria-labelledby="data-protection-heading"
          className="mt-8 scroll-mt-20"
        >
          <h2
            id="data-protection-heading"
            className="text-xl font-semibold text-slate-900"
          >
            7. Data Protection
          </h2>
          <p className="mt-3 text-slate-700">
            We process personal data in accordance with our{" "}
            <a
              href="/privacy"
              className="text-teal-500 underline-offset-2 hover:underline"
            >
              Privacy Policy
            </a>
            . By using our services, you agree to our collection and use of your
            data as outlined in the Privacy Policy.
          </p>
        </section>

        <section
          id="complaints"
          aria-labelledby="complaints-heading"
          className="mt-8 scroll-mt-20"
        >
          <h2
            id="complaints-heading"
            className="text-xl font-semibold text-slate-900"
          >
            8. Complaints
          </h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            <li>We aim to provide the highest standards of care.</li>
            <li>
              If you are unhappy with any aspect of our service, please contact
              us directly so we can resolve the issue.
            </li>
            <li>
              You also have the right to escalate complaints to NHS England (for
              NHS patients) or the General Dental Council (GDC).
            </li>
          </ul>
        </section>

        <section
          id="governing-law"
          aria-labelledby="governing-law-heading"
          className="mt-8 scroll-mt-20"
        >
          <h2
            id="governing-law-heading"
            className="text-xl font-semibold text-slate-900"
          >
            9. Governing Law
          </h2>
          <p className="mt-3 text-slate-700">
            These Terms and Conditions are governed by the laws of England and
            Wales. Any disputes shall be subject to the exclusive jurisdiction
            of the English courts.
          </p>
        </section>

        <section
          id="contact-us"
          aria-labelledby="contact-us-heading"
          className="mt-8 scroll-mt-20"
        >
          <h2
            id="contact-us-heading"
            className="text-xl font-semibold text-slate-900"
          >
            10. Contact Us
          </h2>
          <address className="not-italic mt-3 text-slate-700">
            {practiceName}
            <br />
            {address}
            <br />
            {phone}
            <br />
            {email}
          </address>
        </section>
      </article>

      <div className="mt-10 flex items-center justify-between">
        <a
          href="#terms-heading"
          className="text-teal-500 underline-offset-2 hover:underline"
        >
          Back to top
        </a>
        {/* <span className="rounded border border-slate-200 px-2 py-1 text-xs text-slate-700">
          Theme: teal-500
        </span> */}
      </div>
    </section>
  );
}

export default TermsConditions;
