import { memo, VFC } from "react"
import { Link } from "react-router-dom";

export const Login: VFC = memo(() => {
    return (
        <>
            <p>ログインページです</p>
            <Link to="/home">ホーム</Link>
            <Link to="/home/setting">setting</Link>
        </>
    );
});