import { Collapse } from "bootstrap";
import { useCallback, useEffect, useRef, useState } from "react";

export function useNavbarCollapse() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getInst = useCallback(() => {
    if (!ref.current) return null;
    return Collapse.getOrCreateInstance(ref.current, { toggle: false });
  }, []);

  const close = useCallback(() => getInst()?.hide(), [getInst]);
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
    getInst()?.toggle();
  }, [getInst]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onShown = () => setIsOpen(true);
    const onHidden = () => setIsOpen(false);

    el.addEventListener("shown.bs.collapse", onShown);
    el.addEventListener("hidden.bs.collapse", onHidden);

    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("shown.bs.collapse", onShown);
      el.removeEventListener("hidden.bs.collapse", onHidden);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleNavLink = (func: VoidFunction) => {
    func();
    if (isOpen) {
      close();
    }
  };

  return { ref, isOpen, toggle, handleNavLink };
}
