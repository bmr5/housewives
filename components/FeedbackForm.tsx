import React from "react";
import Link from "next/link";
function FeedbackForm() {
  return (
    <Link href="https://twitter.com/YourBuddyConner">
      <p className="text-center text-xxs leading-5 text-gray-500 hover:text-gray-900 hover:underline">
        Got Feedback?
      </p>
    </Link>
  );
}

export default FeedbackForm;
