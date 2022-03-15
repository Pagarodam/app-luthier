import Image from "next/image";

export default function Images() {
    return (
      <>
        <div>
          <Image
          alt="Logo"
          src="/../public/Logo Llamas.jpeg"
          width={400}
          height={200}
          />
        </div>
      </>
    )
}