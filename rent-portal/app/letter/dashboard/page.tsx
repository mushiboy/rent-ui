import NumberCard from "@/app/ui/dashboard/cards";

export default function Dashboard() {
  return (
    <>
      <h1>Heyyyy... Everything is gonna be great!</h1>
      <div className="flex flex-row items-center justify-evenly">
        <NumberCard name={"Your Ads"} number={1} />
        <NumberCard name={"Applicants"} number={1} />
        <NumberCard name={"Your Messages"} number={1} />
        <NumberCard name={"Your Messages"} number={1} />
      </div>
    </>
  );
}
