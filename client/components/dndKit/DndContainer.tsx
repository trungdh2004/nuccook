"use client";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React, { ReactNode } from "react";

interface BaseItem {
  id: UniqueIdentifier;
}

interface IProps<T extends BaseItem> {
  list: T[];
  setList: React.Dispatch<React.SetStateAction<T[]>>;
  renderItem(item: T, index: number): ReactNode;
  filterKey?: keyof T;
  dragEnd?: (event: DragEndEvent) => void;
}

const DndContainer = <T extends BaseItem>({
  list,
  setList,
  renderItem,
  filterKey,
  dragEnd,
}: IProps<T>) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    if (dragEnd) {
      dragEnd(event);
      return;
    }
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = list.findIndex((item) => {
        if (filterKey) {
          return item[filterKey] === active.id;
        }
        return item.id === active.id;
      });
      const newIndex = list.findIndex((item) => {
        if (filterKey) {
          return item[filterKey] === over.id;
        }
        return item.id === over.id;
      });

      console.log({
        oldIndex,
        newIndex,
        active,
        over,
      });

      setList(arrayMove(list, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext
        items={list.map((c) => (filterKey ? String(c[filterKey]) : c.id))}
        strategy={verticalListSortingStrategy}
      >
        {list.map((item, index) => {
          const key = (filterKey ? item[filterKey] : item.id) as
            | string
            | number;
          return (
            <React.Fragment key={key}>{renderItem(item, index)}</React.Fragment>
          );
        })}
      </SortableContext>
    </DndContext>
  );
};

export default DndContainer;
