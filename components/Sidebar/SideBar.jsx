import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {BsPeopleFill,BsFillPersonFill } from "react-icons/bs"
import {FaPeopleCarry,FaFileInvoiceDollar} from "react-icons/fa"
import {MdViewTimeline,MdLogout} from "react-icons/md"

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src=""
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-cyan-100 text-cyan-500"
                : "text-gray-400 hover:bg-cyan-100 hover:text-cyan-500"
            }`}
          >
            <div className="mr-2">
            <BsPeopleFill className="h-5 w-5"/>
            </div>
            <div>
              <p>Employees</p>
            </div>
          </div>
        </Link>
        <Link href="/clients">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-cyan-100 text-cyan-500"
                : "text-gray-400 hover:bg-cyan-100 hover:text-cyan-500"
            }`}
          >
            <div className="mr-2">
              <BsFillPersonFill className="h-5 w-5" />
            </div>
            <div>
              <p>Clients</p>
            </div>
          </div>
        </Link>
        <Link href="/vendor">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-orange-100 text-cyan-500"
                : "text-gray-400 hover:bg-cyan-100 hover:text-cyan-500"
            }`}
          >
            <div className="mr-2">
              <FaPeopleCarry className="h-5 w-5" />
            </div>
            <div>
              <p>Vendors</p>
            </div>
          </div>
        </Link>
        <Link href="/timesheets">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-orange-100 text-cyan-500"
                : "text-gray-400 hover:bg-cyan-100 hover:text-cyan-500"
            }`}
          >
            <div className="mr-2">
              <MdViewTimeline className="h-5 w-5" />
            </div>
            <div>
              <p>Time sheets</p>
            </div>
          </div>
        </Link>
        <Link href="/invoices">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-orange-100 text-cyan-500"
                : "text-gray-400 hover:bg-cyan-100 hover:text-cyan-500"
            }`}
          >
            <div className="mr-2">
              <FaFileInvoiceDollar className="h-5 w-5" />
            </div>
            <div>
              <p>Invoices</p>
            </div>
          </div>
        </Link>
        <Link href="/Logout">
          <div
            className= {`pl-6 mt-20 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-orange-100 text-cyan-500"
                : "text-gray-400 hover:bg-cyan-100 hover:text-cyan-500"
            }`}
          >
            <div className="mr-2">
              <MdLogout className="h-5 w-5" />
            </div>
            <div>
              <p>Logout</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
