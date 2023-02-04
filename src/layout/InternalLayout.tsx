import React from "react";
import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";

type Props = {
    Component: any
    otherProps?: any 
}

const InternalLayout:React.FC<Props> = ({ Component, ...otherProps }) => {
    return (
        <div className="w-full">
            <div>
                {/* <Sidebar /> */}
                <Header />
            </div>
            <main className="overflow-x-hidden mt-20">
                <Component {...otherProps} />
            </main>
        </div>
    )
};

export default InternalLayout;