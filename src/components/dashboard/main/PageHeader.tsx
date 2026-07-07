"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type Props = {
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
};

export default function PageHeader({
  title,
  description,
  buttonText,
  onClick,
}: Props) {
  return (
    <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-2 text-slate-500">
          {description}
        </p>

      </div>

      {buttonText && (
        <Button
          onClick={onClick}
          className="rounded-2xl"
        >
          <Plus className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>
      )}

    </div>
  );
}