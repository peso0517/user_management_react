import { memo, FC } from "react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューを開く"
      icon={<HamburgerIcon />}
      colorScheme="gray.800"
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    ></IconButton>
  );
});
