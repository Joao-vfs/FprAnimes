import Image from "next/image";
import { useRouter } from "next/navigation";

import { KeyboardEvent } from "react";

import { css } from "@shadow-panda/styled-system/css";

import IcLand from "@/assets/img/magnifying-glass.svg";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { handleSearchedNames } from "@/redux/slices/search.slices";
import { handleFirstPage } from "@/redux/slices/pagination.slice";
import { toggleChangeHeader } from "@/redux/slices/header.slices";

import { ISearchProps } from "@/interfaces/search.interface";

export default function SearchComponent({
  valueFilter,
}: Readonly<ISearchProps>) {
  const dispacth = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleFilterChange = (filter: string) => {
    dispacth(handleSearchedNames(filter));
  };

  const handleSearchSubmission = (key: KeyboardEvent<HTMLInputElement>) => {
    if (key.key === "Enter" && valueFilter !== "") {
      router.push("/searched");
      dispacth(handleFirstPage());
      dispacth(toggleChangeHeader("small"));
    } else if (key.key === "Enter" && valueFilter === "") {
      alert("Insira algo no campo de busca!");
    }
  };

  const handleSearchClick = () => {
    if (valueFilter !== "") {
      router.push("/searched");
      dispacth(toggleChangeHeader("small"));
      dispacth(handleFirstPage());
    } else {
      alert("Insira algo no campo de busca!");
    }
  };

  return (
    <div
      className={css({
        w: "238px",
        h: "31px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        border: "1px solid #fff",
        borderRadius: "10px",
        color: "#fff",
      })}
    >
      <input
        className={css({
          outline: "none",
          border: "none",
          bg: "transparent",
          w: "full",
          h: "full",
          fontSize: "15px",
          _placeholder: {
            color: "#fff",
            textStyle: "small",
            textAlign: "left",
            fontSize: "15px",
            fontWeight: 400,
          },
        })}
        placeholder="Buscar"
        onChange={(e) => handleFilterChange(e.target.value)}
        onKeyDown={(e) => handleSearchSubmission(e)}
        value={valueFilter}
      />
      <Image
        src={IcLand}
        alt=""
        width={14}
        height={14}
        onClick={handleSearchClick}
      />
    </div>
  );
}
