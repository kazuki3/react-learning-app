import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<Array<User>>([]);
    const { showMessage } = useMessage();

    const getUsers = useCallback(() => {
        setLoading(true);
        axios.get<Array<User>>(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            if (res.data) {
                setUsers(res.data);
            } else {
                showMessage({title: "ユーザー取得に失敗しました", status: 'error'})
            }
        })
        .catch(() => 
            showMessage({title: "ユーザー取得に失敗しました", status: 'error'})
        )
        .finally(() => setLoading(false));
    }, [showMessage]);

    return { getUsers, users, loading }
}