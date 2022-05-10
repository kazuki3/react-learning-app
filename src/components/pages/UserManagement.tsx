import {Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC, useEffect, useCallback } from "react"
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const { getUsers, users, loading} = useAllUsers();
    const { onSelectUser, selectedUser } = useSelectUser();
    const { loginUser } = useLoginUser();

    useEffect(() => getUsers(), [getUsers]);

    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users, onOpen });
    }, [users, onOpen, onSelectUser]);

    return (
        <>
            { loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }}>
                    { users.map((user) => (
                        <WrapItem key={user.id} mx="auto">
                            <UserCard imageUrl="https://source.unsplash.com/random" id={user.id} name={user.username} fullName={user.name} onClick={onClickUser}/>
                        </WrapItem>
                    )) }
                </Wrap>
            ) }
            <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin}/>
        </>
    );
});