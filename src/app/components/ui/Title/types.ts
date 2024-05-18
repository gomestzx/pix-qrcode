import React from "react";

export interface ITitle {
    title: string | React.ReactElement;
    description?: string;
    customClassName?: string;
}