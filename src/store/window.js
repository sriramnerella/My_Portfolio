import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { immer } from "zustand/middleware/immer";
import {create} from "zustand";


const useWindowStore = create(immer((set)=>({

  windows : WINDOW_CONFIG,
  nextZIndex : INITIAL_Z_INDEX+1 ,
  openWindow :(windowKey , data =null)=>set((state)=>{
    const win = state.windows[windowKey];
    if(!win) return ;
    win.isOpen = true;
    win.isMinimized = false;
    win.zIndex = state.nextZIndex;
    win.data = data?? win.data;
    state.nextZIndex +=1;

  }),
  closeWindow :(windowKey )=>set((state)=>{
    const win = state.windows[windowKey];
    if(!win) return ; 
    win.isOpen = false;
    win.isMinimized = false;
    win.isMaximized = false;
    win.zIndex = INITIAL_Z_INDEX;
    win.data = null;

  }),
  minimizeWindow :(windowKey )=>set((state)=>{
    const win = state.windows[windowKey];
    if(!win) return ;
    win.isMinimized = true;
  }),
  restoreWindow :(windowKey )=>set((state)=>{
    const win = state.windows[windowKey];
    if(!win) return ;
    win.isMinimized = false;
    win.zIndex = state.nextZIndex++;
  }),
  toggleMaximizeWindow :(windowKey )=>set((state)=>{
    const win = state.windows[windowKey];
    if(!win) return ;
    win.isMaximized = !win.isMaximized;
    win.zIndex = state.nextZIndex++;
  }),
  focusWindow :(windowKey )=>set((state)=>{
    const win = state.windows[windowKey];
    win.zIndex = state.nextZIndex++;
    
  })
})),
)

export default useWindowStore;