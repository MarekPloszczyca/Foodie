import PageHeaderBackground from "../Models/PageHeaderBackground";

export default function PagesTitle(props: { title: string }) {
  return (
    <PageHeaderBackground>
      <div className="w-full">
        <h1 className="diffFont  text-center text-4xl md:text-6xl animate-fromTop">
          {props.title}
        </h1>
      </div>
    </PageHeaderBackground>
  );
}
