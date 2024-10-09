import React from "react";
import { AppButton } from "./AppButton";
import { Link } from "react-router-dom";
export const LinkButton = ({path, ...props}) => {
    return (
        <Link to={path} {...props}>
        <AppButton />
        </Link>
    );
};