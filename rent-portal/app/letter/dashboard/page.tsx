import NumberCard from "@/app/ui/dashboard/number-card";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly h-screen w-full">
        <NumberCard name={"Your Ads"} number={1} />
        {/* <NumberCard name={"Applicants"} number={1} />
        <NumberCard name={"Your Messages"} number={1} />
        <NumberCard name={"Your Messages"} number={1} /> */}
      </div>
    </>
  );
}
