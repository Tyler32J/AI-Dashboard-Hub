import React, { useState, useRef, useEffect } from "react"; /* Hooks for storing data, accessing DOM, and running effects*/
import { Wrench, Code2, Receipt, Users, Settings, LayoutDashboard, PieChart as PieChartIcon, Bot } from "lucide-react"; /* SVG Icons // Dashboard icons for buttons and navigation*/

/* Shared UI pieces are split into separate components so the app stays organized. */
import Sidebar from ".components/Sidebar";
import TopBar from ".components/TopBar";
import MobileDrawer from ".components/MobileDrawer";
import ChatPanel from ".components/ChatPanel";
import Dashboard from ".components/Dashboard";
import JobsPage from ".components/JobsPage";
import Invoices from ".components/Invoices";
import CustomersPage from ".components/CustomersPage";
import ReportsPages from ".components/ReportsPages";
import SettingsPage from ".components/SettingsPage";


import {PROFILES} from "./data"; /* Profiles the app uses (AI modes, user presets) */
import { answerFor, getTheme, getAccent } from "./utils" /* Functions that generate answers and load theme/accent colors */

// Global styles and app-specific layout styles.
import "./styles/global.css";
import "./App.css";

export default function App() {
    
}