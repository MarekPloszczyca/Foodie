export default function SmallHeader(props: { title: string }) {
  return (
    <h6 className=" flex items-center smallHeader text-xl after:content-[''] after:w-12 after:border-orange after:border-b-2  after:block after:ml-4">
      {props.title}
    </h6>
  );
}
