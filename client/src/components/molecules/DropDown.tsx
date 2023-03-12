import type { title } from "@/lib/Context";

type DropDown = {
  title: title | null;
};

export default function DropDown({ title }: DropDown) {
  return (
    <div className="drop-down">
      <div className="mx-auto max-w-6xl">
        <div className="mx-4 lg:mx-6 font-bold">DropDown</div>
      </div>
    </div>
  );
}
