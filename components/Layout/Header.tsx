"use client"
import { BuilderContent } from "@builder.io/react";

export function Header({ headerContent }: any) {
  return (
    <BuilderContent model="header-links" content={headerContent}>
      {(data) => (
        <header style={{ display: "none" }} />
      )}
    </BuilderContent>
  );
}