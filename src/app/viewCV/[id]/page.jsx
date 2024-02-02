import CurriculumView from "@/components/viewCVID";

export default function CurriculumVer({ params }) {
  const { curri_id } = params;

  // Ensure that curri_id is a valid number
  const id = Number(curri_id);


  return (
    <div>
      <CurriculumView id={1} />
    </div>
  );
}
