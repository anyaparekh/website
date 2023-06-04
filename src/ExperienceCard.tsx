import { FC } from "react";

interface Props {
  company: string;
  title: string;
  li1: string;
  li2: string;
  li3: string;
  logo: string;
}

const ExperienceCard: FC<Props> = ({ company, title, li1, li2, li3, logo }) => {
  return (
    <div className="h-[400px] border-4 border-[#E9D5CE] mx-2 rounded-2xl">
      <div className="flex">
        <div className={`flex-2 mt-5 ml-5 w-[70px] h-[67px] ${logo}`} />
        <div className="flex flex-1 flex-col ml-8">
          <p className="flex-1 font-Aspekta font-bold text-[#977A71] mt-6 text-2xl">
            {company}
          </p>
          <p className="flex-1 mt-2 text-[#977A71] italic">{title}</p>
        </div>
      </div>
      <ol className="ml-14 list-disc space-y-4 mt-6 text-[#977A71]">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
      </ol>
    </div>
  );
};

export default ExperienceCard;
