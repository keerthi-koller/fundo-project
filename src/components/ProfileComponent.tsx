import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

function ProfileComponent () {
    return (<>
        <section>
            <div>
                <h3>keerthi.nk8@gmail.com</h3>
                <h1>Hi, Keerthi Koller</h1>
                <Button variant="outlined">Outlined</Button>
            </div>
            <div>
                <CloseIcon />
            </div>
        </section>
    </>)
}

export default ProfileComponent;