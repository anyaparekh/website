import { FC } from "react";

interface Props {
  picture: string;
  title: string;
  link: string;
  logo: string;
  skills: string[];
}

const ProjectCard: FC<Props> = ({ picture, title, link, logo, skills }) => {
  return (
    <div className="m-4 h-fit bg-[#977A71] flex flex-col rounded-2xl">
      <div className="flex px-5 py-4">
        <img
          className="flex-1 border-[#ffe4e4]/[0.8] border-4 self-center"
          src={picture}
          alt={"project image"}
        />
      </div>
      <p className="mt-1 ml-5 text-2xl font-semibold text-[#ffe4e4]">{title}</p>
      <div className="flex flex-row ml-3 mt-4 mb-2">
        {skills.map((value, i) => (
          <div className="ml-2 text-xs bg-[#ffe4e4] rounded-xl max-w-fit shadow-lg">
            <p key={i} className="px-3 py-1 font-semibold text-[#473931]">
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full">
        <a
          href={link}
          className={`w-[24px] h-[24px] ${logo} float-right mr-5 mb-5`}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
