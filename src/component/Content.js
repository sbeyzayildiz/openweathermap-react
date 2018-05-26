import React from "react";
import Loading from "./Loading";
import Error from "./Error";

export default function Content({source,view,loading,error}) {
    return (
        <div>
            {error ? (<Error error={error}/>) :''}
			{source}
            {loading ? (<Loading/>) :''}
            {view}
        </div>
    );
}
