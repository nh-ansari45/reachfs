import { Check, X } from "lucide-react";
import comparetable from "@/assets/comparetable.png"

const ComparisonTable = () => {

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center"><img src={comparetable} alt="Comparison Table" className="mx-auto w-full max-w-7xl rounded-lg shadow-lg"/></div>
    </section>
  );
};

export default ComparisonTable;
