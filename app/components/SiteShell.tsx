import type { ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import MotionLayer from "./MotionLayer";

export default function SiteShell({ children }: { children: ReactNode }) {
  return <><a className="skip-link" href="#main-content">Aller au contenu</a><MotionLayer /><SiteHeader /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter /></>;
}
