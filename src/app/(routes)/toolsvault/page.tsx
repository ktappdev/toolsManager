import ToolsGrid from "@/app/components/ToolsGrid";
import Link from "next/link";
const page = () => {
  const categoryList = [
    {
      name: "All Tools",
      link: "/toolsvault",
    },
    {
      name: "Hand Tools",
      link: "/toolsvault",
    },
    {
      name: "Power Tools",
      link: "/toolsvault",
    },
    {
      name: "Cleaning Tools",
      link: "/toolsvault",
    },
    {
      name: "Garden Tools",
      link: "/toolsvault",
    },
    {
      name: "Painting Tools",
      link: "/toolsvault",
    },
    {
      name: "Plumbing Tools",
      link: "/toolsvault",
    },
    {
      name: "Electrical Tools",
      link: "/toolsvault",
    },
    {
      name: "Automotive Tools",
      link: "/toolsvault",
    },
    {
      name: "Other Tools",
      link: "/toolsvault",
    },
  ];

  //className="hover:text-blue-500 hover:underline"
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-scroll ">
      <div className="text-lg text-white flex flex-row  items-center justify-evenly w-full mb-2 rounded-md fixed top-[2.9rem] z-20 p-2 shadow-md bg-c-accent-1">
        <div className="flex flex-row gap-3 overflow-x-scroll whitespace-nowrap ">
          {categoryList.map((category) => (
            <Link href={category.link} key={category.name}>
              <div className="hover:text-yellow-500 hover:underline text-sm p-1 justify-start items-start">
                {`#${category.name}`}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ToolsGrid />
    </div>
  );
};

export default page;
