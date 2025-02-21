/* eslint-disable @typescript-eslint/no-explicit-any */
import { DraggableSyntheticListeners } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { createContext, ReactNode, useContext, useMemo } from "react";

interface Context {
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
}

const SortableItemContext = createContext<Context>({
  attributes: {},
  listeners: undefined,
  ref() {},
});

const DndItem = ({
  id,
  children,
  className,
}: {
  id: string | number;
  children: ReactNode;
  className?: string;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  );

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div className={className} ref={setNodeRef} style={style}>
      <SortableItemContext.Provider value={context}>
        {children}
      </SortableItemContext.Provider>
    </div>
  );
};

export const DragItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { listeners } = useContext(SortableItemContext);
  return (
    <div className={className} {...listeners}>
      {children}
    </div>
  );
};

export default DndItem;
