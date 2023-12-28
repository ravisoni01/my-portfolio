import { NavigationItem } from "./navigation-item";

export const NavigationSidebar = () => {
  return (
    <div className="h-full p-6">
      <div
        className="bg-[#1C1B23] rounded-md h-full w-full flex flex-col
      
      justify-center items-center text-white"
      >
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
      </div>
    </div>
  );
};
