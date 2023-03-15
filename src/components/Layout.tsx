export default function Layout({ children } :any) {
  return (
    <div className="flex flex-col order-0 xl:grid xl:grid-cols-12  w-full ">
      <div className="text-red-500  bg-blue-500 col-span-2"></div>
      <main className="col-span-8 order-first xl:order-1 bg-black">
        {children}
      </main>
      <div className="bg-green-500 order-2 col-span-2"></div>
    </div>
  );
}
