import { useContext, useState } from "react";
import { userContext } from "../contexts/User";

import React from 'react'

function Nav() {
    const { setUser, user } = useContext(userContext);

    return (
        <div>
            <h1>Hi: {user?.email}</h1>
        </div>
    )
}

export default Nav
