export default function SmallHeader(props: {
  title: string;
  center?: boolean;
}) {
  return (
    <h6
      className={` flex items-center smallHeader text-xl after:content-[''] after:w-12 after:border-orange after:border-b-2  after:block after:ml-4 ${
        props.center
          ? "before:content-[''] before:w-12 before:border-orange before:border-b-2  before:block before:mr-4"
          : ""
      }`}
    >
      {props.title}
    </h6>
  );
}
