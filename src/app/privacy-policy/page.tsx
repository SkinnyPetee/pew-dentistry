import { PrivacyPolicy } from "@/modules/commons/privacy-policy";

export default function PrivacyPage() {
  const practiceName = "Pewsey Dental Practice";
  const address = "15 North Street, Pewsey, Wiltshire, SN9 5ES";
  const phone = "01672 563622";
  const email = "pewseydental@btconnect.com";

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <PrivacyPolicy
        practiceName={practiceName}
        address={address}
        phone={phone}
        email={email}
      />
    </main>
  );
}
