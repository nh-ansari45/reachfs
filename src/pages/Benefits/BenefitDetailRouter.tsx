import { useParams } from "react-router-dom";

import Link1 from "./details/Link1";
import Link2 from "./details/Link2";
import Link3 from "./details/Link3";
import Link4 from "./details/Link4";
import Link5 from "./details/Link5";
import Link6 from "./details/Link6";
import Link7 from "./details/Link7";
import Link8 from "./details/Link8";
import Link9 from "./details/Link9";
import Link10 from "./details/Link10";
import Link11 from "./details/Link11";
import Link12 from "./details/Link12";
import Link13 from "./details/Link13";
import Link14 from "./details/Link14";
import Link15 from "./details/Link15";
import Link16 from "./details/Link16";
import Link17 from "./details/Link17";

const benefitComponentMap: { [key: string]: JSX.Element } = {
  "1": <Link1 />,
  "2": <Link2 />,
  "3": <Link3 />,
  "4": <Link4 />,
  "5": <Link5 />,
  "6": <Link6 />,
  "7": <Link7 />,
  "8": <Link8 />,
  "9": <Link9 />,
  "10": <Link10 />,
  "11": <Link11 />,
  "12": <Link12 />,
  "13": <Link13 />,
  "14": <Link14 />,
  "15": <Link15 />,
  "16": <Link16 />,
  "17": <Link17 />,
};

const BenefitDetailRouter = () => {
  const { id } = useParams();
  const component = benefitComponentMap[id ?? ""];

  return component || (
    <div className="p-10 text-center text-red-600 text-xl">
      Benefit not found.
    </div>
  );
};

export default BenefitDetailRouter;
