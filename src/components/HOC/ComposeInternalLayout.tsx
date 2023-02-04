import InternalLayout from "../../layout/InternalLayout";


const ComposeInternalLayouts = (Component:any) => (passThroughProps:any) => (
    <>
        <InternalLayout {...passThroughProps} Component={Component} />
    </>
);

export default ComposeInternalLayouts;