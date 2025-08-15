import { Link } from "react-router-dom";

export const benefitPoints = [
  "Make dimensionally accurate garment patterns that fit.",
  "Modify garment patterns as required. Easily and fast!",
  "Add precise seam and other allowances to garment patterns easily.",
  "Add notches, darts, pleats etc. to garment patterns in a few clicks.",
  "Production stage modifications of clothing patterns/grading become easy. Production Planning and Control (PPC) and Production teams get the opportunity to quickly work on various options in clothing grading to achieve the desired results.",
  "Ensure that checks and stripe matching is maintained in bulk by fixing the positions of clothing patterns on markers so that the final product is perfect.",
  "Make garment patterns anywhere and modify them anywhere without the need for pattern tables and tools.",
  "Eliminate human errors in garment pattern design.",
  "Maintain historical records of styles, consumption, clothing patterns, clothing markers etc. easily for future styles and re-orders",
  "Grade garment patterns accurately and quickly.",
  "Save hours of hard work while grading garment patterns.",
  "Superimpose garment patterns over one another and visually inspect the grading.",
  "Calculate fabric consumption quickly while doing garment costing or fabric procurement.",
  "Easily visualize various options in clothing patterns laying on various fabric widths.",
  "Enable production teams to avoid errors while laying patterns on raw material.",
  "Avoid human errors in the repetitive and laborious process of clothing grading.",
  "Include printable clothing markers and clothing mini-markers as part of your email communication with customers as required",
  
];

const BenefitLinks = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Benefits of using <span className="text-primary">REACH CAD</span>
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          If you are an organization in the fashion, garment, clothing, apparel, textile or related sectors, REACH CAD will save you money, time and hassle.
        </p>

        <ul className="space-y-6 max-w-5xl mx-auto text-base leading-relaxed">
          {benefitPoints.map((point, index) => (
            <li key={index} className="flex justify-between items-center gap-4 border-b pb-3">
              <span className="flex-1">{point}</span>
              <Link
                to={`/benefits/detail/${index + 1}`}
                className="text-primary font-medium hover:underline whitespace-nowrap"
              >
                Read more
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitLinks;
