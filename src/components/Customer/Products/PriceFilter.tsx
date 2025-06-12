import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const items = [
  { id: 0, label: "$20.00 - $ 50.00" },
  { id: 1, label: "$20.00 - $ 50.00" },
  { id: 2, label: "$20.00 - $ 50.00" },
  { id: 3, label: "$20.00 - $ 50.00" },
];

function PriceFilter() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="border border-primary-custom px-6 py-[28px] rounded-[17px]">
      <div className="flex items-center gap-4 mb-[16px]">
        <img src="/images/filter-line-icon.png" alt="" />
        <p className="text-[22px] font-normal">Price</p>
      </div>

      <div className="space-y-[14px] mt-[25px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4  text-[16px] font-normal"
          >
            <Checkbox
              checked={selected === item.id}
              onCheckedChange={(checked) => {
                // if checked is true, select this, else deselect
                setSelected(checked ? item.id : null);
              }}
              id={`item-${item.id}`}
            />
            <Label htmlFor={`item-${item.id}`}>{item.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceFilter;
