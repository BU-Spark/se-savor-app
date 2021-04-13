import React, { useEffect,} from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function Detail() {
    const loginStatus = useSelector(state => state.getIn(['login','login']));
    const history = useHistory();

    useEffect(() => {
        if (!loginStatus) {
            history.push("/login")
            return
        }
    }, [])

    return (
        <div> Detail~</div>
    )
}

export default Detail;