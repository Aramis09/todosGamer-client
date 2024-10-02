import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onActionBlue?: () => void;
  onActionRed?: () => void;
  blueTitle?: string;
  redTitle?: string;
  title: string;
}

export function ModalReusable({
  isOpen,
  onClose,
  blueTitle,
  redTitle,
  onActionBlue,
  onActionRed,
  title,
}: Props) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="w-60 bg-gradient-to-r from-[#3b3fe6] to-[#dc1bd6] ">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />

          <ModalFooter className="flex justify-center items-center">
            <Button colorScheme="blue" mr={3} onClick={onActionBlue || onClose}>
              {blueTitle}
            </Button>
            <Button colorScheme="red" onClick={onActionRed}>
              {redTitle}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
