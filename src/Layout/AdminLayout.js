import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import AdminSidebarData from "../config/AdminSidebarData";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeParent, setActiveParent] = useState(null);
  const [showSubItems, setShowSubItems] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleSubNav = (index) => {
    setActiveParent(index === activeParent ? null : index);
  };

  return (
    <main className="flex">
      <section className="w-[300px] min-h-screen border border-r px-[18px] pt-[18px] flex flex-col">
        <div className="flex justify-between ">
          <h1>Learnerr</h1>
          <button className="border rounded-full p-1">
            <CaretRight size={16} />
          </button>
        </div>
        <div className="pt-[20px] flex flex-col gap-2">
          {AdminSidebarData.map((item, index) => {
            const isActive = index === activeParent;
            return (
              <div>
                <Link
                  className="flex items-center	 gap-3 h-[54px] cursor-pointer rounded-sm  p-2 bg-[#f8f9fa]"
                  onClick={item.subItems ? () => toggleSubNav(index) : null}
                  to={item.path}
                >
                  <div>{item.icon}</div>
                  <p>{item.name}</p>
                </Link>
                {isActive &&
                  item.subItems &&
                  item.subItems.map((subItem) => {
                    return (
                      <Link
                        className=" pl-[20px] flex gap-3 h-[44px] items-center cursor-pointer"
                        to={subItem.path}
                      >
                        <div>{subItem.icon}</div>
                        <p>{subItem.name}</p>
                      </Link>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </section>
      <section className=" flex-1">
        <Outlet />
      </section>
    </main>
  );
};

export default AdminLayout;
