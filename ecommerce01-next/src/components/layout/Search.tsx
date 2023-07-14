import React from "react";
import Image from "next/image";

function Search() {
  return (
    <div className="w-full">
      <form>
        <div className="flex my-6 w-full height-[40px] items-center justify-center">
          <div className="w-[40%] h-full flex border border-[#0D6EFD] border-solid border-[2px] rounded-lg">
            <input
              type="search"
              id="search-dropdown"
              className="basis-4/6 px-2.5 py-2 text-sm rounded-l-lg"
              placeholder="Search"
              required
            />
            <div className="basis-2/6 flex">
              <button
                id="dropdown-button"
                className="inline-flex w-2/3 items-center justify-between px-4 text-sm text-center border border-l-[#0D6EFD] border-l-solid border-l-[2px]"
                type="button"
              >
                Tất cả
                <img src="/dropdown.svg" alt={""} />
              </button>
              <button
                type="submit"
                className="px-4 w-1/3 text-sm font-medium text-white bg-[#0D6EFD] rounded-r-md"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
