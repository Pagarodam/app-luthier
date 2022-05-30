import Images from 'components/gallery';
import Button from 'components/UI/Button';
import Modal from 'components/UI/Modal';
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  const onClose = () => {
    setShowModal(false);
  };

  const show = (url, alter) => {
    setSrc(url);
    setAlt(alter);
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <Modal onClose={onClose}>
          <Button label={'X'} onClick={onClose} />
          <Image alt={alt} src={src} width="800" height="600" />
        </Modal>
      )}

      <Images onClick={show} />
    </>
  );
}
