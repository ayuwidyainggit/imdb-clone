import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image className="h-52" src="spinner.svg" alt="loading..."></Image>
    </div>
  );
}
