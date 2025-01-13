
import { Tabs } from "flowbite-react";

export function Component1() {
  return (
    
    <div className="tabs-container" >

    
    <Tabs aria-label="Pills" variant="pills">
      <Tabs.Item active title="Tab 1">
        <p className="text-sm text-blue-500 dark:text-blue-400">Overview</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 2">
        <p className="text-sm text-gray-500 dark:text-gray-400">Security</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 3">
        <p className="text-sm text-gray-500 dark:text-gray-400">Notification</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Plans</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 5">
        <p className="text-sm text-gray-500 dark:text-gray-400">Plans</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 6">
        <p className="text-sm text-gray-500 dark:text-gray-400">Account</p>
      </Tabs.Item>
    </Tabs>
    </div>
    
  );
}
