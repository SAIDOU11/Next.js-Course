"use client";

import React from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">{error.message}</h1>
      <button
        onClick={reset}
        className="py-2 px-3 bg-blue-900 text-white rounded-md"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
