import Image from "next/image";
import Link from "next/link";

import { css } from "@shadow-panda/styled-system/css";

import IcBars from "@/assets/img/bars.svg";
import IcClose from "@/assets/img/x.svg";
import IcList from "@/assets/img/list.svg";

import { UseAppDispatch } from "@/redux/store";
import {
  selectedCategory,
  toggleOpenSidebar,
} from "@/redux/slices/Sibebar/Sidebar.slices";
import { toggleChangeHeader } from "@/redux/slices/Header/Header.slices";
import { handleFirstPage } from "@/redux/slices/Pagination/Pagination.slices";

import { ISidebarProps } from "@/interfaces/ISibebar.interface";


export default function SidebarComponent({
  openSidebar,
  listCategorys,
}: Readonly<ISidebarProps>) {
  const dispatch = UseAppDispatch();

  const handleItemsSibebar = (category: string) => {
    dispatch(selectedCategory(category));
    dispatch(toggleChangeHeader("small"));
    dispatch(handleFirstPage())
  };

  const widthSidebar = `${openSidebar ? "267px" : "70px"}`;

  const renderListCategorysSibebar = () => {
    if (openSidebar) {
      return (
        <div
          className={css({
            p: "20px",
          })}
        >
          <div
            className={css({
              display: "flex",
              gap: "10px",
              mb: "10px",
            })}
          >
            <Image src={IcList} alt="" />
            <h1
              className={css({
                textStyle: "h1",
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
              })}
            >
              CATEGORIAS
            </h1>
          </div>
          {listCategorys.map((category) => (
            <div
              key={category.id}
              className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              })}
            >
              <Link href={"/category"}>
                <button
                  className={css({
                    w: "full",
                    textStyle: "small",
                    textAlign: "left",
                    color: "#fff",
                    fontSize: "16px",
                    cursor: "pointer",
                    mt: "16px",
                    border: "none",
                    outline: "none",
                  })}
                  onClick={() => handleItemsSibebar(category.attributes.title)}
                >
                  {category.attributes.title}
                </button>
              </Link>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div
      className={css({
        w: widthSidebar,
        bg: "#F46D1B",
        p: "2px 10px",
        transition: "all 0.5s ease",
        overflowX: "hidden",
        overflowY: "auto",
      })}
    >
      {openSidebar ? (
        <div
          className={css({
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            textAlign: "right",
          })}
        >
          <Image
            src={IcClose}
            alt=""
            className={css({
              cursor: "pointer",
              my: "20px",
            })}
            onClick={() => dispatch(toggleOpenSidebar())}
          />
        </div>
      ) : (
        <Image
          src={IcBars}
          alt=""
          className={css({
            cursor: "pointer",
          })}
          onClick={() => dispatch(toggleOpenSidebar())}
        />
      )}
      {renderListCategorysSibebar()}
    </div>
  );
}
