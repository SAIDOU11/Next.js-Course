import React from "react";
import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotifications = () => {
  return (
    <Card>
      <h1 className="text-3xl font-bold m-4">Archived Notifications</h1>
      <Link
        className="text-xl text-blue-600 underline visited:text-purple-600"
        href="/complex-dashboard"
      >
        Default
      </Link>
    </Card>
  );
};

export default ArchivedNotifications;
