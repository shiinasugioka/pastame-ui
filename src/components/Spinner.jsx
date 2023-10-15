import { Oval } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Oval
        height={100}
        width={100}
        color="#223F1F"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#cee0cc"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
