import React from "react";
import { Share2, Linkedin, Twitter } from "lucide-react";

const SocialShare = () => {
  const shareUrl = window.location.href;
  const title =
    "MasterClass Automation Live - Aprenda automação de testes com JavaScript";
  const summary =
    "Curso completo de automação de testes com JavaScript e Cypress para QAs e profissionais de teste.";

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${encodeURIComponent(
      shareUrl
    )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
      summary
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(title)}`,
  };

  const handleLinkedInShare = () => {
    // Usando API do LinkedIn para feed
    window.open(
      `https://www.linkedin.com/feed/?shareActive=true&shareUrl=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank",
      "width=600,height=600"
    );
  };

  const handleTwitterShare = () => {
    window.open(shareLinks.twitter, "_blank", "width=600,height=400");
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="bg-gray-800 rounded-full p-3 shadow-lg">
        <div className="flex flex-col gap-2">
          <button
            className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition-colors"
            onClick={handleLinkedInShare}
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </button>
          <button
            className="bg-blue-400 p-2 rounded-full text-white hover:bg-blue-500 transition-colors"
            onClick={handleTwitterShare}
            aria-label="Share on Twitter"
          >
            <Twitter className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
