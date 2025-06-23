import { FC } from "react";

interface Props {
  company: string;
  companyLink: string;
  title: string;
  listitems: any[];
  logo: string;
  date: string;
}

const ExperienceCard: FC<Props> = ({
  company,
  companyLink,
  title,
  listitems,
  logo,
  date,
}) => {
  return (
    <div className="h-[430px] border-4 border-[#E9D5CE] mx-2 rounded-2xl">
      <div className="flex h-[130px] bg-[#E9D5CE]">
        <a style={{ cursor: "pointer" }} href={companyLink}>
          <div className={`flex-2 mt-5 ml-3 w-[70px] h-[67px] ${logo}`} />
        </a>
        <div className="flex flex-1 flex-col ml-4">
          <a
            href={companyLink}
            className="flex-2 font-Aspekta font-semibold text-[#977A71] mt-6 text-xl"
          >
            {company}
          </a>
          <p className="flex-1 mt-2 text-[#977A71] italic">{title}</p>
          <p className="flex-1 mb-3 text-[#977A71] text-sm">{date}</p>
        </div>
      </div>
      <div className="max-h-64 overflow-auto">
        <style>
          {`
            div::-webkit-scrollbar {
              width: 8px;
            }

            div::-webkit-scrollbar-track {
              background: transparent;
            }

            div::-webkit-scrollbar-thumb {
              background-color: rgba(0, 0, 0, 0.4);
              border-radius: 4px;
            }
          `}
        </style>
        <ol className="ml-10 list-disc space-y-4 mt-6 text-[#977A71] pr-8 text-[15px]">
          {listitems.map((value, i) => (
            <li key={i}>{value}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ExperienceCard;
