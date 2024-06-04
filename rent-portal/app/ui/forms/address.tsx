import TextBox from "../textbox";

export default function Address(address: any) {
  <div className="flex flex-col justify-center items-center">
    <TextBox
      placeHolder={"Address line 1"}
      type={""}
      id={""}
      value={""}
      onChange={() => null}
      required={false}
    />
  </div>;
}
