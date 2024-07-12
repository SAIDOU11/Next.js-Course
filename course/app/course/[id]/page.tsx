import NotFound, { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

NotFound;

const SpecificCourse = ({ params }: Props) => {
  console.log(params.id);
  if (!parseInt(params.id)) {
    notFound();
  }
  return <div>Specific Course {params.id} </div>;
};

export default SpecificCourse;
