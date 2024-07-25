import React from "react";

export function useIsMounted() {
    const [isMounted, setIsMouted] = React.useState(false);

    React.useEffect(() => {
        setIsMouted(true)
    }, [])
    return [isMounted]
}