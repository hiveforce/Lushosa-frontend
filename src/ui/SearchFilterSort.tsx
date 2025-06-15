import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

function SearchFilterSort() {
  return (
    <div className="bg-others-light-1 mt-7 mr-5  rounded-[8px] py-3 md:flex justify-between md:items-center">
      <div className="relative mx-4 md:flex-1 md:max-w-[285px] lg:max-w-[448px]">
        <input
          type="text"
          placeholder="Search by customer name or savings id..."
          className="w-full  bg-secondary-light text-[12px] font-normal p-3 rounded-md text-[#929292] pl-8 outline-none"
        />
        <img
          src="/images/search-icon.png"
          className="absolute top-3 left-2"
          alt=""
        />
      </div>

      <hr className="mt-3 md:hidden" />

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="border py-2 px-3 flex items-center gap-2 text-[12px] font-medium text-[#404040] rounded-[7px] mt-3 ml-4 md:ml-0 md:mt-0">
            <img src="/images/sort-icon.png" alt="sort icon" />
            Filter
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="border py-2 px-3 flex items-center gap-2 text-[12px] font-medium text-[#404040] rounded-[7px] mt-3 mx-4  md:mt-0">
            <img src="/images/filter-black-icon.png" alt="filter icon" />
            Sort
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default SearchFilterSort;
