/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubMenu = ({ message, address }) => {
  const pathname = usePathname();

  return (
    <div className="w-screen xl:w-[1280px] lg:w-[1280px] md:w-[768px] sm:w-[640px] ">
      <div className="navbar bg-base-100 w-screen">
        <div className="navbar-start flex flex-col ">
          <div className="navbar-start w-full ">
            <p className="font-semibold ">{message}</p>
          </div>
          <div className="w-full">
            <p className="text-xs font-thin">{address}</p>
          </div>
        </div>

        <div className="navbar-end space-between">
          <div className="border-l-4  border-orange-500 p-1 font-thin text-xs mr-6 hover:bg-gray-100 rounded">
            <p>
              CONSULTANTS<br></br> WORKER
            </p>
            <p className="font-semibold">1</p>
          </div>
          <div className="font-thin text-xs mr-2 p-1 border-l-4 border-green-500 hover:bg-gray-100 rounded">
            <span>
              ACTIVE<br></br> CONSULTANTS
            </span>
            <p className="font-semibold">1</p>
          </div>
        </div>
      </div>
      <div className=" flex text-sm shadow-lg w-screen cursor-pointer ">
        <Link
          href="/Business"-
          className={`${
            pathname === "/Business"
              ? "text-blue-600 border-b-4 border-blue-600"
              : "hover:text-blue-600 hover:border-b-4 border-blue-600 transition transform hover:transition-all"
          }`}>
          Business Information
        </Link>
        <div className="divider divider-horizontal "></div>
        <Link
          href={"/Accounts"}
          className={`${
            pathname === "/Accounts"
              ? "text-blue-600 border-b-4 border-blue-600"
              : "hover:text-blue-600 hover:border-b-4 border-blue-600 transition transform hover:transition-all"
          }`}>
          Accounts
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          href={"/Contacts"}
          className={`${
            pathname === "/Contacts"
              ? "text-blue-600 border-b-4 border-blue-600"
              : "hover:text-blue-600 hover:border-b-4 border-blue-600 transition transform hover:transition-all"
          }`}>
          Contacts
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          className=" hover:text-blue-600 hover:border-b-4 border-blue-600 transition transform hover:transition-all"
          href={"#"}>
          Addition Info
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          className=" hover:text-blue-600 hover:border-b-4 border-blue-600 transition transform hover:transition-all"
          href={"#"}>
          Placements
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          className=" hover:text-blue-600 hover:border-b-4 border-blue-600 transition transform hover:transition-all"
          href={"#"}>
          Projects
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          className=" hover:text-blue-600 hover:border-b-4 border-blue-600 transition transform hover:transition-all"
          href={"#"}>
          Documents
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          className=" hover:text-blue-600 hover:border-b-4 border-blue-600 transition transform hover:transition-all"
          href={"#"}>
          Invoice and Payments
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          className=" hover:text-blue-600 hover:border-b-4 border-blue-600 transition transform hover:transition-all"
          href={"#"}>
          Timesheet Settings
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          className=" hover:text-blue-600 hover:border-b-4 border-blue-600 transition transform hover:transition-all"
          href={"#"}>
          Overhead/Expense
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          className=" hover:text-blue-600 hover:border-b-4 border-blue-600 m-1 transition transform hover:transition-all"
          href={"#"}>
          Sub-customers
        </Link>
      </div>
    </div>
  );
};

export default SubMenu;
