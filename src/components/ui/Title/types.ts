import React from "react";

export interface ITitle {
    title: string | React.ReactElement;
    description?: string | React.ReactElement;
    customClassName?: string;
}