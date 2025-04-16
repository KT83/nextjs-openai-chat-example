import React, {
  ComponentProps,
  FC,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

type ButtonProps = ComponentProps<typeof Button>;

const ChatActionIconButton = ({ ...props }: ButtonProps) => {
  return (
    <Button
      size="icon"
      variant={"outline"}
      className="rounded-full h-9 w-9"
      {...props}
    />
  );
};

const ChatActionToggle = ({ ...props }: ComponentProps<typeof Toggle>) => {
  return (
    <Toggle
      {...props}
      variant="outline"
      size="sm"
      className="rounded-full focus-visible:ring-primary data-[state=on]:bg-primary/20 data-[state=on]:text-primary"
    />
  );
};

const ChatActions: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> =
  forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement>>>(
    ({ className, ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={cn("flex flex-wrap gap-2 items-center", className)}
        >
          {props.children}
        </div>
      );
    }
  );

ChatActions.displayName = "ChatActions";

export { ChatActions, ChatActionIconButton, ChatActionToggle };
