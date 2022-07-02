import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molucules/MenuDrawer";
export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const onClickHome = useCallback(() => navigate("/home"), []);
  const onClickUserManagement = useCallback(
    () => navigate("/user_management"),
    []
  );
  const onClickSetting = useCallback(() => navigate("/setting"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="gray.600"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Heading as="h1" fontSize={{ base: "md" }} onClick={onClickHome}>
          ユーザー管理
        </Heading>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4} paddingLeft="24px">
            <Link padding={3} onClick={onClickUserManagement}>
              ユーザー
            </Link>
            <Link padding={3} onClick={onClickSetting}>
              設定
            </Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
      />
    </>
  );
});
