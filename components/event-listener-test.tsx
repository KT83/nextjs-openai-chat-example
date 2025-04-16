import { useCallback } from "react";
import { Button } from "./ui/button";

export const EventListenerTest = () => {
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);
  return (
    <div>
      <div>Dynamic</div>
      <Button onClick={handleClick}>Push</Button>
    </div>
  );
};
