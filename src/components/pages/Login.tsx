import { ChangeEvent, memo, useState, VFC } from "react"
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/userAuth";

export const Login: VFC = memo(() => {
    const [userId, setUserId] = useState("");
    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
    const { login, loading } = useAuth();

    const onClickLogin = () => login(userId);

    return (
        <>
            <Flex align="center" justify="center" height="100vh">
                <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
                    <Heading ad="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
                    <Divider my={4} />
                    <Stack spacing={4} py={4} px={10}>
                        <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
                        <PrimaryButton disabled={userId === ''} loading={ loading } onClick={ onClickLogin }>ログイン</PrimaryButton>
                    </Stack>
                </Box>
            </Flex>
        </>
    );
});