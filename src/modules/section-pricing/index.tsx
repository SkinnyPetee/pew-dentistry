import { cn } from "@/lib/utils";

type PriceItem = {
  name: string;
  price: string;
  description?: string;
};

type Category = {
  title: string;
  items: PriceItem[];
};

const categories: Category[] = [
  {
    title: "Preventative Treatments",
    items: [
      {
        name: "Dental Examination",
        price: "£ 45",
        description:
          "Routine check-up includes a full oral examination and an assessment of possible future treatment along with advice excluding X-rays. Any investigation, X-rays and treatment needed will be charged accordingly.",
      },
      {
        name: "New Patient Examination",
        price: "£ 55",
        description:
          "Initial appointment includes thorough oral health check and dental examination along with advice excluding X-rays. Any investigation, X-rays and treatment needed will be charged accordingly.",
      },
      {
        name: "Emergency Consultation - Existing Patient",
        price: "£ 46",
        description:
          "In case of dental emergency, we offer emergency appointments for all registered patients. Any investigation, X-rays and treatment needed will be charged accordingly.",
      },
      {
        name: "Emergency Consultation - New Patient",
        price: "£ 75",
        description:
          "We offer to accommodate unregistered patients in the event of dental emergency. Any investigation, X-rays and treatment needed will be charged accordingly.",
      },
      {
        name: "Dental Hygiene Visit",
        price: "£ 70",
        description:
          "30 minute appointment includes plaque removal, de-scaling, polishing and advice for best oral health habits.",
      },
      { name: "Small Digital X-ray", price: "£ 15" },
    ],
  },
  {
    title: "Restorative Treatments",
    items: [
      { name: "Amalgam fillings", price: "from £ 100" },
      { name: "Composite filling one surface", price: "from £ 130" },
      { name: "Composite fillings two or more surfaces", price: "from £ 160" },
      { name: "Root canal treatment", price: "from £ 450" },
      { name: "Porcelain Crowns", price: "from £ 650" },
      { name: "Porcelain Veneers", price: "from £ 650" },
      { name: "Zirconia/Emax Crown", price: "from £ 650" },
      { name: "Simple extraction", price: "from £ 150" },
      { name: "Surgical extraction", price: "from £ 220" },
      { name: "Bridges (per unit)", price: "POA" },
      { name: "Re-cement Crowns/Bridges", price: "from £   80" },
    ],
  },
  {
    title: "Dentures",
    items: [
      { name: "Upper or Lower Full Acrylic Denture", price: "from £ 800" },
      { name: "Upper or Lower Partial Acrylic Denture", price: "from £ 750" },
      { name: "Upper or Lower Chrome Denture", price: "from £ 990" },
      { name: "Upper or Lower Flexi Denture", price: "from £ 850" },
      { name: "Denture Repair", price: "from £  120" },
      { name: "Denture Relines", price: "from £  130" },
    ],
  },
  {
    title: "Cosmetic Treatments",
    items: [
      {
        name: "Invisalign, Enlighten and Smile design Consultation",
        price: "Free",
      },
      { name: "Invisalign/Spark", price: "from £ 2000" },
      { name: "Enlighten Whitening", price: "from £   650" },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      { name: "Mouth Guard", price: "from £ 120" },
      { name: "Night Guard", price: "from £ 240" },
      { name: "Retainers", price: "from £ 260" },
    ],
  },
];

function CategoryCard({ title, items }: Category) {
  const anchorId = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <section
      aria-labelledby={anchorId}
      className="rounded-lg border border-gray-200 bg-white p-5 md:p-6"
    >
      <header className="mb-4">
        <h3
          id={anchorId}
          className="text-pretty text-lg font-semibold text-gray-900"
        >
          {title}
        </h3>
      </header>

      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.name} className="py-3 first:pt-0 last:pb-0">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                {item.description ? (
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                ) : null}
              </div>
              <div className="shrink-0 text-right">
                <span
                  className={cn(
                    "inline-flex items-center rounded-md px-2 py-1 text-sm font-semibold",
                    "text-teal-700"
                  )}
                >
                  {item.price}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PricingSection() {
  // Minimal section: grid of category cards only.
  return (
    <>
      <div
        id="pricing"
        className="w-full h-max flex flex-col justify-center items-center  px-6 lg:px-60"
      >
        <h3 className="text-[#d3b44e] font-semibold text-lg">Pricing</h3>
        <h1 className="text-slate-700 font-bold text-4xl text-center">
          Private Fee Guide
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-6  lg:px-60 py-16">
        {categories.map((cat) => (
          <CategoryCard key={cat.title} title={cat.title} items={cat.items} />
        ))}
      </div>
    </>
  );
}
