"use client";
import React, { useState } from "react";
import SearchManuFacturer from "./SearchManuFacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchBarProps } from "@/types";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <>
      <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
          src={"/magnifying-glass.svg"}
          alt={"magnifying glass"}
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    </>
  );
};

const SearchBar = ({setManuFacturer,setModel}:SearchBarProps) => {
  const [searchManuFacturer, setSearchManuFacturer] = useState("");
  const [searchmodel, setSearchmodel] = useState("");

  const router = useRouter()

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManuFacturer === "" && searchmodel === "") {
      return alert("should be search input");
    }
    setManuFacturer(searchManuFacturer)
    setModel(searchmodel)
  };

  // const updateSearchParams = (model:string, manuFacturer:string) => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   // Update or delete the 'model' search parameter based on the 'model' value
  //   if (model) {
  //     searchParams.set("model", model);
  //   } else {
  //     searchParams.delete("model");
  //   }
  //   // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value

  //   if (manuFacturer) {
  //     searchParams.set("manuFacturer", manuFacturer);
  //   } else {
  //     searchParams.delete("manuFacturer");
  //   }

  //   // Generate the new pathname with the updated search parameters
  //   const newPathname = `${window.location.pathname}?${searchParams.toString()}`
  //   router.push(newPathname)
  // };
  return (
    <form className="searchbar" onSubmit={handelSubmit}>
      <div className="searchbar__item">
        <SearchManuFacturer
          selected={searchManuFacturer}
          setSelected={setSearchManuFacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Model icon "
          className="absolute w-[20px] h-[20px] ml-4"
          width={25}
          height={25}
        />
        <input
          type="text"
          name="model"
          value={searchmodel}
          onChange={(e) => setSearchmodel(e.target.value)}
          placeholder="model..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
