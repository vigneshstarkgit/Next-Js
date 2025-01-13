"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Tabs } from "flowbite-react";
import Main from "./main";

export function Component() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar aria-label="Default sidebar example" className="sidebar">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox} label="3">
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Tabs Section */}
      
      <div className="tabs-container">
      <Tabs aria-label="Pills" variant="pills">
      <Tabs.Item
        active
        title="Overview"
        className="!bg-blue-700 !text-white hover:!bg-blue-600"
      >
        {/* Content for Overview */}
      </Tabs.Item>
      <Tabs.Item
        title="Security"
        className="hover:!bg-blue-600 hover:!text-white focus:!bg-blue-600 focus:!text-white"
      >
        {/* Content for Security */}
      </Tabs.Item>
      <Tabs.Item
        title="Notification"
        className="hover:!bg-blue-600 hover:!text-white focus:!bg-blue-600 focus:!text-white"
      >
        {/* Content for Notification */}
      </Tabs.Item>
      <Tabs.Item
        title="Plans"
        className="hover:!bg-blue-600 hover:!text-white focus:!bg-blue-600 focus:!text-white"
      >
        {/* Content for Plans */}
      </Tabs.Item>
      <Tabs.Item
        title="Billing"
        className="hover:!bg-blue-600 hover:!text-white focus:!bg-blue-600 focus:!text-white"
      >
        {/* Content for Billing */}
      </Tabs.Item>
      <Tabs.Item
        title="Account"
        className="hover:!bg-blue-600 hover:!text-white focus:!bg-blue-600 focus:!text-white"
      >
        {/* Content for Account */}
      </Tabs.Item>
    </Tabs>
    <Main/>
    
      </div>
      </div>

  );
}
