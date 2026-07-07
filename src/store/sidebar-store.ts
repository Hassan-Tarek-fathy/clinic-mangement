import { create } from "zustand";

type SidebarStore = {
  collapsed: boolean;
  toggle: () => void;
};

export const useSidebar = create<SidebarStore>((set) => ({
  collapsed: false,

  toggle: () =>
    set((state) => ({
      collapsed: !state.collapsed,
    })),
}));