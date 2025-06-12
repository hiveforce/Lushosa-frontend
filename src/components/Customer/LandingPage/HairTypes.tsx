import { hairCardData } from "../../../utils/data";
import HairTypeCard from "./HairTypeCard";

function HairTypes() {
  return (
    <div className="md:grid md:grid-cols-3 ">
      {hairCardData.map((card) => (
        <HairTypeCard key={card.type} card={card} />
      ))}
    </div>
  );
}

export default HairTypes;
