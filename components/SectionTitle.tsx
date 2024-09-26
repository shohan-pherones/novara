import { cn } from "@/lib/utils";

const SectionTitle = ({
  title,
  isBackgroundDark,
}: {
  title: string;
  isBackgroundDark?: boolean;
}) => {
  return (
    <h3
      className={cn(
        "text-2xl md:text-3xl font-bold mb-5 md:mb-10",
        isBackgroundDark && "text-neutral-content"
      )}
    >
      {title}
    </h3>
  );
};

export default SectionTitle;
