import React, { useEffect } from "react";
import { HeaderInterface } from "../../../types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useParams, useNavigate } from "react-router-dom";

export const Header: React.FC<HeaderInterface> = ({ navigate, isContentOpen }) => {
    let params = useParams();
    const [page, setPage] = React.useState(1);
    const history = useNavigate();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        history(`/${value}`)
        setPage(value);
        if (Number(params.id) > value) {
            navigate('right', Number(value))
        } else {
            navigate('left', Number(value))
        }
    }
    useEffect(() => {
        if (!params.id) {
            history(`/${1}`);
            setPage(1);
        } else
            setPage(Number(params.id));
    }, [params])
    return (
        <div className="frame">
            <div className="frame__title-wrap">
                <div className="nav">
                    <div className="nav__counter">
                        <Stack spacing={2}>
                            <Pagination count={10} color="primary" page={Number(page)} onChange={handleChange} disabled={isContentOpen} />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}