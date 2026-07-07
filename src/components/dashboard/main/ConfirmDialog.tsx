"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
};

export default function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>

      <DialogContent>

        <DialogHeader>

          <DialogTitle>
            {title}
          </DialogTitle>

          <DialogDescription>
            {description}
          </DialogDescription>

        </DialogHeader>

        <DialogFooter>

          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            onClick={onConfirm}
            className="bg-rose-600 hover:bg-rose-700"
          >
            Confirm
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}