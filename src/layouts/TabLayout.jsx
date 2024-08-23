import React from "react";
import TabLHeader from "../components/TabLHeader";

function TabLayout() {
    return (
        <div className="flex-col mx-auto border-2 border-black rounded-md max-w-[1200px]">
            <TabLHeader />
            <div className="text-center h-96 text-wrap bg-red-50">test</div>
        </div>
    );
}

export default TabLayout;
