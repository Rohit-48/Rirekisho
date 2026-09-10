"use client";

import type { ResumeData } from "./resume-data";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { useMounted } from "../hooks/use-mounted";
import { NormalResume } from "./normal-resume";
import { PosterResume } from "./poster-resume";

type ViewMode = "normal" | "poster";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ResumeData;
}

export function ResumeModal({ isOpen, onClose, data }: ResumeModalProps) {
  const [view, setView] = useState<ViewMode>("poster");
  const mounted = useMounted();
  const closeRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Close on Esc.
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Focus close button on open.
  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
    }
  }, [isOpen]);

  // Simple focus trap.
  useEffect(() => {
    if (!isOpen) return;
    const modal = modalRef.current;
    if (!modal) return;

    const focusableSelectors =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = Array.from(
        modal.querySelectorAll<HTMLElement>(focusableSelectors)
      ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    modal.addEventListener("keydown", onKeyDown);
    return () => modal.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handlePrint = () => {
    window.print();
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="resume-overlay fixed inset-0 z-50 flex items-start justify-center print:static print:block"
          aria-modal="true"
          role="dialog"
          aria-label="Resume"
          data-print-view={view}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm print:hidden"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 mx-4 my-8 w-full max-w-5xl rounded-xl bg-background shadow-2xl print:mx-0 print:my-0 print:w-auto print:max-w-none print:rounded-none print:bg-white print:shadow-none"
          >
            {/* Header / toggle */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3 print:hidden">
              <div
                className="inline-flex rounded-full border border-border p-1"
                role="group"
                aria-label="Resume view"
              >
                <Button
                  size="sm"
                  variant={view === "normal" ? "primary" : "secondary"}
                  onPress={() => setView("normal")}
                  aria-pressed={view === "normal"}
                  className="min-w-0 rounded-full px-4 text-xs"
                >
                  Normal
                </Button>
                <Button
                  size="sm"
                  variant={view === "poster" ? "primary" : "secondary"}
                  onPress={() => setView("poster")}
                  aria-pressed={view === "poster"}
                  className="min-w-0 rounded-full px-4 text-xs"
                >
                  Poster
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onPress={handlePrint}
                  className="text-xs"
                >
                  Download PDF
                </Button>
                <Button
                  ref={closeRef}
                  size="sm"
                  variant="ghost"
                  onPress={onClose}
                  aria-label="Close resume"
                  className="text-lg leading-none"
                >
                  ×
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="max-h-[80vh] overflow-y-auto p-4 print:max-h-none print:overflow-visible print:p-0">
              <div
                className={`resume-print-content print-view-normal ${view === "normal" ? "block" : "hidden"}`}
              >
                <NormalResume data={data} />
              </div>
              <div
                className={`resume-print-content print-view-poster ${view === "poster" ? "block" : "hidden"}`}
              >
                <PosterResume data={data} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
