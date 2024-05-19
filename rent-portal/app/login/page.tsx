import RHLogo from "../ui/logo";

export default function Login() {
  return (
    <main className="w-screen h-screen bg-bl flex flex-col items-center justify-center">
      <div className="container w-1/3 h-2/3 bg-wh ">
        <RHLogo h={36} w={36} name={true} />
      </div>
      <p>All is well</p>
    </main>
  );
}
