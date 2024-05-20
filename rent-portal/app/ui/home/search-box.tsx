export default function Search({ placeholder }: { placeholder: string }) {
  return (
    <form className="flex items-center justify-center w-full">
      <label htmlFor="search" className="sr-only">
        Search here
      </label>
      <input
        className="w-5/6 h-14 border-or rounded-md border-2 p-2"
        placeholder={placeholder}
      ></input>
    </form>
  );
}
