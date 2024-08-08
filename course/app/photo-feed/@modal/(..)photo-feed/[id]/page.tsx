import React from "react";
import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photo-feed/wonders";
import Modal from "@/components/modal";

const PhotoModal = ({ params: { id } }: { params: { id: string } }) => {
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <p>{photo.photographer}</p>
        <p>{photo.location}</p>
      </div>
    </Modal>
  );
};

export default PhotoModal;
