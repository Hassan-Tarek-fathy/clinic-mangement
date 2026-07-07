export default function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#38bdf833,transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0ea5e933,transparent_40%)]" />

      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
        bg-[size:70px_70px]
        "
      />
    </>
  );
}