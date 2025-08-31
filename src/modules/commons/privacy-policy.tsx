type PrivacyPolicyProps = {
  practiceName?: string;
  lastUpdated?: string;
  address?: string;
  phone?: string;
  email?: string;
};

function formatToday(): string {
  try {
    const d = new Date();
    const day = d.getDate();
    const month = d.toLocaleString("en-GB", { month: "short" });
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  } catch {
    return "";
  }
}

export function PrivacyPolicy({
  practiceName = "Pewsey Dental Practice",
  lastUpdated = formatToday(),
  address = "[Practice Address]",
  phone = "[Phone Number]",
  email = "[Email Address]",
}: PrivacyPolicyProps) {
  const telHref = phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : undefined;

  return (
    <section aria-labelledby="privacy-title" className="bg-white">
      <header className="mb-8">
        <div className="border-l-4 border-teal-500 pl-4">
          <h1
            id="privacy-title"
            className="text-balance text-3xl font-bold text-slate-900"
          >
            Privacy Policy
          </h1>
          <p className="mt-1 text-slate-600">{practiceName}</p>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          Last updated:{" "}
          <span className="font-medium text-slate-900">{lastUpdated}</span>
        </p>
      </header>

      {/* Intro */}
      <p className="text-pretty text-slate-700">
        At {practiceName}, we are committed to protecting and respecting your
        privacy. This policy explains how we collect, use, store, and protect
        your personal information when you use our website or our services.
      </p>

      <div className="mt-8 space-y-8">
        {/* 1. Information We Collect */}
        <section
          aria-labelledby="collect"
          id="information-we-collect"
          className="scroll-mt-24"
        >
          <h2
            id="collect"
            className="text-xl font-semibold text-slate-900 border-l-4 border-teal-500 pl-3"
          >
            1. Information We Collect
          </h2>
          <p className="mt-2 text-slate-700">
            We may collect and process the following personal information about
            you:
          </p>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>Personal details (e.g., name, date of birth, gender).</li>
            <li>
              Contact information (e.g., phone number, email address, postal
              address).
            </li>
            <li>
              Medical and dental records (e.g., health history, treatments,
              x-rays, prescriptions).
            </li>
            <li>
              Payment details (e.g., billing address, insurance information,
              transaction history).
            </li>
            <li>
              Technical data when you use our website (e.g., IP address, browser
              type, cookies).
            </li>
          </ul>
        </section>

        {/* 2. How We Use Your Information */}
        <section
          aria-labelledby="use"
          id="how-we-use-your-information"
          className="scroll-mt-24"
        >
          <h2
            id="use"
            className="text-xl font-semibold text-slate-900 border-l-4 border-teal-500 pl-3"
          >
            2. How We Use Your Information
          </h2>
          <p className="mt-2 text-slate-700">
            We will only use your information when the law allows us to. Typical
            uses include:
          </p>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>Providing you with dental care and treatment.</li>
            <li>
              Contacting you about appointments, treatment updates, and
              reminders.
            </li>
            <li>Processing payments and insurance claims.</li>
            <li>Managing our practice operations and improving services.</li>
            <li>
              Complying with legal, regulatory, and professional obligations.
            </li>
          </ul>
        </section>

        {/* 3. Legal Basis for Processing */}
        <section
          aria-labelledby="legal"
          id="legal-basis-for-processing"
          className="scroll-mt-24"
        >
          <h2
            id="legal"
            className="text-xl font-semibold text-slate-900 border-l-4 border-teal-500 pl-3"
          >
            3. Legal Basis for Processing
          </h2>
          <p className="mt-2 text-slate-700">
            We process personal data under the following lawful bases:
          </p>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>
              <span className="font-medium text-slate-900">Consent</span> – when
              you agree to certain processing (e.g., marketing emails).
            </li>
            <li>
              <span className="font-medium text-slate-900">Contract</span> – to
              provide dental services you have requested.
            </li>
            <li>
              <span className="font-medium text-slate-900">
                Legal obligation
              </span>{" "}
              – to comply with UK laws and NHS regulations.
            </li>
            <li>
              <span className="font-medium text-slate-900">
                Vital interests
              </span>{" "}
              – in case of a medical emergency.
            </li>
            <li>
              <span className="font-medium text-slate-900">
                Legitimate interests
              </span>{" "}
              – to manage our practice effectively.
            </li>
          </ul>
        </section>

        {/* 4. Sharing Your Information */}
        <section
          aria-labelledby="sharing"
          id="sharing-your-information"
          className="scroll-mt-24"
        >
          <h2
            id="sharing"
            className="text-xl font-semibold text-slate-900 border-l-4 border-teal-500 pl-3"
          >
            4. Sharing Your Information
          </h2>
          <p className="mt-2 text-slate-700">
            We will never sell your personal data. We may share it with:
          </p>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>Other healthcare providers involved in your treatment.</li>
            <li>Laboratories, hospitals, or referral specialists.</li>
            <li>NHS, insurers, and regulators where required by law.</li>
            <li>
              IT, payment, or administrative service providers under strict
              confidentiality agreements.
            </li>
          </ul>
        </section>

        {/* 5. Data Retention */}
        <section
          aria-labelledby="retention"
          id="data-retention"
          className="scroll-mt-24"
        >
          <h2
            id="retention"
            className="text-xl font-semibold text-slate-900 border-l-4 border-teal-500 pl-3"
          >
            5. Data Retention
          </h2>
          <p className="mt-2 text-slate-700">
            We keep your dental records and personal information for the minimum
            period required by law and professional guidelines. Typically, adult
            dental records are retained for at least 11 years, and for children
            until they reach the age of 25.
          </p>
        </section>

        {/* 6. Your Rights */}
        <section
          aria-labelledby="rights"
          id="your-rights"
          className="scroll-mt-24"
        >
          <h2
            id="rights"
            className="text-xl font-semibold text-slate-900 border-l-4 border-teal-500 pl-3"
          >
            6. Your Rights
          </h2>
          <p className="mt-2 text-slate-700">
            Under UK GDPR, you have the right to:
          </p>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>Access your personal data.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion (where applicable).</li>
            <li>Restrict or object to processing.</li>
            <li>Data portability.</li>
            <li>Withdraw consent (where processing is based on consent).</li>
          </ul>
          <p className="mt-3 text-slate-700">
            To exercise these rights, please contact us (details below).
          </p>
        </section>

        {/* 7. Cookies and Website Use */}
        <section
          aria-labelledby="cookies"
          id="cookies-and-website-use"
          className="scroll-mt-24"
        >
          <h2
            id="cookies"
            className="text-xl font-semibold text-slate-900 border-l-4 border-teal-500 pl-3"
          >
            7. Cookies and Website Use
          </h2>
          <p className="mt-2 text-slate-700">
            Our website may use cookies to improve user experience and track
            website usage. You can adjust your browser settings to refuse
            cookies if you prefer.
          </p>
        </section>

        {/* 8. Security */}
        <section
          aria-labelledby="security"
          id="security"
          className="scroll-mt-24"
        >
          <h2
            id="security"
            className="text-xl font-semibold text-slate-900 border-l-4 border-teal-500 pl-3"
          >
            8. Security
          </h2>
          <p className="mt-2 text-slate-700">
            We take appropriate technical and organisational measures to
            safeguard your data against loss, misuse, or unauthorised access.
          </p>
        </section>

        {/* 9. Contact Us */}
        <section
          aria-labelledby="contact"
          id="contact-us"
          className="scroll-mt-24"
        >
          <h2
            id="contact"
            className="text-xl font-semibold text-slate-900 border-l-4 border-teal-500 pl-3"
          >
            9. Contact Us
          </h2>
          <p className="mt-2 text-slate-700">
            If you have any questions or concerns about this Privacy Policy or
            how we handle your data, please contact us:
          </p>
          <address className="not-italic mt-3 text-slate-700">
            <div className="font-medium text-slate-900">{practiceName}</div>
            <div>{address}</div>
            <div className="mt-1">
              <span className="sr-only">Phone:</span>
              <span className="text-slate-700">Phone: </span>
              {telHref ? (
                <a
                  className="text-teal-500 underline decoration-teal-500 underline-offset-2"
                  href={telHref}
                >
                  {phone}
                </a>
              ) : (
                phone
              )}
            </div>
            <div>
              <span className="sr-only">Email:</span>
              <span className="text-slate-700">Email: </span>
              {email ? (
                <a
                  className="text-teal-500 underline decoration-teal-500 underline-offset-2"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              ) : (
                email
              )}
            </div>
          </address>
          <p className="mt-4 text-slate-700">
            You also have the right to lodge a complaint with the Information
            Commissioner’s Office (ICO) if you are unhappy with how we use your
            data. Visit{" "}
            <a
              href="https://www.ico.org.uk"
              className="text-teal-500 underline decoration-teal-500 underline-offset-2"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.ico.org.uk
            </a>{" "}
            for more details.
          </p>
        </section>
      </div>

      <hr className="mt-10 border-slate-200" />

      <div className="mt-6 text-sm text-slate-700">
        <p>
          For a printable copy, use your browser’s print function. If you need
          this in an alternative format, please contact us.
        </p>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
