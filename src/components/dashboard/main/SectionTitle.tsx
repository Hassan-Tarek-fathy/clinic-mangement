"use client";

type Props = {
  title: string;
  description?: string;
};

export default function SectionTitle({
  title,
  description,
}: Props) {
  return (
    <div className="mb-6">

      <h2 className="text-2xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-slate-500">
          {description}
        </p>
      )}

    </div>
  );
}