import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { memo, FC, useState, useEffect, ChangeEvent } from "react";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { useSelectUser } from "../../../hooks/useSelectUsers";
import { User } from "../../../types/api/user";

type Props = {
  user: User | undefined;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, isAdmin, onClose } = props;

  const [username, setUsername] = useState(user?.username);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [address, setAddress] = useState(user?.address.city);

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setAddress(user?.address.city ?? "");
  }, [user]);
  const changeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const changeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const changeAddress = (e: ChangeEvent<HTMLInputElement>) =>
    setAddress(e.target.value);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb={8}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody mx={4}>
            <Stack spacing={4}>
              {isAdmin ? (
                <>
                  <FormControl>
                    <FormLabel>名前</FormLabel>
                    <Input onChange={changeUserName} value={username}></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>フルネーム</FormLabel>
                    <Input onChange={changeName} value={name}></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>MAIL</FormLabel>
                    <Input onChange={changeEmail} value={email}></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>ADDRESS</FormLabel>
                    <Input onChange={changeAddress} value={address}></Input>
                  </FormControl>
                  <Button onClick={() => alert()}>更新</Button>
                </>
              ) : (
                <>
                  <FormControl>
                    <FormLabel>名前</FormLabel>
                    <Input isReadOnly value={user?.username}></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>フルネーム</FormLabel>
                    <Input isReadOnly value={user?.name}></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>MAIL</FormLabel>
                    <Input isReadOnly value={user?.email}></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>ADDRESS</FormLabel>
                    <Input isReadOnly value={user?.address.city}></Input>
                  </FormControl>
                </>
              )}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
