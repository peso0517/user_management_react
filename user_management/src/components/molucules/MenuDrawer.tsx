import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
} from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickUserManagement,
    onClickSetting,
  } = props;
  return (
    <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button
              w="100%"
              onClick={() => {
                onClickHome();
                onClose();
              }}
            >
              TOP
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickUserManagement();
                onClose();
              }}
            >
              ユーザー
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickSetting();
                onClose();
              }}
            >
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
