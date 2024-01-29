import { ReactNode } from "react";

export default function PageHeaderBackground(props: { children: ReactNode }) {
  return (
    <div
      className="flex flex-col items-center text-center p-8 py-40 bg-cover bg-center bg-no-repeat  relative
    overflow-hidden z-10    before:content-['']
    before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:bg-darkBlue
    before:opacity-75
    before:z-[-5] text-white lg:flex-row lg:justify-between  lg:py-40 lg:text-start"
      style={{ backgroundImage: `url(../../assets/Background.jpg)` }}
    >
      {props.children}
    </div>
  );
}
