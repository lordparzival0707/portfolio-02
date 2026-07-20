import { useState } from "react";
import { House, GraduationCap, Briefcase, Envelope, List, X } from "phosphor-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);

  return (
    <div className="drawer drawer-end fixed top-0 left-0 right-0 z-50 w-full">
      <input 
        id="my-drawer-2" 
        type="checkbox" 
        className="drawer-toggle" 
        checked={isOpen}
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <header className="navbar bg-base-200/85 backdrop-blur-md border-b border-base-300/40 w-full px-4 md:px-8">
          <div className="flex-1">
            <a 
              href="#home" 
              className="text-lg font-bold font-mono tracking-widest text-base-content hover:text-primary transition-colors duration-200"
            >
              YAKO RABESON
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-none">
            <ul className="menu menu-horizontal gap-1 p-0">
              <li>
                <a href="#about" className="text-sm font-mono font-medium hover:text-primary rounded-xl py-2 px-4 transition-colors">
                  <House size={16} weight="bold" /> About me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm font-mono font-medium hover:text-primary rounded-xl py-2 px-4 transition-colors">
                  <GraduationCap size={16} weight="bold" /> Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm font-mono font-medium hover:text-primary rounded-xl py-2 px-4 transition-colors">
                  <Briefcase size={16} weight="bold" /> Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm font-mono font-medium hover:text-primary rounded-xl py-2 px-4 transition-colors">
                  <Envelope size={16} weight="bold" /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex-none lg:hidden">
            <label 
              htmlFor="my-drawer-2" 
              aria-label="open sidebar" 
              className="btn btn-square btn-ghost text-base-content"
            >
              <List size={24} weight="bold" />
            </label>
          </div>
        </header>
      </div>

      {/* Sidebar / Drawer Side */}
      <div className="drawer-side z-[60]">
        <label 
          htmlFor="my-drawer-2" 
          aria-label="close sidebar" 
          className="drawer-overlay"
          onClick={closeDrawer}
        ></label>
        
        <div className="menu bg-base-100 min-h-full w-80 p-6 flex flex-col gap-8 border-l border-base-300">
          <div className="flex justify-between items-center pb-4 border-b border-base-200">
            <span className="text-md font-bold font-mono tracking-wider">NAVIGATION</span>
            <button 
              onClick={closeDrawer} 
              className="btn btn-square btn-sm btn-ghost" 
              aria-label="Close menu"
            >
              <X size={20} weight="bold" />
            </button>
          </div>
          
          <ul className="flex flex-col gap-2 p-0">
            <li>
              <a 
                href="#about" 
                onClick={closeDrawer} 
                className="text-base font-mono py-3.5 px-4 rounded-2xl hover:bg-base-200 transition-colors"
              >
                <House size={20} weight="bold" className="text-primary" /> About me
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={closeDrawer} 
                className="text-base font-mono py-3.5 px-4 rounded-2xl hover:bg-base-200 transition-colors"
              >
                <GraduationCap size={20} weight="bold" className="text-primary" /> Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={closeDrawer} 
                className="text-base font-mono py-3.5 px-4 rounded-2xl hover:bg-base-200 transition-colors"
              >
                <Briefcase size={20} weight="bold" className="text-primary" /> Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={closeDrawer} 
                className="text-base font-mono py-3.5 px-4 rounded-2xl hover:bg-base-200 transition-colors"
              >
                <Envelope size={20} weight="bold" className="text-primary" /> Contact
              </a>
            </li>
          </ul>
          
          <div className="mt-auto text-center">
            <p className="text-xs font-mono text-base-content/40">© 2026 Yako Rabeson</p>
          </div>
        </div>
      </div>
    </div>
  );
}
