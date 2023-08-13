import { useRef, useState } from "react";

export function useSubmit() {
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const [state, setDisabled] = useState<boolean>(false);

  function handleAccept() {
    setDisabled(true);
  }

  function handleCancel() {
    setDisabled(false);
    submitBtnRef.current!.disabled = false;
  }

  return { state, submitBtnRef, handleAccept, handleCancel };
}
