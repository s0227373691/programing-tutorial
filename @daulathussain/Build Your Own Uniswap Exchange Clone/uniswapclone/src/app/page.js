"use client";

import React, { useState, useContext, useEffect } from "react";

// ITERNAL IMPORT
import { NavBar, HeroSection } from "../components/";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection accounts="hey" tokenData="DATA" />
    </main>
  );
}
