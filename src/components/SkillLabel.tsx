interface SkillLabelProps {
  name: string;
}

export default function SkillLabel({ name }: SkillLabelProps) {
  return (
    <div className="min-w-skillLabel rounded-lg bg-black px-3 py-2 text-center text-white">
      {name}
    </div>
  );
}
