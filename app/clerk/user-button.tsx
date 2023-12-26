"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";

function UserButtonComponent() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default UserButtonComponent;
