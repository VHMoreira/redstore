import { useState, useCallback } from "react";

export const useToggle = (initial: boolean) => {
    const [active, setActive] = useState(initial);
    const toggle = useCallback(() => setActive(v => !v), []);
    const disabled = useCallback(() => setActive(false), []);
    const enabled = useCallback(() => setActive(true), []);
    return { active, toggle, disabled, enabled };
};