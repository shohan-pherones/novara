import Link from "next/link";

const ViewMoreButton = ({ route, label }: { route: string; label: string }) => {
  return (
    <div className="mt-10 flex justify-center">
      <Link href={route} className="btn btn-outline">
        {label}
      </Link>
    </div>
  );
};

export default ViewMoreButton;
