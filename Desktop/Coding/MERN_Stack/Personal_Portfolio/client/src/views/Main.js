import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Logo from "../components/Logo"
import BottomFooter from "../components/BottomFooter"
import Project from "../components/Project"

export default () => {
    return (
        <div>
            <Logo/>
            <Project/>
            <footer>
                <BottomFooter/>
            </footer>
            
        </div>
    )
}

