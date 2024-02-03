import CurriculumView from "@/components/viewCVID";

export default function CurriculumVer({ params }) {
  const { id } = params;
  const curriculumId = id ? Number(id) : null;

  return (
    <div>
      <CurriculumView id={curriculumId} />
    </div>
  );
}
